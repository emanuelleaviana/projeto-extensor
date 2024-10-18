import React from 'react';
import * as C from "./styles"; 

const Select = ({ label, name, value, options, onChange, labelPosition }) => {
  return (
    <C.Container labelPosition={labelPosition}>
      <C.Label labelPosition={labelPosition}>{label}</C.Label>
      <C.Select 
        name={name} 
        value={value} 
        onChange={onChange}
      >
        <option value="" disabled>Selecione uma opção</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </C.Select>
    </C.Container>
  );
};

export default Select;
