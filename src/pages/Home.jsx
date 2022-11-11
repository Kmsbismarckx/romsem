import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Main from '../components/main/Main';
import About from '../components/About/About';
import Menu from '../components/menu/Menu';

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  /* TODO Сделать под пк */

  return (
    <div>
      <Main />
      <About />
      <Menu />
    </div>
  );
}

export default Home;
