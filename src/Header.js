import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";
import GlobalStyles from "./GlobalStyles";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu.js";

function Header(props) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <BigContainer color={props.color}>
      <Wrapper color={props.color}>
        <Spacer></Spacer>
        <ContentWrapper>
          <StyledLink to="/">
            <NavLink>Work</NavLink>
          </StyledLink>
          <StyledLink to="/about">
            <NavLink>About</NavLink>{" "}
          </StyledLink>
        </ContentWrapper>
        <BulbLink to="/">
          <TinyBulb
            src={require("./BigLightbulb.png")}
            width="17px"
            height="26px"
          />
        </BulbLink>
        <ImageWrapper>
          <a href="https://www.linkedin.com/in/zacharymbohn">
            <ExternalIcon
              src={require("./LinkedIn.png")}
              width="31px"
              height="31px"
            />
          </a>
          <a href="https://www.github.com/zbohn1">
            <ExternalIcon
              src={require("./Github.png")}
              width="45px"
              height="45px"
            />
          </a>
        </ImageWrapper>
        <HamburgerWrapper
          src={require("./HamburgerIcon.png")}
          width="32px"
          height="32px"
          onClick={() => setShowMobileMenu(true)}
        />
      </Wrapper>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </BigContainer>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  margin: 0px 57px;
  @media (max-width: 400px) {
    margin: 0px 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 39px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 66px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const NavLink = styled.h2`
  font-size: 20px;
  font-family: "Regular", Helevetica Neue, Helvetica, Arial, sans-serif;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #2997ff;
  }
`;

const BulbLink = styled(Link)`
  &:hover {
    opacity: 0.71;
  }
`;

const HamburgerWrapper = styled.img`
  @media (min-width: 700px) {
    display: none;
  }
`;

const TinyBulb = styled.img``;

const Spacer = styled.div`
  height: 35px;
  width: 35px;
  display: none;
  @media (max-width: 700px) {
    display: revert;
    margin-top: 22px;
  }
`;

const ExternalIcon = styled.img`
  &:hover {
    opacity: 0.71;
  }
`;

const BigContainer = styled.header`
  top: 0;
  z-index: 1;
  width: 100vw;
  background-color: ${(props) => props.color};
`;

export default Header;
