import React from "react";
import NameListItem from "./NameListItem";

function NameList() {

  const nameList = [
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
      "name": { "title": "mr", "first": "brad", "last": "gibson" },
      "location": { "city": "kilcoole", },
      "email": "brad.gibson@example.com",
      "dob": { "date": "1993-07-20T09:44:18.674Z", "age": 26 },
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/75.jpg", },
    },
    {
      "id": 3,
      "name": { "title": "mr", "first": "brad", "last": "gibson" },
      "location": { "city": "kilcoole", },
      "email": "brad.gibson@example.com",
      "dob": { "date": "1993-07-20T09:44:18.674Z", "age": 26 },
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/75.jpg", },
    },
  ];

  const nameListComponent = () => {
    return nameList.map((aName) => {
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

  return (
    <div>
      <h1>Name List</h1>
      <hr />
      <ul>{nameListComponent()}</ul>
    </div>
  );
}

export default NameList;