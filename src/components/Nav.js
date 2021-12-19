import { StyledNav } from "./styles/Nav.styled";
import { Flex } from "./styles/Flex.styled";
import Button from "@mui/material/Button";

export default function Nav() {

  const scrollToBottom = () => {
    window.scroll({
      top: 2000,
      behavior: 'smooth',
    })
  }

  return (
    <StyledNav>
      <Flex>
        <Flex>
          <h1>Liam Winfield</h1>
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
