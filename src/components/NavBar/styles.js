import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around; 
  background-color: #007bff; 
  padding: 10px 0;
  height: 50px;
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
