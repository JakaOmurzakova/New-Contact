import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteContact, changeStatus }) => {
  return (
    <block>
      {contacts.map((item) => (
        <ContactItem
          key={item.id}
          item={item}
          deleteContact={deleteContact}
          changeStatus={changeStatus}
        />
      ))}
    </block>
  );
};

export default ContactList;
