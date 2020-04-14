import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartButton from "../ShoppingCartButton";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = ({ items, searchProduct, products }) => (
  <div className={"header"}>
    <Link to={"/"}>
      <FontAwesomeIcon
        icon={faStar}
        style={{ color: "#f7ad22" }}
        size={"lg"}
        className={"star-icon"}
      />
    </Link>
    <input
      placeholder={"Search"}
      className={"searchBar"}
      type={"text"}
      onChange={(event) => searchProduct(event.target.value, products)}
    />
    <FontAwesomeIcon
      icon={faSearch}
      style={{
        color: "#ffffff",
      }}
      className={"search-icon"}
      size={"lg"}
    />
    <ShoppingCartButton items={items} />
  </div>
);

export default Header;
