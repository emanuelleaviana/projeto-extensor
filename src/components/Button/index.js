import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, backgroundColor, color, border, Type = "button" }) => {

  return (
    <C.Button style={{color: color, backgroundColor: backgroundColor, border: border}} type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default Button;