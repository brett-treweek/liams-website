import { StyledFooter } from "./styles/Footer.styled";
import { Flex } from "./styles/Flex.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Flex jc='space-evenly'>
        <p>Social Links go here</p>
      </Flex>
    </StyledFooter>
  );
}
