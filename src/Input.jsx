import React from "react";
import { useState } from "react";

const Input = ({ saveInput }) => {
  const [data, setData] = useState([]);
  const [input,setInput] = useState('');
  

  const onSubmit = (event) => {
    event.preventDefault();

    if (editIndex !== -1) {
      const newData = [...data];
      newData[editIndex] = saveInput;
      setData(newData);
      setEditIndex(-1);
      setInput("");
    } else {
      saveInput(setData([...data, saveInput]));
      setInput("");

    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={saveInput}
        onChange={onChange}
        style={{ margin: 10 }}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
