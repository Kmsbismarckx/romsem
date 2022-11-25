import React, { useContext } from 'react';
import Main from '../components/main/Main';
import About from '../components/About/About';
import Menu from '../components/menu/Menu';
import SideMenu from '../components/sideMenu/SideMenu';
import appContext from '../context';
import '../style/Home.css';
import Cart from './Cart';

function Home() {
  const { isDesktop, isTablet } = useContext(appContext);

  if (isTablet) {
    return (
      <div className="home">
        {isDesktop && <SideMenu />}
        <Main />
        {isDesktop && (
          <div className="cart__container">
            <Cart />
          </div>
        )}
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
