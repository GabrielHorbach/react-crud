import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

import Toolbar from "../../Toolbar";
import ClientNew from "../New";

import api from "../../../services/api";

import "./styles.css";

library.add(faMinusCircle);

export default class ClientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
        };
    }

    componentDidMount() {
        this.loadClients();
    }

    loadClients = async () => {
        const response = await api.get("/clients");
        const { data } = response;
    
        this.setState({ clients: data });
    }

    deleteClient = async clientId => {
        const response = await api.delete(`/clients/${clientId}`);
        this.loadClients();
    }

    render() {
        const { clients } = this.state;
        const { handleClick } = this.props;
        
        return (
            <div>
                <Toolbar 
                    pageTitle="Clientes" 
                    handleNew={handleClick.bind(
                        this, 
                        <ClientNew />,
                        <ClientList />
                    )}
                    options={{
                        "new": true, 
                        "back": true
                    }}
                />
                <table className="client-table">
                    <tbody>
                        <tr className="header">
                            <th className="actions"></th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Idade</th>
                            <th>E-mail</th>
                        </tr>
                        {clients.map(client => (
                            <tr key={"tr-" + client._id}>
                                <td key={"td-actions-" + client._id} className="actions">
                                    <FontAwesomeIcon 
                                        className="linked"
                                        icon="minus-circle"
                                        key={"icon-delete-" + client._id}
                                        onClick={() => this.deleteClient(client._id)}
                                    />
                                </td>
                                <td key={"td-name-" + client._id}>{client.name}</td>
                                <td key={"td-surname-" + client._id}>{client.surname}</td>
                                <td key={"td-age-" + client._id} className="aligned-center">{client.age}</td>
                                <td key={"td-email-" + client._id}>{client.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}