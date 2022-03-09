import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/pages/Footer';
import Header from '../components/pages/Header';
import Map from '../components/pages/Map';
import Ourservices from '../components/pages/OurServices';
import OurStory from '../components/pages/OurStory';
import WhyPeopleChooseUs from '../components/pages/WhyPeopleChooseUs';
import Settings from '../components/Settings';
import Sidebar from '../components/Sidebar';
import Block from './style';

export const Root = () => {
  const [count, setCount] = useState(0);

  window.addEventListener('scroll', () => {
    setCount(window.scrollY);
  });

  console.log(count);

  return (
    <Block.Main>
      <Sidebar />
      <Block>
        <Navbar />
      </Block>
      <Header />
      <OurStory />
      <Ourservices />
      <WhyPeopleChooseUs />
      <Settings />
      {/* <Map /> */}
      <Footer />
    </Block.Main>
  );
};
export default Root;
