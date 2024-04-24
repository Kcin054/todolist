import { Button, Card, Row } from "antd";
import React from "react";

function ListComponent({ data, onDelete, onEdit }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "40vw" , marginTop:15 }}>
        {data.map((data, i) => (
          <div key={i} sty>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {data}
              <div>
                <Button onClick={() => onEdit(i)} style={{ margin: 10 }}>
                  Edit
                </Button>
                <Button onClick={() => onDelete(i)} style={{ margin: 10 }}>
                  Delete
                </Button>
              </div>
            </Row>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default ListComponent;
