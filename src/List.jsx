import { useState } from "react";

const List = ({ getData, editData, removeData }) => {
    
    return (
        <div>
            {getData.map((getData, i) => (
                <div key={i}>
                    {getData}
                    <button onClick={() => editData(i)}>Edit</button>
                    <button onClick={() => removeData(i)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default List;