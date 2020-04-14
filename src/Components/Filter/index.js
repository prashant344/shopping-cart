import React from "react";

import RangeSlider from '../RangeSlider';
import './index.scss';

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      rangeValue: [100, 10000],
    };
  }
  componentDidMount() {
    this.props.filterProduct(this.state.rangeValue);
  }
  handleRangeChange = (newValue) => {
      this.setState({
          rangeValue: newValue,
      });
  }
  handleOnClick = () => {
    this.props.filterProduct(this.state.rangeValue);
  }
  render() {
    return (
      <div className={"filterContainer"}>
        <div className={"filterLabel"}>Filters</div>
        <RangeSlider handleRangeChange={this.handleRangeChange} />
        <button className={"applyBtn"} onClick={this.handleOnClick}>Apply</button>
      </div>
    );
  }
}

export default Filter;
