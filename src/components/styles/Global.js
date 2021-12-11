import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap');

* {
    box-sizing: border-box;
}

body{
    background: ${({theme}) => theme.colors.body};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 1.15em;
}

p{
    opacity: 0.8;
    line-height: 1.5;
}

img{
    max-width: 100%;
}

`
export default GlobalStyles