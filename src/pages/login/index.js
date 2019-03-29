import React, { Component } from 'react';

import './styles.css';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <form action="">
                        <input type="text" placeholder="Usuário"></input>
                        <input type="password" placeholder="Senha"></input>
                        <div className="actions">
                            <button type="submit">Login</button>
                            <button type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}