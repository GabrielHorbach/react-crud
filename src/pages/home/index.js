import React, { Component } from 'react';

import Menu from '../../components/Menu';
import Dashboard from '../../components/Dashboard';

export default class Home extends Component {
    state = {
        page: <Dashboard />
    }
    
    changePage = (page) => {
        this.setState({
            page: page
        }); 
    }

    render() {
        return (
            <div>
                <Menu changePage={this.changePage}/>
                <div className="container">
                    {this.state.page}
                </div>
            </div>
        );
    }
}