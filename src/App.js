import './style/App.css';
import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import urlContext from './context';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Goods from './pages/Goods';
import Good from './pages/Good';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Reviews from './pages/Reviews';
import Menu from './components/menu/Menu';

function App() {
  const [modal, setModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });
  const publicUrl = process.env.PUBLIC_URL;

  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const isLaptopL = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1920px)',
  });

  const contextData = useMemo(
    () => ({
      publicUrl,
      modal,
      setModal,
      cartModal,
      setCartModal,
      filter,
      setFilter,
      isTablet,
      isLaptop,
      isLaptopL,
      isDesktop,
    }),
    [
      publicUrl,
      modal,
      setModal,
      cartModal,
      setCartModal,
      filter,
      setFilter,
      isTablet,
      isLaptop,
      isLaptopL,
      isDesktop,
    ]
  );

  return (
    <div className="App">
      <urlContext.Provider value={contextData}>
        {!isLaptop && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:categoryId" element={<Goods />} />
          <Route path="/home/:categoryId/:goodId" element={<Good />} />
          <Route path="/:goodId" element={<Good />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        {!isLaptop && <Menu />}
      </urlContext.Provider>
    </div>
  );
}

export default App;
