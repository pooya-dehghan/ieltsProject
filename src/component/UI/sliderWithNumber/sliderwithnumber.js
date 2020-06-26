import React from "react";
import {Card, Col, InputNumber, Row, Slider} from "antd";
import classes from "./sliderwithnumber.module.css";


class SliderWithNumber extends React.Component {
  // state = {
  //   inputValue: 1,
  // };
  // onChange = (value) => {
  //   this.setState({
  //     inputValue: value,
  //   });
  // };

  render() {
    return (
        <div className = {classes.main}>
          <div>
            <Slider min={1} max={20} onChange={this.props.onChange} value={this.props.value} className = {classes.slider}/>
          </div>
          <div className = {classes.InputNumber}>
            <InputNumber
              min={1}
              max={20}
              value={this.props.value}
              onChange={this.props.onChange}
            />
          </div>
        </div>
    );
  }
}

export default SliderWithNumber;
