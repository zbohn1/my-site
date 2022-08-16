import { createGlobalStyle } from "styled-components/macro";
import styled from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}

body {
    background-color: #f5f5f5;
    margin: 0px;
}
`;

export default GlobalStyles;
