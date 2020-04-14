import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import './index.scss';

const useStyles = makeStyles({
  root: {
    padding: '30px 30px 10px 30px',
    boxSizing: "border-box",
  },
});

function valuetext(value) {
  return value;
}

const RangeSlider = ({ handleRangeChange }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([100, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleRangeChange(newValue);
  };

  return (
    <div className={classes.root}>
      <div>
        <span className={"minValueLabel"}>&#8377;{value[0]}</span>
        <span className={"maxValueLabel"}>&#8377;{value[1]}</span>
      </div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={100}
        max={10000}
        step={100}
        defaultValue={[100, 10000]}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

export default RangeSlider;
