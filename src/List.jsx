import { Button } from "antd";
import { SettingOutlined, DeleteOutlined } from "@ant-design/icons";

const List = ({ data, onEdit, onDelete }) => {
  return (
    <div>
      {data.map((data, i) => (
        <li key={i}>
          {data}
          <Button onClick={() => onEdit(i)} style={{ margin: 10 }}>
            <SettingOutlined />
          </Button>
          <Button onClick={() => onDelete(i)} style={{ margin: 0 }}>
            <DeleteOutlined />
          </Button>
        </li>
      ))}
    </div>
  );
};

export default List;
