import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";
import { Card } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [indexEdit, setIndexEdit] = useState(-1);

  const onChange = (event) => {
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
    <div style={{ width:"100%", height:"99vh"}}>
      <div
        style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}
      >
        <InputComponent input={input} onChange={onChange} onSubmit={onSubmit} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: "30vw",
            height: "60vh",
            overflowY: "auto",
            backgroundColor: "#262626",
            color: "#FFFFFF",
          }}
        >
          <ListComponent data={data} onDelete={onDelete} onEdit={onEdit} />
        </Card>
      </div>
    </div>
  );
}

export default App;
