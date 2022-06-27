import React, { Component } from "react";

class NameListC extends Component {

    render() {
        return (
            <div className="container mt-4">
                <h3>{this.props.message}</h3>
            </div>
        );
    }

}

export default NameListC;