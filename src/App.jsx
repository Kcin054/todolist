import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";

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
    <div>
      <h1>Todo list</h1>
      <div>
        <InputComponent input={input} onChange={onChange} onSubmit={onSubmit} />
      </div>
      <div>
        <ListComponent data={data} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
}

export default App;
