import { Button, Input } from "antd";
import { useState } from "react";
import List from "./List";
import {
    UnorderedListOutlined,
    DeleteOutlined,
    ProfileFilled,
  } from "@ant-design/icons";

const FormInput = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [indexEdit, setIndexEdit] = useState(-1);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (indexEdit !== -1) {
      const newData = [...data];
      newData[indexEdit] = input;
      setData(newData);
      setIndexEdit(-1);
      setInput("");
    } else {
      setData([...data, input]);
      setInput("");
    }
  };

  const onEdit = (index) => {
    setIndexEdit(index);
    setInput(data[index]);
  };

  const onDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div>
        <h1> <UnorderedListOutlined style={{marginRight:10}} />To Do List</h1>
      <form>
        <Input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ width: 300, marginRight:5}}
        ></Input>
        <Button type="submit" onClick={onSubmit} style={{backgroundColor:"#69b1ff"}}>
          Submit
        </Button>
      </form>
      <List data={data} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default FormInput;