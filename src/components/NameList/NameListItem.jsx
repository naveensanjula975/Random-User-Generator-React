import React from "react";

function NameListItem(props) {
    return (
        <li>{props.name} - {props.course} - {props.email}</li>

    ); 
}

export default NameListItem;