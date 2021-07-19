import React from "react";
import ContactCard from "./ContactCard";

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
  return <div className="ui celled list container">{renderContactList}</div>;
};

export default ContactList;
