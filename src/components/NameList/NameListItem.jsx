import React from "react";

function NameListItem(props) {
    return (
        <li>
            <p>
                <img src={props.avatar} /> {props.name}
            </p >
            <p>City: {props.city}</p>
            <p>Email: {props.email}</p>
            <p>Birthday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p>
        </li>
    );
}

export default NameListItem;