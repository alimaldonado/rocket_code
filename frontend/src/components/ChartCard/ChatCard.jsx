import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ChatForms from "../ChatForms/ChatForms";

const ChatCard = () => {
  return (
    <Card border="info">
      <Card.Body className="text-center">
        <Card.Title>Titulo del formulario</Card.Title>
        <Card.Subtitle>
          <span>
            <i className="fa-solid fa-clock"></i>
          </span>{" "}
          En menos de cinco minutos
        </Card.Subtitle>
        <>
          <Container>
            <Row>
              <ChatForms />
            </Row>
          </Container>
        </>
      </Card.Body>
    </Card>
  );
};

export default ChatCard;
