import { useState } from "react";

function Input(form) {
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [data, setData] = useState([]);

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={onChange}
        style={{ margin: 10 }}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Input;
