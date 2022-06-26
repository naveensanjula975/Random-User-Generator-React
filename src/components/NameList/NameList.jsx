import React from "react";
import NameListItem from "./NameListItem";

function NameList() {

    const nameList = {
        name: {
            title: "mr",
            first: "brad",
            last: "gibson"
        },
        location: {
            city: "kilcoole",
        },
        email: "brad.gibson@example.com",
        dob: {
            date: "1993-07-20T09:44:18.674Z",
            age: 26
        },
        picture: {
            medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        },
    };

    return (
        <div>
            <h1>Name List</h1>
            <hr />
            <ul>
                <NameListItem
                    name={`${nameList.name.first} ${nameList.name.last}`}
                    city={nameList.location.city}
                    email={nameList.email}
                    birthday={nameList.dob.date}
                    avatar={nameList.picture.medium}
                />
            </ul>
        </div>
    );
}

export default NameList;