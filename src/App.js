import { Container, Image } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import {Flex} from './components/styles/Flex.styled';

const theme = {
  colors: {
    header: "#fff",
    body: "#2f3542",
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
            <div>
            <h1>Hello, I'm</h1>
            <h1>Liam.</h1>
            <p>Have you ever thought about getting into your own home, to then put it off because you thought it was too difficult or you thought you couldn’t afford it? Let me walk you through how to build your first home or your dream home. It’s easier and way more fun than you think.</p>
            </div>
            
            <Image src='./images/Liam.jpg'/>
          </Flex>
          
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
