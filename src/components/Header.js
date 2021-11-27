import { Logo, StyledHeader } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { blue } from "@mui/material/colors";

export default function Header() {
  return (
    <StyledHeader>
      <Flex>
        <Flex>
          <HomeIcon fontSize="large" sx={{ color: blue[900] }} />
          <h1>Own a Home WA</h1>
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
    </StyledHeader>
  );
}
