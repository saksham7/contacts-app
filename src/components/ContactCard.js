import React from "react";
import user from "../images/user-avatar.png";

const ContactCard = (props) => {
  const { id, name, mobile } = props.contact;
  const deleteContact = () => {
    props.handleDeleteContact(id);
  };
  return (
    <div className="item">
      <img className="ui avatar image" src={user} />
      <div className="content">
        <div className="header">{name}</div>
        <div>{mobile}</div>
      </div>
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
