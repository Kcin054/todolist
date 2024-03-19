import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleCheck = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    if (editIndex !== -1) {
      const newData = [...data];
      newData[editIndex] = inputValue;
      setData(newData);
      setEditIndex(-1);
      setInputValue('');
    } else {
      setData([...data, inputValue]);
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
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' value={inputValue} onChange={handleCheck}></input>
        </label>
        <button type='submit'>Submit</button>
      </form>

      <ul>
        {data.map((data, index) => (
          <li key={index}>
            {data}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleRemove(index)}>Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
