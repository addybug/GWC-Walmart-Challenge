import { Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import './app.css';
import Navigation from "./navbar/navbar";
import Home from "./home/home";
import BottomNav from "./navbar/bottom-nav";
import CreateInvite from "./create-invite/create-invite";
import EventView from "./event/event";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Route path={"/"} exact>
      <Home />
      <BottomNav />
    </Route>
    <Route path={"/create-invite"} exact>
      <CreateInvite />
    </Route>
    <Route path={"/event/:id"} component={EventView} />
  </BrowserRouter>
);

export default App;
