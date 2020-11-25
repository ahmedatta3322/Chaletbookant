import React, { useState } from "react";
import { DatePicker, Space, Button } from "antd";
import { useDispatch } from "react-redux";
import "../Styling/filter.css";
import { Select } from "antd";
import { InputNumber } from "antd";
import { getChaletsByFilter } from "../redux/actions/chaletActionCreator";

const { Option } = Select;

// const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export default function HomeFilter() {
  const [type, setType] = useState("available_to_all");
  const [fees, setFees] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const dispatch = useDispatch();
  function handleTypeChange(value) {
    console.log(`selected ${value}`);
    if (value === "All") {
      setType("available_to_all");
    } else if (value === "Rent") {
      setType("available_to_rent");
    } else if (value === "Exchange") {
      setType("available_to_exchange");
    }
  }
  function handleRegionChange(value) {
    console.log(`selected ${value}`);
    // if (value === "All") {
    //   setType("available_to_all");
    // } else if (value === "Rent") {
    //   setType("available_to_rent");
    // } else if (value === "Exchange") {
    //   setType("available_to_exchange");
    // }
  }
  function onToChange(date, dateString) {
    console.log(dateString);
    setTo(dateString);
  }
  function onFromChange(date, dateString) {
    console.log(dateString);
    setFrom(dateString);
  }

  function onChange(value) {
    console.log("changed", value);
    setFees(value);
  }
  const handleFilter = () => {
    dispatch(getChaletsByFilter(type, fees, from, to));
  };

  return (
    // <Row>
    //   <Col span={13} offset={5}>
    <div className="filter">
      <Select
        defaultValue="Type"
        style={{ width: 109 }}
        onChange={handleTypeChange}
      >
        <Option value="All">All</Option>
        <Option value="Rent">Rent</Option>
        <Option value="Exchange">Exchange</Option>
        <Option value="Sell">Sell</Option>
      </Select>
      <label> From :</label>
      <Space direction="vertical" size={12}>
        <DatePicker onChange={onFromChange} />
      </Space>
      <label> To :</label>
      <Space direction="vertical" size={12}>
        <DatePicker onChange={onToChange} />
      </Space>
      <label> Region</label>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleRegionChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <label>Maximum Price</label>
      <InputNumber min={1} onChange={onChange} />
      <Button
        className="filter-btn"
        onClick={handleFilter}
        style={{ backgroundColor: "#F8B544", color: "white", border: "none" }}
      >
        Filter
      </Button>
    </div>
    //   </Col>
    // </Row>
  );
}
