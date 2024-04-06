import { Button } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    ProfileFilled,
  } from "@ant-design/icons";

const List = ({ data, onEdit, onDelete }) => {
  return (
    <div>
      {data.map((data, i) => (
        <li key={i}>
          {data}
          <Button onClick={() => onEdit(i)} style={{ margin: 10, backgroundColor:"#d9d9d9" }} >
          <EditOutlined />
            Edit
          </Button>
          <Button onClick={() => onDelete(i)} style={{ backgroundColor:"#ff7875"}}>
          <DeleteOutlined />
            Delete
          </Button>
        </li>
      ))}
    </div>
  );
};

export default List;