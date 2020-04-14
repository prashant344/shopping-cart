import React from "react";

import RangeSlider from "../RangeSlider";
import "./index.scss";

class MobileFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      rangeValue: [100, 10000],
      hidePopup: false,
    };
  }
  componentDidMount() {
    this.props.filterProduct(this.state.rangeValue);
  }
  handleRangeChange = (newValue) => {
    this.setState({
      rangeValue: newValue,
    });
  };
  hidePopup = () => {
    this.setState({
      hidePopup: true,
    });
  };
  handleOnClick = () => {
    this.props.filterProduct(this.state.rangeValue);
    this.setState({
        hidePopup: true,
      });
  };
  render() {
    return !this.state.hidePopup ? (
      <React.Fragment>
        <div className={"mobileFilter"}>
          <div className={"filterLabel"}>Filter Options</div>
          <RangeSlider handleRangeChange={this.handleRangeChange} />
          <button
            onClick={this.hidePopup}
            className={"cancelBtn"}
          >
            Cancel
          </button>
          <button className={"applyBtn"} onClick={this.handleOnClick}>
            Apply
          </button>
        </div>
        <div onClick={this.hidePopup} className={"overlay"} />
      </React.Fragment>
    ) : null;
  }
}

export default MobileFilter;
