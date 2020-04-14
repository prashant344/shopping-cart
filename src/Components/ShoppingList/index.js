import React from "react";

import ImageMapper, { searchNoResultImage } from "../ImageMapper";
import "./index.scss";

class ShoppingList extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    this.props.fetchProductList();
  }

  componentWillReceiveProps(newProps) {
    const productList = newProps.productList;
    const filterRange = newProps.filter && newProps.filter.filter;
    const sortValue = newProps.sort && newProps.sort.sort;
    const searchText =
      newProps &&
      newProps.searchText &&
      newProps.searchText.text &&
      newProps.searchText.text.trim();
    this.setState({
      productList,
    }, () => {
      const productListState = this.state.productList.length ? this.state.productList : newProps.productList;
      let items = [];
      productListState.items.forEach(item => {
        if (filterRange && searchText) {
          if (item.name.includes(searchText) && item.price.actual >= filterRange.lowerLimit &&
          item.price.actual <= filterRange.upperLimit) {
            items.push(item);
          }
        }  else if (filterRange && item.price.actual >= filterRange.lowerLimit &&
          item.price.actual <= filterRange.upperLimit) {
          items.push(item);
        } else if (searchText) {
          if (item.name.includes(searchText)) {
            items.push(item);
          }
        }
        if (sortValue) {
          if (sortValue.value === 'LowToHigh') {
          items = items.sort((a,b) => a.price.actual - b.price.actual);
        } else if (sortValue.value === 'HighToLow') {
          items = items.sort((a,b) => b.price.actual - a.price.actual);
        } else if (sortValue.value === 'Discount') {
          items = items.sort((a,b) => a.discount - b.discount);
        }
      }
      });
      this.setState((prevState) => ({
        productList: { ...prevState.productList, items: items },
      }));
    });
  }
  addToCart = (product) => {
    this.props.addToCart(product);
  };

  renderLoader = () => {
    if (this.state.productList.loading) {
      return (
        <div className={"spinnerContainer"}>
          <div className={"spinner"} />
        </div>
      );
    } else {
      return (
        <div className={"no-result"}>
          <img
            className={"no-result-image"}
            src={process.env.PUBLIC_URL + searchNoResultImage.src}
            alt={searchNoResultImage.title}
          />
        </div>
      );
    }
  };
  render() {
    return this.state.productList &&
      this.state.productList.items &&
      this.state.productList.items.length ? (
      <div className={"productListContainer"}>
        {this.state.productList.items.map((product, idx) => (
          <div className={"productContainer"} key={product.name}>
            <div className={"productImage"}>
              {ImageMapper.map(({ id, src, title }) =>
                id === idx + 1 ? (
                  <img
                    src={process.env.PUBLIC_URL + src}
                    alt={title}
                    key={id}
                    className={"image"}
                  />
                ) : null
              )}
            </div>
            <div className={"productTitle"}>{product.name}</div>
            <div className={"productPriceDetail"}>
              <span className={"actualPrice"}>
                &#8377;{product.price.actual}
              </span>
              <span className={"displayPrice"}>{product.price.display}</span>
              <span className={"discountPrice"}>{product.discount}% off</span>
            </div>
            <button
              className={"addToCartBtn"}
              onClick={() => this.addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    ) : (
      this.renderLoader()
    );
  }
}

export default ShoppingList;
