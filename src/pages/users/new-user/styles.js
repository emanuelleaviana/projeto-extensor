import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Error = styled.p`
  color: red;
  font-size: 0.75rem;
`;

export const Success = styled.p`
  color: green;
  font-size: 1rem;
`;

export const H1 = styled.h1`
    color: #046ee5;
    font-size: 18px;
    white-space: nowrap;
    text-align: center;
    font-weight: 700;
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

export const Logo = styled.img`
  width: 200px; 
  height: 200px; 
  background-image: url('../../assets/logo.png');
  background-size: cover;
  background-position: center;
  text-align: center;
  margin-bottom: -35px;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px;
  width: 100%;
`;