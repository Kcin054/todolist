import { useState } from "react";
import List from "./List"
import { Input,Button } from "antd";

const InputValue = () => {
  const [getInput, setInput] = useState("");
  const [getData, setData] = useState([]);
  const [getEditIndex, setEditIndex] = useState(-1);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (getEditIndex !== -1) {
      const newData = [...getData];
      newData[getEditIndex] = getInput;
      setData(newData);
      setEditIndex(-1);
      setInput("");
    } else {
      setData([...getData, getInput]);
      setInput("");
    }
  };

  const editData = (index) => {
    setEditIndex(index);
    setInput(getData[index]);
  };

  const removeData = (index) => {
    const newData = getData.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <Input
          type="text"
          value={InputValue}
          onChange={handleChange}
          style={{ width: 300, margin: 10 }}
        ></Input>
        <Button
          type="submit"
          onClick={handleSubmit}
          style={{ backgroundColor: "#08979c" }}
        >
          Submit
        </Button>
      </form>
      <List getData={getData} editData={editData} removeData={removeData}/>
    </div>
  );
};

export default InputValue;
