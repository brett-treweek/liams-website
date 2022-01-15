import { StyledHeader } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled";
import { Bluedot } from "./styles/Bluedot.styled";
import { Image } from "./styles/Header.styled";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { StyledLogo } from "./styles/Logo.styled";

const Header = () => {
  const scrollToBottom = () => {
    window.scroll({
      top: 4000,
      behavior: "smooth",
    });
  };

  return (
    <StyledHeader>
        <StyledLogo>
          <img
            src="./images/Logo.webp"
            alt="own a home wa logo, blue and grey"
          />
          <h3>Liam Whinfield New Homes</h3>
        </StyledLogo>
      <Flex jc="space-evenly" ai="center" id="flexContainer">
        <div>
          <h2>Hello, I'm</h2>
          <h1>
            Liam<Bluedot>.</Bluedot>
          </h1>
          <p>
            I'm a new home sales consultant based in Perth, Western Australia -
            It's my job to make home ownership as easy and stress free as
            possible.
          </p>
          <p>
            Let me help you get into the market. Its easier and more fun than
            you think.
          </p>
          <Flex jc="space-around">
            <Button
              onClick={scrollToBottom}
              className="btn"
              variant="contained"
            >
              Get in Touch
            </Button>
          </Flex>
          <Flex jc="space-evenly">
            <div>
              <a
                href="https://www.instagram.com/ownahome_wa"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
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
            <div>
              <a
                href="https://www.facebook.com/ownahomeperth/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </div>
          </Flex>
        </div>

        <Image src="./images/Liam.webp" alt="portrait of Liam" />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
