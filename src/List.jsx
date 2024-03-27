import { useState } from "react";

const List = ({ getData, editData, removeData }) => {
    
    return (
        <div>
            {getData.map((e, i) => (
                <div key={i}>
                    {e}
                    <button onClick={() => editData(i, e)}>Edit</button>
                    <button onClick={() => removeData(i)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default List;
