import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (event) =>{
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editIndex !== -1) {
      const newData = [...data];
      newData[editIndex] = input;
      setData(newData);
      setEditIndex(-1);
      setInput('');
    } else {
      setData([...data, input]);
      setInput('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(data[index]);
  };

  const handleRemove = (index) => {
    const newData = data.filter((_,i) => i !== index);
    setData(newData);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' style={{margin:5}} value={input} onChange={handleChange}></input>
        <button type='submit'>Submit</button>
      </form>
      {data.map((data, index) => (
        <li key={index}>
          {data}
          <button onClick={() => handleEdit(index)} style={{margin:5}}>Edit</button>
          <button onClick={() => handleRemove(index)} style={{margin:5}}>Delete</button>
        </li>
      ))}
    </div>
  )
}

export default App