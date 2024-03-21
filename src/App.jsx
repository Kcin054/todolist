import { useState } from "react";
import "./App.css";
import { Button, Card, Input } from "antd";
import SizeContext from "antd/es/config-provider/SizeContext";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editIndex !== -1) {
      const newData = [...data];
      newData[editIndex] = input;
      setData(newData);
      setEditIndex(-1);
      setInput("");
    } else {
      setData([...data, input]);
      setInput("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(data[index]);
  };

  const handleRemove = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={input}
          onChange={handleChange}
          style={{ width: 300, margin:10 }}
        ></Input>
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
        {data.map((data, index) => (
          <Card key={index}>
            {data}
            <Button onClick={() => handleEdit(index)} style={{margin:5}}>Edit</Button>
            <Button onClick={() => handleRemove(index)} style={{margin:5}}>Delete</Button>
          </Card>
        ))}
    </div>
  );
}

export default App;
