import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputVlaue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (event) => {
    setInputValue(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editIndex !== -1) {
      const newData = [...data];
      newData[editIndex] = inputVlaue;
      setData(newData);
      setEditIndex(-1);
      setInputValue('');
    } else {
      setData([...data, inputVlaue]);
      setInputValue('');
    }

  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(data[index]);
  };

  const handleRemove = (index) => {
    const newData = data.filter((_,i) => i !== index);
    setData(newData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' value={inputVlaue} onChange={handleChange}></input>
        </label>
        <button type='submit'>Submit</button>
      </form>

      <ul>
        {data.map((data,index) => (
          <li key={index}>
            {data}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleRemove(index)}>Delete</button>
          </li>
          
        ))}
        
      </ul>
    </div>
  )
}

export default App