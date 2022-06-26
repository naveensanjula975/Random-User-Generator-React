import React from "react";
import NameListItem from "./NameListItem";

function NameList() {

  const nameList = [
    {
      "name": { "title": "mr", "first": "brad", "last": "gibson" },
      "location": { "city": "kilcoole" },
      "email": "brad.gibson@example.com",
      "dob": { "date": "1993-07-20T09:44:18.674Z", "age": 26 },
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/75.jpg", },
    },
    {
      "name": { "title": "mr", "first": "brad", "last": "gibson" },
      "location": { "city": "kilcoole", },
      "email": "brad.gibson@example.com",
      "dob": { "date": "1993-07-20T09:44:18.674Z", "age": 26 },
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/75.jpg", },
    },
    {
      "name": { "title": "mr", "first": "brad", "last": "gibson" },
      "location": { "city": "kilcoole", },
      "email": "brad.gibson@example.com",
      "dob": { "date": "1993-07-20T09:44:18.674Z", "age": 26 },
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/75.jpg", },
    }
  ];

  return (
    <div>
      <h1>Name List</h1>
      <hr />
      <ul>
        <NameListItem
          name={`${nameList[0].name.first} ${nameList[0].name.last}`}
          city={nameList[0].location.city}
          email={nameList[0].email}
          birthday={nameList[0].dob.date}
          avatar={nameList[0].picture.medium}
        />
        <NameListItem
          name={`${nameList[1].name.first} ${nameList[1].name.last}`}
          city={nameList[1].location.city}
          email={nameList[1].email}
          birthday={nameList[1].dob.date}
          avatar={nameList[1].picture.medium}
        />
        <NameListItem
          name={`${nameList[2].name.first} ${nameList[2].name.last}`}
          city={nameList[2].location.city}
          email={nameList[2].email}
          birthday={nameList[2].dob.date}
          avatar={nameList[2].picture.medium}
        />
      </ul>
    </div>
  );
}

export default NameList;