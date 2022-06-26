import React from "react";
import NameListItem from "./NameListItem";

function NameList() {
    return (
        <div>
            <h1>Name List</h1>
            <hr />
            <ul>
                <NameListItem name="Naveen" course="Python" />
                <NameListItem name="Sanjula" course="C#" />
                <NameListItem name="asd" course="Azure" />
            </ul>
        </div>
    );
}

export default NameList;