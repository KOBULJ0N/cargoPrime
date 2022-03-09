import React from 'react';
import Anchor from '../../Generic';
import Img from '../../../assets/images/OurStory.png';

import { Container, Title, Text, Wrapper, Image } from './style';

export const OurStory = () => {
  return (
    <>
      <Container id='block2'>
        <Container.Grid>
          <Wrapper>
            <Title>Our Story</Title>
            <Text>
              CargoPrime corparation is a transportation company that was
              established in Pittsburgh, PA in 2018. Our company acknowledges
              the strong potential of the trucking industry to make a big impact
              on business and society. Our management team with 15 years of
              transportation experience and professional drivers work to meet
              your needs and provide excellent customer service. <br />
              <br /> CargoPrime corparation provides a flexible solution,
              on-time service, safe and experienced drivers, tracking on
              expedited services. We promise to provide world-class
              transportation services and ensure your freight is delivered on
              schedule and straight to the designated destination. Our goal is
              your satisfaction with our services. We welcome you to check out
              our website and discover our services: Freight transportation, CDL
              Drivers, Employee job opportunities.
            </Text>
          </Wrapper>

          <Wrapper>
            <Image src={Img} />
          </Wrapper>
        </Container.Grid>
      </Container>

      <Anchor href='#block3' />
      <Container.Margin />
    </>
  );
};
export default OurStory;
