import React from 'react';

import './styles.css';

const Dashboard = () => {
    return (
        <div className="wrapper">
            <div className="wrapper-date">
                <p>Hoje</p>
                <div>
                    {new Date().toJSON().slice(0, 10).replace(/-/g, '/')}
                </div>
            </div>
            <div className="wrapper-last-updates">
                <p>Últimas modificações</p>
                <table>
                    <tr>
                        <td className="description">Cadastro de clientes modificado</td>
                        <td className="description-time">22min atrás</td>
                    </tr>
                    <tr>
                        <td className="description">Cadastro de clientes modificado</td>
                        <td className="description-time">22min atrás</td>
                    </tr>
                    <tr>
                        <td className="description">Cadastro de clientes modificado</td>
                        <td className="description-time">22min atrás</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;