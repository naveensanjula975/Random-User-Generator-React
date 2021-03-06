import React from "react";
import moment from "moment";

import "./NameListItem.css";

function NameListItem(props) {
  return (
    <li className="list-group-item shadow-sm">
      <div className="row align-items-center">
        <div className="col-2">
          <img
            src={props.avatar}
            alt={props.name}
            className="border border-dark rounded-circle shadow-sm"
          />
        </div>
        <div className="col-10">
          <h3 className="redText">{props.name}</h3>
          <p style={{ color: "green" }}>
            {props.city} | {props.email}
          </p>
          <small>{moment(props.birthday).format("DD-MM-YYYY")}</small>
        </div>
      </div>
    </li>
  );
}

export default NameListItem;
