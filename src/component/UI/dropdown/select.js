import React from "react";
import {Button, Card, Dropdown, Menu, message} from "antd";
import {DownOutlined} from '@ant-design/icons';

const ButtonWithDropdown = (props) => {
    const menu = (
        <Menu onClick={props.onClick}>
        <Menu.Item key="1">Products</Menu.Item>
        <Menu.Item key="2">Apps</Menu.Item>
        <Menu.Item key="3">Blogs</Menu.Item>
        </Menu>
);
  return (
      <Dropdown overlay={menu}>
        <span className='gx-d-inline-flex'>
          <Button>
            Button <DownOutlined className='gx-fs-xs'/>
          </Button>
        </span>
      </Dropdown>
  );
};

export default ButtonWithDropdown;
