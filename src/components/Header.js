import { StyledHeader } from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled";
import { Bluedot } from "./styles/Bluedot.styled";
import { Image } from "./styles/Container.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Flex jc="space-evenly">
        <div>
          <h2>
            Hello, I'm 
          </h2>
          <h1>
            Liam<Bluedot>.</Bluedot>
          </h1>
          <p>
            Let me walk you through how to build your first home or your dream
            home. It’s easier and more fun than you think.
          </p>
          <a href="https://newsensationhomes.com.au/" target="_blank">New Sensation Homes Link in new tab</a>
        </div>

        <Image src="./images/LiamPhotoshop.png" alt="portrait of Liam" />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
