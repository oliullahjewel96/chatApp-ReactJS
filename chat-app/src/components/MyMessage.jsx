import React from "react";

function MyMessage({ message }) {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachment[0].file}
        alt="message-attachment"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "#fff",
        backgroundColor: "#3B5A20",
      }}
    >
      {message.text}
    </div>
  );
}

export default MyMessage;
