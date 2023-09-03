import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ note, setNote, noteFilter, setNoteFilter, addAlert }) => {
  const [noteInfo, setnoteInfo] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const takeInputs = (e) => {
    const inputId = {
      inputName: "nombre",
      inputMail: "correo",
      inputAge: "edad",
      inputCharge: "cargo",
      inputPhone: "telefono",
    };

    const prop = inputId[e.target.id];
    if (prop) {
      setnoteInfo({ ...noteInfo, [prop]: e.target.value });
    };
  };


    const handleSubmit = (e) => {
      e.preventDefault();
      const { nombre, correo, edad, cargo, telefono } = noteInfo;
      if (!nombre || !correo || !edad || !cargo || !telefono) {
        addAlert({
          estado: true,
          msg: "Completa todos los campos",
          color: "text-danger",
        });
        return;
      }

      setNote([...note, noteInfo]);

      addAlert({
        estado: true,
        msg: "Agregado exitosamente",
        color: "text-success",
      });

      setnoteInfo({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    };

  return (
    <>
      <h3>Agregar Colaborador</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Nombre del colaborador"
            id="inputName"
            value={noteInfo.nombre}
            onChange={takeInputs}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className="form-control"
            type="email"
            placeholder="Email del colaborador"
            id="inputMail"
            value={noteInfo.correo}
            onChange={takeInputs}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className="form-control"
            type="number"
            placeholder="Edad del colaborador"
            id="inputAge"
            value={noteInfo.edad}
            onChange={takeInputs}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Cargo del colaborador"
            id="inputCharge"
            value={noteInfo.cargo}
            onChange={takeInputs}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className="form-control"
            type="number"
            placeholder="Telefono del colaborador"
            id="inputPhone"
            value={noteInfo.telefono}
            onChange={takeInputs}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
