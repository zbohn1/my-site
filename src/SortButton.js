import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components/macro";

const SortButton = ({
  value,
  onClick,
  children,
  color,
  backgroundColor,
  border,
  opacity,
}) => {
  function clickHelper(e) {
    value = e.target.value;
    onClick(value);
  }
  return (
    <Wrapper
      onClick={clickHelper}
      color={color}
      backgroundColor={backgroundColor}
      border={border}
      opacity={opacity}
      value={value}
    >
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  opacity: ${(props) => props.opacity};
  width: 180px;
  height: 35px;
  font-family: "Bold", "Hnmedium", Helvetica, Arial, sans-serif;
  font-size: 16px;
  align-items: center;
  &:hover {
    background-color: #099598;
    color: white;
    border: 1px solid #099598;
  }
  @media (max-width: 700px) {
    width: 160px;
    font-size: 12px;
  }
`;

export default SortButton;
