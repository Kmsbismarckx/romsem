import './style/App.css';
import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
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

  const contextData = useMemo(
    () => ({
      modal,
      setModal,
      filter,
      setFilter,
    }),
    [modal, setModal, filter, setFilter]
  );

  return (
    <div className="App">
      <Router>
        <urlContext.Provider value={contextData}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<Goods />} />
            <Route path="/home/:categoryId/:goodId" element={<Good />} />
            <Route path="/basket" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </urlContext.Provider>
      </Router>
    </div>
  );
}

export default App;
