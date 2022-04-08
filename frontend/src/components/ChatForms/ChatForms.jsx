import React, { useEffect, useState } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import validation from "../../utils/validation";

const ChatForms = () => {
  const [form, setForm] = useState({
    firstName: null,
    middleName: null,
    lastName: null,
    lastLastName: null,
    day: null,
    month: null,
    year: null,
    email: null,
    phone: null,
  });

  const [activeStep, setActiveStep] = useState(1);
  const [errors, setErrors] = React.useState({});

  const handleNextStep = () => {
    if (activeStep > formMessages.length) return; // when there's no more steps
    // when there's no errors in the form
    if (Object.entries(errors).filter((e) => e[1] === false).length > 0)
      setActiveStep(activeStep + 1);
  };

  const validateInput = (label, value) => {
    // grab validation function and run it on input if it exists
    // if it doesn't exists, just assume the input is valid
    const isValid = validation?.[label] ? validation?.[label]?.(value) : true;

    // set an error if the validation did not return true
    setErrors((errors) => ({ ...errors, [label]: !isValid }));
  };

  const handleInputChange = (label, value) => {
    validateInput(label, value);
    setForm((form) => ({ ...form, [label]: value }));
  };

  const formMessages = [
    {
      step: 1,
      content: (
        <ChatMessage>
          <h6>¿Cual es tu nombre?</h6>
          <InputGroup className="pt-2">
            <FormControl
              value={form.firstName}
              isInvalid={Boolean(errors.firstName)}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              placeholder="Nombre"
            />
          </InputGroup>
          <InputGroup className="pt-2">
            <FormControl
              value={form.middleName}
              isInvalid={Boolean(errors.middleName)}
              onChange={(e) => handleInputChange("middleName", e.target.value)}
              placeholder="Segundo Nombre"
            />
          </InputGroup>
          <InputGroup className="pt-2">
            <FormControl
              value={form.lastName}
              isInvalid={Boolean(errors.lastName)}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              placeholder="Apellido Paterno"
            />
          </InputGroup>
          <InputGroup className="pt-2">
            <FormControl
              value={form.lastLastName}
              isInvalid={Boolean(errors.lastLastName)}
              onChange={(e) =>
                handleInputChange("lastLastName", e.target.value)
              }
              placeholder="Apellido Materno"
            />
          </InputGroup>

          <InputGroup className="pt-2">
            <Button
              id="btnname"
              onClick={(e) => {
                handleNextStep();
              }}
            >
              continuar
            </Button>
          </InputGroup>
        </ChatMessage>
      ),
    },
    {
      step: 2,
      content: (
        <ChatMessage>
          <h6>¿Cual es tu fecha de nacimiento?</h6>
          <InputGroup className="pt-2">
            <FormControl
              value={form.day}
              isInvalid={Boolean(errors.day)}
              onChange={(e) => handleInputChange("day", e.target.value)}
              placeholder="Dia"
            />
          </InputGroup>
          <InputGroup className="pt-2">
            <FormControl
              value={form.month}
              isInvalid={Boolean(errors.month)}
              onChange={(e) => handleInputChange("month", e.target.value)}
              placeholder="Mes"
            />
          </InputGroup>
          <InputGroup className="pt-2">
            <FormControl
              value={form.year}
              isInvalid={Boolean(errors.year)}
              onChange={(e) => handleInputChange("year", e.target.value)}
              placeholder="Año"
            />
          </InputGroup>
          <InputGroup className="pt-2">
            <Button
              onClick={(e) => {
                handleNextStep();
              }}
            >
              continuar
            </Button>
          </InputGroup>
        </ChatMessage>
      ),
    },
    {
      step: 3,
      content: (
        <ChatMessage>
          <h6>Datos de contacto</h6>
          <InputGroup className="pt-2">
            <FormControl
              value={form.email}
              isInvalid={Boolean(errors.email)}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Correo Electrónico"
            />
          </InputGroup>
          <InputGroup className="pt-2">
            <FormControl
              value={form.phone}
              isInvalid={Boolean(errors.phone)}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Teléfono celular"
            />
          </InputGroup>
          <InputGroup className="pt-2">
            <Button
              onClick={(e) => {
                handleNextStep();
              }}
            >
              continuar
            </Button>
          </InputGroup>
        </ChatMessage>
      ),
    },
  ];

  return (
    <>
      <form>
        {formMessages
          .filter((m) => m.step <= activeStep)
          .map((m) => (
            <>{m.content}</>
          ))}
        {activeStep === 4 ? (
          <ChatMessage>
            <h5>Verifique sus datos antes de iniciar el proceso</h5>
            <p>
              Fecha de Nacimiento:{" "}
              {new Date(
                form.year,
                form.month - 1, // month starts from 0
                form.day
              ).toLocaleDateString()}
            </p>
            <p>Email: {form.email} </p>
            <p> Celular: {form.phone} </p>
            <p>
              {" "}
              Nombre:{" "}
              {`${form.firstName} ${form.middleName} ${form.lastName} ${form.lastLastName}`}{" "}
            </p>
            <Button type="submit">continuar</Button>
          </ChatMessage>
        ) : null}
      </form>
    </>
  );
};

export default ChatForms;
