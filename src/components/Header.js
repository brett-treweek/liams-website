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
            I work for <a href="https://newsensationhomes.com.au/" target="_blank" rel="noreferrer">New Sensation Homes</a> .
          </p>
          <p>
            Let me help you build your dream home. Its easier and more fun than you think. 
          </p>
          
          
        </div>

        <Image src="./images/LiamPhotoshop.png" alt="portrait of Liam" />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
