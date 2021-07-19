import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user-avatar.png";

const ContactCard = (props) => {
  const { id, name, mobile } = props.contact;
  const deleteContact = () => {
    props.handleDeleteContact(id);
  };
  return (
    <div className="item" style={{ padding: "10px" }}>
      <img className="ui avatar image" alt="User Image" src={user} />
      <Link
        to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
      >
        <div className="content" style={{ display: "inline-block" }}>
          <div className="header">{name}</div>
          <div>{mobile}</div>
        </div>
      </Link>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginTop: "7px",
          display: "inline-block",
          float: "right",
        }}
        onClick={deleteContact}
      ></i>
    </div>
  );
};

export default ContactCard;
