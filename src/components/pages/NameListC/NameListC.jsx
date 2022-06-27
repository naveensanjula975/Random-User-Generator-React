import React, { Component } from "react";

class NameListC extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor Called');
        this.state = {
            nameList: [
                {
                    "id": 1,
                    "name": { "title": "mr", "first": "brad", "last": "gibson" },
                    "location": { "city": "kilcoole" },
                    "email": "brad.gibson@example.com",
                    "dob": { "date": "1993-07-20T09:44:18.674Z", "age": 26 },
                    "picture": { "medium": "https://randomuser.me/api/portraits/med/men/75.jpg", },
                },
                {
                    "id": 2,
                    "name": { "title": "mr", "first": "Samuel", "last": "Martin" },
                    "location": { "city": "Whangarei", },
                    "email": "samuel.martin@example.com",
                    "dob": { "date": "1993-07-20T09:44:18.674Z", "age": 26 },
                    "picture": { "medium": "https://randomuser.me/api/portraits/med/men/70.jpg", },
                },
            ],
        };
    }

    componentDidMount() {
        console.log('componentDidMount Method Called');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate Method Called');
        console.log(this.state.message);
    }

    addNameHandler = () => {
        console.log('Add name button clicked');
        console.log(this.state.message);
    };

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