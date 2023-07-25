import { createGlobalStyle } from "styled-components";
import Background from "../Assets/background.png";

const GlobalStyle = createGlobalStyle`
*{
	box-sizing:border-box;
}
body {
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
}
a {
    text-decoration: none;
}
input:-webkit-autofill {
    -webkit-box-shadow:0 0 0 50px #f1e7c5 inset;
    -webkit-text-fill-color: #000000; 
}
`;
export default GlobalStyle;
