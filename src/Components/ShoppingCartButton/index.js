import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

class ShoppingCartButton extends React.Component {
  getItemsCount = () => {
      let count = 0;
      if(this.props.items && this.props.items.length) {
        this.props.items.forEach(item => count += item.qty);
      }
      return count;
  }
  render() {
    return (
        <Link className={"shoppingCartButton"} to={"/shopping-cart"}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{
              color: "#ffffff",
            }}
            size={"lg"}
          />
          <span className={"itemsCount"}>
            {this.getItemsCount()}
          </span>
        </Link>
    );
  }
}

export default ShoppingCartButton;
