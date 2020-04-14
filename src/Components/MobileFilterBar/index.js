import React from "react";

import MobileSort from "../../Containers/MobileSort";
import MobileFilter from '../../Containers/MobileFilter';
import "./index.scss";

class MobileFilterBar extends React.Component {
  constructor() {
    super();
    this.state = {
      renderSort: false,
      renderFilter: false,
    };
  }
  renderSort = () => {
    this.setState({
      renderSort: true,
    });
  };
  renderFilter = () => {
    this.setState({
      renderFilter: true,
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.renderSort ? <MobileSort /> : null}
        {this.state.renderFilter ? <MobileFilter /> : null}
        <div className={"filterBar"}>
          <button onClick={this.renderSort}>Sort</button>
          <button onClick={this.renderFilter}>Filter</button>
        </div>
      </React.Fragment>
    );
  }
}

export default MobileFilterBar;
