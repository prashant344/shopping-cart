import React from "react";

import ImageMapper from "../ImageMapper";
import { emptyCartImage } from "../ImageMapper";
import "./index.scss";

class ShoppingCartRaw extends React.Component {
  decrementQty = (item) => {
    if (item.qty > 1) {
      this.props.decrementQty(item);
    }
  };
  renderLeftPanel = () => (
    <div className={"shoppingCart"}>
      {this.props.products &&
      this.props.products.cartItems &&
      this.props.products.cartItems.length ? (
        this.props.products.cartItems.map((product, idx) => (
          <div className={"leftPanel"}>
            <div className={"itemContainer"}>
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
              <div className={"productInfo"}>
              <div className={"productDetails"}>
                <div className={"productTitle"}>{product.name}</div>
                <div className={"productPriceDetail"}>
                  <span className={"actualPrice"}>
                    &#8377;{product.price.actual}
                  </span>
                  <span className={"displayPrice"}>
                    {product.price.display}
                  </span>
                  <span className={"discountPrice"}>
                    {product.discount}% off
                  </span>
                </div>
              </div>
              <div className={"incDecButtons"}>
                <button onClick={() => this.props.incrementQty(product)}>
                  +
                </button>
                <input type={"number"} value={product.qty} />
                <button onClick={() => this.decrementQty(product)}>-</button>
              </div>
              <div className={"removeButtonContainer"}>
                <button onClick={() => this.props.removeProduct(product)}>
                  Remove
                </button>
              </div>
                    </div>
            </div>
          </div>
        ))
      ) : (
        <img
          className={"empty-cart"}
          src={emptyCartImage.src}
          alt={emptyCartImage.title}
        />
      )}
    </div>
  );

  renderRightPanel = () => {
    const itemsLength =
      this.props.products &&
      this.props.products.cartItems &&
      this.props.products.cartItems.length;
    let totalPrice = 0;
    let totalDiscount = 0;
    let totalPayable = 0;
    if (itemsLength) {
      this.props.products.cartItems.forEach((item) => {
        totalPrice += item.price.display;
        totalPayable += item.price.actual;
        totalDiscount = totalPrice - totalPayable;
      });
    }
    return itemsLength ? (
      <div className={"rightPanel"}>
        <div className={"priceDetails"}>
          <div className={"priceDetailLabel"}>Price Details</div>
          <div className={"priceLabel"}>
            <span>Price</span>
            <span>:</span>
            <span>&#8377;{totalPrice}</span>
          </div>
          <div className={"discountLabel"}>
            <span>Discount</span>
            <span>:</span>
            <span>&#8377;{totalDiscount}</span>
          </div>
          <div className={"payableAmountLabel"}>
            <span>Total Payable</span>
            <span>&#8377;{totalPayable}</span>
          </div>
        </div>
      </div>
    ) : null;
  };
  render() {
    return (
      <div className={"shoppingCartContainer"}>
        {this.renderLeftPanel()}
        {this.renderRightPanel()}
      </div>
    );
  }
}

export default ShoppingCartRaw;
