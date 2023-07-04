import React, { useState } from "react";
import "../App.css";

const ContactForm = ({ addContact }) => {
  const [contactName, setContactName] = useState("");
  const [contactSurname, setContactSurname] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !contactName.trim() &&
          !contactSurname.trim() &&
          !contactPhone.trim()
        ) {
          return;
        }
        const newObj = {
          id: Date.now(),
          name: contactName,
          surname: contactSurname,
          phone: contactPhone,
          status: false,
        };
        addContact(newObj);
        setContactName("");
        setContactPhone("");
        setContactSurname("");
      }}
    >
      <input
        className="inp"
        value={contactName}
        onChange={(e) => {
          setContactName(e.target.value);
        }}
        placeholder="Enter name..."
        type="text"
      />
      <input
        className="inp"
        value={contactSurname}
        onChange={(e) => {
          setContactSurname(e.target.value);
        }}
        placeholder="Enter surname..."
        type="text"
      />
      <input
        className="inp"
        value={contactPhone}
        onChange={(e) => {
          setContactPhone(e.target.value);
        }}
        placeholder="Enter phone..."
        type="text"
      />
      <button className="btn">Add</button>
    </form>
  );
};

export default ContactForm;
