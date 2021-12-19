import { StyledNav } from "./styles/Nav.styled";
import { Flex } from "./styles/Flex.styled";
import Button from "@mui/material/Button";

export default function Nav() {

  const scrollToBottom = () => {
    window.scroll({
      top: 4000,
      behavior: 'smooth',
    })
  }

  return (
    <StyledNav>
      <Flex>
        <Flex>
          <h1>Liam Whinfield</h1>
        </Flex>
        <Button
          onClick={scrollToBottom}
          className="btn"
          color="primary"
          variant="contained"
          size="small"
        >
          Get in Touch
        </Button>
      </Flex>
    </StyledNav>
  );
}
