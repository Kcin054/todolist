import { useState } from "react";
import Input from "./Input";

function List({data}) {
    
  return (
    <>
      {data.map((data, index) => (
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
