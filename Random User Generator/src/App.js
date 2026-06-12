import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";

import NameList from "./components/pages/NameList/NameList";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import NameListC from "./components/pages/NameListC/NameListC";

/** Scrolls to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderBar />
      <main className="page-wrapper">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/namelist">
            <NameList />
          </Route>
          <Route path="/namelistc">
            <NameListC />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
