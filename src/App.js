import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
// import Nav from "./components/Nav";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Card from "./components/Card";
import content from "./content";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const theme = {
  colors: {
    dark: "#000",
    nav: "#E9FCFF",
    header: "#000",
    body: "#FDFDFD",
    footer: "#00333",
    main: "#1976d2",
    secondary: "#002060",
    tertiary: "#FF9400"
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {/* <Nav /> */}
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Contact />
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
