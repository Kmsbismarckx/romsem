import './style/App.css';
import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './components/Header/Header';
import urlContext from './context';
import Home from './pages/Home';
import Goods from './pages/Goods';
import Good from './pages/Good';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Reviews from './pages/Reviews';

function App() {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });

  const isDesktop = useMediaQuery({
    query: '(min-width: 1920px)',
  });

  const contextData = useMemo(
    () => ({
      modal,
      setModal,
      filter,
      setFilter,
      isDesktop,
    }),
    [modal, setModal, filter, setFilter, isDesktop]
  );

  return (
    <div className="App">
      <Router>
        <urlContext.Provider value={contextData}>
          {!isDesktop && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<Goods />} />
            <Route path="/home/:categoryId/:goodId" element={<Good />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </urlContext.Provider>
      </Router>
    </div>
  );
}

export default App;
