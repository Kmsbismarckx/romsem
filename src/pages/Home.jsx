import React, { useContext } from 'react';
import Main from '../components/main/Main';
import About from '../components/About/About';
import Menu from '../components/menu/Menu';
import SideMenu from '../components/sideMenu/SideMenu';
import appContext from '../context';
import '../style/Home.css';
import Cart from './Cart';

function Home() {
  const { isDesktop } = useContext(appContext);

  if (isDesktop) {
    return (
      <div className="home pc__container">
        <SideMenu />
        <Main />
        <div className="cart__container">
          <Cart />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Main />
      <About />
      <Menu />
    </div>
  );
}

export default Home;
