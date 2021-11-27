import { Container, Image } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import {Flex} from './components/styles/Flex.styled';

const theme = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#00333",
    main: "##0d47a1",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Flex jc='space-evenly'>
            <h1>hello there</h1>
            <Image src='./images/Liam.jpg'/>
          </Flex>
          
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
