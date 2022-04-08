import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ChatMessage = ({ children }) => {
  return (
    <>
      <Col xs lg="3">
        <img
          style={{
            objectFit: "cover",
            width: "50px",
            height: "50px",
          }}
          src="https://source.unsplash.com/random"
          className="img-thumbnail rounded-circle"
          alt="avatar"
        />
      </Col>
      <Col lg="9">
        <Card className="bg-light text-dark">
          <Card.Body>
            <div>{children}</div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ChatMessage;
