import React from 'react';
import Anchor from '../../Generic';
import { Flex } from '../../Navbar/style';
import { Container, Title, Text, Button, Wrapper } from './style';

export const Header = () => {
  return (
    <>
      <Container id='block1'>
        <Wrapper>
          <Title>
            Cargo <span>Prime</span>
          </Title>

          <Text id='block1'>
            WE’VE GOT THE TRANSPORTATION SOLUTIONS TO MEET YOUR NEEDS. OUR
            BUSINESS IS BUILT ON TRUSTWORTHY RELATIONSHIPS. THAT IS HOW WE
            DELIVER MAXIMUM VALUE AND EXCEPTIONAL SERVICE EVERY TIME!
          </Text>

          <Flex>
            <Button>Diriver Apllication</Button>
            <Button>Call a recruter</Button>
          </Flex>
        </Wrapper>
      </Container>
      <Anchor />
    </>
  );
};
export default Header;
