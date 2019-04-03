import React, { Component } from "react";

import Toolbar from "../../../components/Toolbar";

import "./styles.css";

export default class ClientNew extends Component {
    render() {
        return (
            <div>
                <Toolbar 
                    pageTitle="Cadastro de Cliente" 
                    options={{
                        "new": false, 
                        "back": true
                    }}
                />
                <form className="form-client">
                    <div className="row">
                        <div className="column">
                            <label htmlFor="client-name">Nome</label>
                        </div>
                        <div className="column">
                            <input id="client-name" type="text"></input>
                        </div>
                        <div className="column">
                            <label htmlFor="client-lastname">Sobrenome</label>
                        </div>
                        <div className="column">
                            <input id="client-lastname" type="text"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label htmlFor="client-age">Idade</label>
                        </div>
                        <div className="column">
                            <input id="client-age" type="number"></input>
                        </div>
                        <div className="column">
                            <label htmlFor="client-email">E-mail</label>
                        </div>
                        <div className="column">
                            <input id="client-email" type="email"></input>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn">Cadastrar</button>
                    </div>
                </form>
            </div>  
        );
    }
}