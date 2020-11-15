import React from "react";
import { DatePicker, Space, Dropdown, Button, Menu } from "antd";
import moment from "moment";
import { DownOutlined } from "@ant-design/icons";
import "../Styling/filter.css";
import { Select } from "antd";
import { InputNumber } from "antd";

function onChange(value) {
  console.log("changed", value);
}
const { Option } = Select;
const menu = (
  <Menu>
    <Menu.Item key="1">All</Menu.Item>
    <Menu.Item key="2">Rent</Menu.Item>
    <Menu.Item key="3">Exchange</Menu.Item>
    <Menu.Item key="4">Sell</Menu.Item>
  </Menu>
);

function handleChange(value) {
  console.log(`selected ${value}`);
}
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export default function HomeFilter() {
  return (
    // <Row>
    //   <Col span={13} offset={5}>
    <div className="filter">
      <Dropdown overlay={menu}>
        <Button className="type-btn">
          Type
          <DownOutlined />
        </Button>
      </Dropdown>
      <label> From :</label>
      <Space direction="vertical" size={12}>
        <DatePicker
          defaultValue={moment("01/01/2015", dateFormatList[0])}
          format={dateFormatList}
        />
      </Space>
      <label> To :</label>
      <Space direction="vertical" size={12}>
        <DatePicker
          defaultValue={moment("01/01/2015", dateFormatList[0])}
          format={dateFormatList}
        />
      </Space>
      <label> Region</label>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <label>Maximum Price</label>
      <InputNumber min={1} max={10} onChange={onChange} />
      <Button
        className="filter-btn"
        style={{ backgroundColor: "#F8B544", color: "white", border: "none" }}
      >
        Filter
      </Button>
    </div>
    //   </Col>
    // </Row>
  );
}
