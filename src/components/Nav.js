import { StyledNav } from "./styles/Nav.styled";
import { Flex } from "./styles/Flex.styled";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { blue } from "@mui/material/colors";

export default function Nav() {
  return (
    <StyledNav>
      <Flex>
        <Flex>
          <HomeIcon fontSize="large" sx={{ color: blue[900] }} />
          <h1>Own a Home in Western Australia </h1>
        </Flex>
        <Button
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
