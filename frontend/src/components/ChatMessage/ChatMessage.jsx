import React from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
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
          class="img-thumbnail rounded-circle"
          alt="avatar"
        />
      </Col>
      <Col lg="9">
        <Card className="bg-light text-dark">
          <Card.Body>
            <form>
              <h6>¿Cual es tu nombre?</h6>
              <InputGroup className="pt-2">
                <FormControl placeholder="Nombre" />
              </InputGroup>
              <InputGroup className="pt-2">
                <FormControl placeholder="Segundo Nombre" />
              </InputGroup>
              <InputGroup className="pt-2">
                <FormControl placeholder="Apellido Paterno" />
              </InputGroup>
              <InputGroup className="pt-2">
                <FormControl placeholder="Apellido Materno" />
              </InputGroup>
              <InputGroup className="pt-2">
                <Button>continuar</Button>
              </InputGroup>
            </form>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ChatMessage;
