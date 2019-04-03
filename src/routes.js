import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import Login from './pages/login';
import Home from "./pages/home";
//import Client from './components/Client';
import ClientNew from "./components/Client/New";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/newclient" component={ClientNew}></Route>
        </Switch>    
    </BrowserRouter>
);

export default Routes;