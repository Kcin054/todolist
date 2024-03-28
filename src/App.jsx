import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputValue from "./InputValue";
import './App.css'

function App() {
  // const [input, setInput] = useState('');
  // const [data, setData] = useState([]);
  // const [indexEdit, setIndexEdit] = useState(-1);
  
  // const onFinish = (values) => {
  //   event.preventDefault();

  //   if (indexEdit !== -1) {
  //     const newData = [...data];
  //     newData[indexEdit] = input;
  //     setData(newData);
  //     setEditIndex(-1);
  //     setInput("");
  //   } else {
  //     setData([...data,input]);
  //     setInput('');
  //   }
  // };

  // const onEdit = (index) => {
  //   setIndexEdit(index);
  //   setInput(data[index]);
  // };

  // const onDelete = (index) => {
  //   const newData = data.filter((_,i) => i !== index);
  //   setData(newData);
  // }

  return (
    <div>
      <InputValue/>
    </div>
  )
}

export default App
