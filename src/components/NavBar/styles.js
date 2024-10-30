import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around; 
  background-color: #007bff; 
  padding: 10px 0;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0px;
`;

export const NavItem = styled.div`
  color: white; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  font-size: 24px; 

  &:hover {
    text-decoration: underline; 
  }
`;
