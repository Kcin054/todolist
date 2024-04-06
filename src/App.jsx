import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormInput from "./FormInput";
import List from "./List";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [indexEdit, setIndexEdit] = useState(-1);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.perventDefault();

    if (indexEdit !== -1) {
      const newData = [...data];
      newData[indexEdit] = inputValue;
      setData(newData);
      setIndexEdit(-1);
      setInputValue("");
    } else {
      setData(...data, inputValue);
      setInputValue("");
    }
  };

  const handleEdit = (index) => {
    setIndexEdit(index);
    setInputValue(data[index]);
  };

  const handleDelete = () => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div>
      <FormInput
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
