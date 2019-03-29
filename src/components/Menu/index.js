import React, { Component } from 'react';

import './styles.css';
import Client from '../Client';

export default class Menu extends Component {
    render() {
        return(
            <nav className="menu">
                <ul>
                    <li onClick={this.props.changePage.bind(this, <Client />)}>Clientes</li>
                    <li>Sair</li>
                </ul>
            </nav>
        );
    }
}