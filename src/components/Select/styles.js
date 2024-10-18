import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ labelPosition }) => (labelPosition === 'side' ? 'row' : 'column')};
  gap: 10px;
  width: 100%;
  align-items: center; 
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  display: ${({ labelPosition }) => (labelPosition === 'side' ? 'inline-block' : 'block')};
  width: ${({ labelPosition }) => (labelPosition === 'side' ? 'auto' : '100%')};
`;

export const Select = styled.select`
  outline: none;
  width: 100%; 
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
  height: 40px; 
  flex-grow: 1; 
  padding-left: 10px;
`;
