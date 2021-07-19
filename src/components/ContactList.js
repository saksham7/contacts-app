import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact, index) => {
    return (
      <ContactCard
        key={index}
        contact={contact}
        handleDeleteContact={(id) => {
          props.getContactId(id);
        }}
      />
    );
  });
  return (
    <div className="main container">
      <h2>
        Contacts List
        <Link to="/add">
          <button className="ui button blue right" style={{ float: "right" }}>
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
