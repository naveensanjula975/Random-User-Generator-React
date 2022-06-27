import React, { Component } from "react";

class NameListC extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor Called");
    this.state = {
      getAName: false,
      nameList: [
        {
          id: 1,
          name: { title: "mr", first: "brad", last: "gibson" },
          location: { city: "kilcoole" },
          email: "brad.gibson@example.com",
          dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
          picture: {
            medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
          },
        },
        {
          id: 2,
          name: { title: "mr", first: "Samuel", last: "Martin" },
          location: { city: "Whangarei" },
          email: "samuel.martin@example.com",
          dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
          picture: {
            medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
          },
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        this.setState({
          nameList: [...this.state.nameList, responseData.results[0]],
        });
      });
  }

  componentDidUpdate() {
    if (this.state.getAName) {
      fetch("https://randomuser.me/api")
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          this.setState({
            getAName: false,
            nameList: [...this.state.nameList, responseData.results[0]],
          });
        });
    }
  }

  addNameHandler = () => {
    this.setState({ getAName: true });
  };

  nameListComponent = () => {
    return this.state.nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={`${aName.name.first} ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  render() {
    return (
      <div className="container mt-4">
        <button className="btn btn-primary mb-2" onClick={this.addNameHandler}>
          Add Name
        </button>
        <ul className="list-group">{this.nameListComponent()}</ul>
      </div>
    );
  }
}

export default NameListC;
