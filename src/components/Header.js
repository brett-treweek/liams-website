import {StyledHeader} from './styles/Header.styled';
import {Flex} from './styles/Flex.styled';
import  {Bluedot} from "./styles/Bluedot.styled";
import  {Image} from "./styles/Container.styled";


const Header = () => {
    return ( 
        <StyledHeader>
            <Flex jc="space-evenly">
            <div>
              <h1>
                Hello, I'm <br />
                Liam<Bluedot>.</Bluedot>
              </h1>
              <p>
                Let me walk you through how to build your first home or your
                dream home. It’s easier and more fun than you think.
              </p>
            </div>

            <Image src="./images/LiamPhotoshop.png" />
          </Flex>
        </StyledHeader>
     );
}
 
export default Header;