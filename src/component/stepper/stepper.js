import React, {Component} from "react";
import {Button, Card, message, Steps} from "antd";

import classes from "./stepper.module.css";
import 'antd/dist/antd.css';

const Step = Steps.Step;

const steps = [{
  id: 0,
  title: 'هفته اول',
  content: 'بخون تا جونت در بیاد',
}, {
  id:1,
  title: 'هفته دوم',
  content: 'بیشتر بخون',
}, {
  id:2,
  title: 'هفته سوم',
  content: 'یکم دیگه بخون',
},{
  id:3,
  title: 'هفته چهارم',
  content: 'تبریک میگم'
},{
  id:4,
  title: 'هفته پنجم',
  content: 'لنت یه ذات خرخونت'
},{
  id:5,
  title: 'هفته ششم',
  content: 'خرخون شماره یک'
},{
  id:6,
  title: 'هفته هفتم',
  content: 'شمما بالخزه  یک چیزی میشید'
}];

class SwitchStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }


  next() {
    const current = this.state.current + 1;
    this.setState({current});
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({current});
  }
  
  goToState (item) {
    this.setState({current : item.id});
  }


  render() {
    const {current} = this.state;
    return (
      <Card className="gx-card" title="Switch Step">
        <Steps direction = "vertical" current={current}>
          {steps.map(item => <Step onClick={() => this.goToState(item)} key={item.title} title={item.title}/>)}
        </Steps>
        <div className={classes.stepscontent}>{steps[this.state.current].content}</div>
        <div className={classes.stepsaction}>
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{marginLeft: 8}} onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>
      </Card>
    );
  }
}


export default SwitchStep;
