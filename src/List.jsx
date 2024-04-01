import { Button } from "antd"

const List = ({data, onEdit, onDelete}) => {
    return (
        <div>
            {data.map((data, i) => {
                <li key={i}>
                    {data}
                    <Button onClick={() => onEdit(i)} style={{ margin:5 }}>Edit</Button>
                    <Button onClick={() => onDelete(i)} style={{ margin:5 }}>Delete</Button>
                </li>
            })}
        </div>
    );
};