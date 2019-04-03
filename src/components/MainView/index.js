import React, { Component } from "react";

export default class MainView extends Component {
    render() {
        return <div className="container">{this.props.screenContent}</div>;
    }
}