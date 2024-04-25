import { Button, Input } from "antd";
import React from "react";
import { PlusCircleFilled, UnorderedListOutlined } from "@ant-design/icons";

function InputComponent({ input, onChange, onSubmit }) {
  return (
    <div>
      <h1 style={{ fontSize: 50, display: "flex", justifyContent: "center" }}>
        {" "}
        <UnorderedListOutlined style={{ marginRight: 10 }} />
        Todo List
      </h1>
      <form>
        <Input
          type="text"
          value={input}
          onChange={onChange}
          style={{ width: "30vw", marginRight: 10 }}
        ></Input>
        <Button
          onClick={onSubmit}
          style={{
            color: "#FFFFFF",
            border: "none",
            backgroundColor: "#08979c",
          }}
        >
          <PlusCircleFilled />
          submit
        </Button>
      </form>
    </div>
  );
}

export default InputComponent;
