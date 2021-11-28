import { Container, Image } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import GlobalStyles from "./components/styles/Global";
// import { Flex } from "./components/styles/Flex.styled";
import Header from "./components/Header";
import Card from "./components/Card";
import content from "./content";

const theme = {
  colors: {
    nav: "#fff",
    header: "#3959B5",
    body: "#fff",
    footer: "#00333",
    main: "#0d47a1",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Nav />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
