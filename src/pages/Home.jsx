import React, { useContext } from 'react';
import Main from '../components/main/Main';
import About from '../components/About/About';
import Menu from '../components/menu/Menu';
import SideMenu from '../components/sideMenu/SideMenu';
import appContext from '../context';
import '../style/Home.css';
import CartModal from '../components/CartModal/CartModal';
import Cart from './Cart';

function Home() {
  const { isLaptop, isTablet, isDesktop } = useContext(appContext);

  if (isTablet) {
    return (
      <div className="home">
        {isLaptop && <SideMenu />}
        <Main />
        {isLaptop && <CartModal />}
        {isDesktop && <Cart />}
      </div>
    );
  }

  return (
    <div className="home">
      <Main />
      <About />
      <Menu />
    </div>
  );
}

export default Home;
