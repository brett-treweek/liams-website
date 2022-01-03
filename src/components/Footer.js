import { StyledFooter } from "./styles/Footer.styled";
import { Flex } from "./styles/Flex.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <StyledFooter>
      <Flex jc="space-evenly" ai="center">
        <div>
          <a
            href="https://www.instagram.com/ownahome_wa"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/liam-whinfield-658657165/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </Flex>
    </StyledFooter>
  );
}
