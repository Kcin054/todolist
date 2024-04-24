import { Button, Input } from "antd";
import React from "react";

function InputComponent({ input, onChange, onSubmit }) {
  return (
    <div>
      <form>
        <Input
          type="text"
          value={input}
          onChange={onChange}
          style={{ width: "50vw" }}
        ></Input>
        <Button
          type="submit"
          onClick={onSubmit}
          style={{ backgroundColor: "#36cfc9", marginLeft: 10 }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default InputComponent;
