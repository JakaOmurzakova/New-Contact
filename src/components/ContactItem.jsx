import React from "react";
import DeleteIcon from "../picture/images.png";
import LikeIcon from "../picture/images (1).png";
import "../App.css";

const ContactItem = ({ item, deleteContact, changeStatus }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "15" }}>
      <card>
        <h3>{item.name}</h3>
        <h3>{item.surname}</h3>
        <h3>{item.phone}</h3>
        <img
          onClick={() => {
            changeStatus(item.id);
          }}
          style={{ cursor: "pointer" }}
          width={15}
          src={LikeIcon}
          alt="like"
        ></img>
        <img
          onClick={() => {
            deleteContact(item.id);
          }}
          style={{ cursor: "pointer" }}
          width={15}
          src={DeleteIcon}
          alt="delete"
        ></img>
      </card>
    </div>
  );
};

export default ContactItem;
