import React, { Component } from "react";

import "./styles.css";

export default class Toolbar extends Component {
    handleOptions = option => {
        if (this.props.options != null) 
            return this.props.options[option];
    }

    render() {
        return (    
            <div className="wrapper-toolbar">
                <div className="toolbar-child">
                    <p>{this.props.pageTitle}</p>
                </div>
                <div className="toolbar-child">
                    {(this.handleOptions("new"))
                        ? <button className="btn" onClick={this.props.handleNew}>Novo</button>
                        : null
                    }
                </div>
                <div className="toolbar-child">
                    {(this.handleOptions("back"))
                        ? <button className="btn">Voltar</button>
                        : null
                    }
                </div>
            </div>      
        );
    }
}