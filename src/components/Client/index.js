import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class Client extends Component {
    state = {
        clients: [],
    }

    componentDidMount() {
        this.loadClients();
    }

    loadClients = async () => {
        const response = await api.get('/clients');
        const { data } = response;
    
        this.setState({ clients: data });
    };

    render() {
        const { clients } = this.state;

        return (
            <div>
                <h3>Lista de clientes</h3>
                <table className="client-table">
                    <tbody>
                        <tr className="header">
                            <th className="actions"></th>
                            <th className="actions"></th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th className="aligned-center">Idade</th>
                            <th>E-mail</th>
                        </tr>
                        {clients.map(client => (
                            <tr key={'tr-' + client._id}>
                                <td key={'td-delete-' + client._id} className="actions">Excluir</td>
                                <td key={'td-update-' + client._id} className="actions">Alterar</td>
                                <td key={'td-name-' + client._id}>{client.name}</td>
                                <td key={'td-surname-' + client._id}>{client.surname}</td>
                                <td key={'td-age-' + client._id} className="aligned-center">{client.age}</td>
                                <td key={'td-email-' + client._id}>{client.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}