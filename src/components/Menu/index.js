import React, { Component } from "react";

import "./styles.css";

import ClientList from "../Client/List";
import Dashboard from "../Dashboard";

export default class Menu extends Component {
    render() {
        const { changePage } = this.props;

        return(
            <nav className="menu">
                <ul>
                    <li onClick={changePage.bind(
                        this, 
                        <Dashboard />, 
                        <Dashboard />
                    )}>Início</li>
                    <li onClick={changePage.bind(
                        this, 
                        <ClientList handleClick={changePage}/>, 
                        <Dashboard/>
                    )}>Clientes</li>
                    <li>Sair</li>
                </ul>
            </nav>
        );
    }
}