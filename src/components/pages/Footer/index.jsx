import React from "react";

import {
  Container,
  Logo,
  Link,
  Wrap,
  Flex,
  Iconlink,
  Google,
  Facebook,
  Instagram,
  Brandname
} from "./style";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Brandname />
        <Logo.Info>
          <Logo.Info>© 2018-2021</Logo.Info>
          <Logo.Info>CargoPrime CorpAll rights reserved</Logo.Info>
        </Logo.Info>
      </Wrap>
      <Wrap>
        <Link href='#'>About us</Link>
      </Wrap>
      <Wrap>
        <Link href='#'>News</Link>
      </Wrap>
      <Wrap>
        <Link href='#'>Blogs</Link>
      </Wrap>
      <Wrap>
        <Link href='#'>Reviews</Link>
      </Wrap>
      <Wrap>
        <Link href='#'>Contacts</Link>
      </Wrap>
      <Wrap end='true'>
        <Wrap.Number>+1 412-444-8989</Wrap.Number>
        <Wrap.Number>+1 484-427-0678</Wrap.Number>
        <Wrap.Number>info@cargoprimecorp.com</Wrap.Number>
        <Flex>
          <Iconlink>
            <Google href='https://www.google.com' />
          </Iconlink>
          <Iconlink>
            <Facebook href='https://www.facebook.com/' />
          </Iconlink>
          <Iconlink>
            <Instagram href='https://www.instagram.com' />
          </Iconlink>
        </Flex>
      </Wrap>
    </Container>
  );
};

export default Footer;
