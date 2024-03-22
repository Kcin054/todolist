import { useState } from "react";
import "./App.css";
import { Button, Input, Row } from "antd";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editIndex !== -1) {
      const newData = [...data];
      newData[editIndex] = inputValue;
      setData(newData);
      setEditIndex(-1);
      setInputValue("");
    } else {
      setData([...data, inputValue]);
      setInputValue("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(data[index]);
  };

  const handleRemove = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <Input
          type="text"
          value={inputValue}
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

      <Row justify={"center"}>
        {data.map((data, index) => (
          <li key={index}>
            {data}
            <Button
              onClick={() => handleEdit(index)}
              style={{
                margin: 10,
                color: "#ffffff",
                backgroundColor: "#434343",
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleRemove(index)}
              style={{
                margin: 10,
                color: "#ffffff",
                backgroundColor: "#ad2102",
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </Row>
    </div>
  );
}

export default App;
