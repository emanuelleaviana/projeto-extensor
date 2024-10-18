import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; 
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
  place-self: center;
  margin-top: 40px;
`;

export const H1 = styled.h1`
    color: #046ee5;
    font-size: 18px;
    white-space: nowrap;
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
`;