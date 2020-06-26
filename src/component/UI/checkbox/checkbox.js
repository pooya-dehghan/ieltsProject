import React from "react";
import {Card, Checkbox} from "antd";

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

const Basic = (props) => {
  return (
      <Checkbox onChange={props.onChange}>{props.title}</Checkbox>
  );
};

export default Basic;
