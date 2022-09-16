import "./style/App.css";
import Header from "./components/header/Header";
import { urlContext } from "./context";
import Menu from "./components/menu/Menu";
import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Goods from "./pages/Goods";
import Good from "./pages/Good";

function App() {
  const urlPrefix = process.env.PUBLIC_URL;
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  return (
    <div className="App">
      <Router>
        <urlContext.Provider
          value={{ urlPrefix, modal, setModal, filter, setFilter }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<Goods />} />
            <Route path="/home/:goodsId/:goodId" element={<Good />} />
          </Routes>
          <Menu />
        </urlContext.Provider>
      </Router>
    </div>
  );
}

export default App;
