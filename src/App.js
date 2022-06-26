import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NameList from "./components/pages/NameList/NameList";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/namelist">
          <NameList />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
