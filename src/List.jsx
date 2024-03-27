import { useState } from "react";
import Input from "./Input";

function List({ datas }) {
  const [data, setData] = useState([]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(data[index]);
  };

  const handleRemove = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <>
      {datas.map((data, index) => (
        <li key={index}>
          <card>
            {data}
            <button onClick={() => handleEdit(index)} style={{ margin: 10 }}>
              Edit
            </button>
            <button onClick={() => handleRemove(index)} style={{ margin: 10 }}>
              Remove
            </button>
          </card>
        </li>
      ))}
    </>
  );
}

export default List;
