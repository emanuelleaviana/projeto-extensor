import React from "react";
import * as C from "./styles";

const Input = ({ type, label, placeholder, value, name, onChange }) => {
  return (
    <C.Container>
      <C.Label>{label}</C.Label>
      <C.Input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </C.Container>
  );
};

export default Input;