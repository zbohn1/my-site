import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <CloseButton
        src={require("./CloseIcon.png")}
        onClick={onDismiss}
        width="35px"
        height="35px"
      />
      <Content>
        <StyledLink to="/">
          <NavLink onClick={onDismiss}>Work</NavLink>
        </StyledLink>
        <StyledLink to="/about">
          <NavLink onClick={onDismiss}>About</NavLink>
        </StyledLink>
        <StyledLink to="/contact">
          <NavLink onClick={onDismiss}>Contact</NavLink>
        </StyledLink>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const NavLink = styled.h2`
  font-size: 20px;
  font-family: "Regular";
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #2997ff;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f5f5f5;
  z-index: 2;
`;

const Content = styled.nav`
  margin-top: 101px;
  margin-right: 57px;
  margin-left: 57px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 22px;
  right: 57px;
`;
