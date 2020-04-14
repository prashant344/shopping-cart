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
    };
  }
  componentDidMount() {
    if (this.state.selectedOptionId === 1) {
      this.props.sortProduct(sortOptions[0]);
    }
  }
  changeSortOption = (id) => {
    const selectedSortOption = sortOptions.find((item) => item.id === id);
    this.setState({
      selectedOptionId: id,
    });
    this.props.sortProduct(selectedSortOption);
  };
  render() {
    return (
      <div className={"sort"}>
        <span className={"title"}>Sort by</span>
        {sortOptions.map((option) => (
          <span
            className={
              this.state.selectedOptionId === option.id
                ? "option active"
                : "option"
            }
            onClick={() => this.changeSortOption(option.id)}
          >
            {option.text}
          </span>
        ))}
      </div>
    );
  }
}

export default SortRaw;
