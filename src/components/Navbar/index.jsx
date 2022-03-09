import React from 'react';
import {
  Brandname,
  Container,
  Wrapper,
  Button,
  ButtonOrange,
  Text,
  Phone,
  Flex,
  Search,
  Hamburger,
} from './style';

export const Navbar = () => {
  return (
    <Container> 
      <Brandname />
      <Wrapper>
        <Button>Driver Application</Button>
        <ButtonOrange>Get A Quote</ButtonOrange>
        <Flex>
          <Phone />
          <Text>Call</Text>
        </Flex>
              <Search />
              <Flex>
                  <Hamburger />
                  <Text>Menu</Text>
              </Flex>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
