import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ labelPosition }) => (labelPosition === 'side' ? 'row' : 'column')};
  gap: 10px;
  width: 100%;
  align-items: ${({ align }) => align || 'center'}; 
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  display: ${({ labelPosition }) => (labelPosition === 'side' ? 'inline-block' : 'block')};
  width: ${({ labelPosition }) => (labelPosition === 'side' ? 'auto' : '100%')};
`;

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
  height: ${({ height }) => height || '20px'}; 
  font-family: inherit; 
`;

export const TextArea = styled.textarea`
  outline: none;
  padding: 16px 20px;
  width: 100%; 
  border-radius: 5px;
  font-size: 16px; 
  background-color: #f0f2f5;
  border: none;
  height: ${({ height }) => height || '100px'}; 
  resize: vertical; 
  font-family: inherit;
`;
