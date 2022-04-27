import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLinks to='inspire'>
            <NavItem>Inspiration</NavItem>
          </NavLinks>
          <NavLinks to='story'>
            <NavItem>Story</NavItem>
          </NavLinks>
          <NavLinks to='design'>
            <NavItem>Design</NavItem>
          </NavLinks>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #92ba92;
  color: #f1ddbf;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const NavItem = styled.div`
  padding: 0 1rem;
  font-size: 24px;
  font-weight: 400;
  height: 77px;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 3px solid #f1ddbf;
  }
`;

const NavLinks = styled(LinkS)`
  cursor: pointer;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
