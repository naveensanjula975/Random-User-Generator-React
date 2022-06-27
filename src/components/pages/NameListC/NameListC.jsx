import React, { Component } from "react";

class NameListC extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor Called');
        this.state = { message: 'Hello State' };
    }

    componentDidMount() {
        console.log('componentDidMount Method Called');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate Method Called');
    }

    addNameHandler = () => {
        console.log('Add name button clicked');
        console.log(this.state.message);
    }

    render() {
        return (
            <div className="container mt-4">
                <button className="btn btn-primary mb-2" onClick={this.addNameHandler} >
                    Add Name
                </button>
                <ul className="list-group"></ul>
            </div>
        );
    }

}

export default NameListC;