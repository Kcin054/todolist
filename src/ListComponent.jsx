import React from "react";
import { Button, Col, Row } from "antd";
import { SettingOutlined, DeleteOutlined } from "@ant-design/icons";

function ListComponent({ data, onEdit, onDelete }) {
  return (
    <div>
      {data.map((data, i) => (
        <div key={i}>
          <Row style={{ marginBottom: 20, display:"flex", alignItems:"center" }}>
            <Col span={16}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  width: "17vw",
                  height:"5vh",
                }}
              >
                {data}
              </div>
            </Col>
            <Col span={8}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => onEdit(i)}
                  style={{
                    marginRight: 5,
                    backgroundColor: "#8c8c8c",
                    color: "#FFFFFF",
                    border: "none",
                  }}
                >
                  <SettingOutlined />
                </Button>
                <Button
                  onClick={() => onDelete(i)}
                  style={{
                    marginLeft: 5,
                    backgroundColor: "#cf1322",
                    color: "#FFFFFF",
                    border: "none",
                  }}
                >
                  <DeleteOutlined />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default ListComponent;
