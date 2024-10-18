import React from "react";
import * as C from "./styles";

const Input = ({ type, label, placeholder, value, name, onChange, height, labelPosition, isTextArea, align }) => {
  return (
    <C.Container labelPosition={labelPosition}  align={align}>
      <C.Label>{label}</C.Label>
      {isTextArea ? (
        <C.TextArea
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          height={height}
        />
      ) : (
        <C.Input
          value={value}
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          height={height}
        />
      )}
    </C.Container>
  );
};

export default Input;
