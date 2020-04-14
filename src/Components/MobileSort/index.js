import React from "react";

import "./index.scss";

const sortOptions = [
  { id: 1, text: "Price -- High to Low", value: "HighToLow" },
  { id: 2, text: "Price -- Low to High", value: "LowToHigh" },
  { id: 3, text: "Discount", value: "Discount" },
];

class SortRaw extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOptionId: 1,
      showPopup: true,
    };
  }
  componentDidMount() {
    if (this.state.selectedOptionId === 1) {
      this.props.sortProduct(sortOptions[0]);
    }
    this.setState({
      showPopup: true,
    });
  }
  changeSortOption = (id) => {
    this.setState({
      selectedOptionId: id,
    });
  };

  hidePopup = () => {
    this.setState({
      showPopup: false,
    });
  };
  applySort = () => {
    this.setState({
      showPopup: false,
    });
    const selectedSortOption = sortOptions.find(
      (item) => item.id === this.state.selectedOptionId
    );
    this.props.sortProduct(selectedSortOption);
  };
  render() {
    return this.state.showPopup ? (
      <React.Fragment>
        <div className={"mobileSort"}>
          <div className={"title"}>Sort Options</div>
          {sortOptions.map((option) => (
            <div>
              <input
                onChange={() => this.changeSortOption(option.id)}
                name={"sort-radio-btn"}
                type={"radio"}
                id={option.value}
                checked={option.id === this.state.selectedOptionId}
              />
              <label for={option.value}>{option.text}</label>
            </div>
          ))}
          <button onClick={this.hidePopup} className={"cancelBtn"}>
            Cancel
          </button>
          <button onClick={this.applySort} className={"applyBtn"}>
            Apply
          </button>
        </div>
        <div onClick={this.hidePopup} className={"overlay"} />
      </React.Fragment>
    ) : null;
  }
}

export default SortRaw;
