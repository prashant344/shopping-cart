import React from "react";

import Filter from "../../Containers/Filter";
import MobileFilterBar from "../../Components/MobileFilterBar";
import ShoppingList from "../../Containers/ShoppingList";
import "./index.scss";
import Sort from "../../Containers/Sort";
import ErrorBoundry from "../ErrorBoundry";

const Dashboard = () => (
  <div className={"dashboard"}>
    <ErrorBoundry>
      <MobileFilterBar />
      <Filter />
      <div className={"rightPane"}>
        <Sort />
        <ShoppingList />
      </div>
    </ErrorBoundry>
  </div>
);

export default Dashboard;
