import React from "react";
import {Button, Card, Progress} from "antd";
import {PlusOutlined,MinusOutlined} from "@ant-design/icons";
import classes from './wprogress.module.css'
import {connect} from 'react-redux'

// const ButtonGroup = Button.Group;

class DynamicCircularBar extends React.Component {
  // state = {
  //   percent: 0,
  // };
  // increase = () => {
  //   let percent = this.state.percent + 10;
  //   if (percent > 100) {
  //     percent = 100;
  //   }
  //   this.setState({percent});
  // };
  // decline = () => {
  //   let percent = this.state.percent - 10;
  //   if (percent < 0) {
  //     percent = 0;
  //   }
  //   this.setState({percent});
  // };

  render() {
    console.log("percantage: ",this.props.percantage);
    
    return (
        <div className = {classes.progress}>
        <Progress type="circle" percent={this.props.percantage}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    percantage: state.percentage.percantage,
  }
}
export default connect(mapStateToProps, null)(DynamicCircularBar);
