import React, { Component } from "react";

import Menu from "../../components/Menu";
import Dashboard from "../../components/Dashboard";
import Footer from "../../components/Footer";
import MainView from "../../components/MainView";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: <Dashboard />,
            lastPage: <Dashboard />
        };
    }
    
    changePage = (page, lastPage) => {
        this.setState({
            page: page,
            lastPage: lastPage
        }); 
    }

    render() {
        return (
            <div>
                <Menu changePage={this.changePage} />
                <MainView screenContent={this.state.page} />                
                <Footer />
            </div>
        );
    }
}