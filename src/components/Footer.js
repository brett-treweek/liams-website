import { StyledFooter } from "./styles/Footer.styled";
import { Flex } from "./styles/Flex.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon icon={faInstagram} className="link"/>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/liam-whinfield-658657165/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="link"/>
          </a>
        </div>
        <div>
              <a
                href="https://www.facebook.com/ownahomeperth/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} className="link" />
              </a>
            </div>
      </Flex>
      <Flex jc="center" ai="center">
      <p>2022 Brett Treweek</p>
      </Flex>
    </StyledFooter>
  );
}
