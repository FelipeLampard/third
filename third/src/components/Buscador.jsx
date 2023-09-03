import React from "react";

const Buscador = ({note, noteFilter}) => {
  const inputTake = (e) => {
    const foundName = e.target.value.toLowerCase();
    const total = note.filter(
      (item) =>
        item.nombre.toLowerCase().includes(foundName) ||
        item.correo.toLowerCase().includes(foundName) ||
        item.edad.includes(foundName) ||
        item.cargo.toLowerCase().includes(foundName) ||
        item.telefono.includes(foundName)
    );
    noteFilter(total);
  };
  return (
    <>
      <input
        className="form-control mb-4"
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un colaborador"
        onChange={inputTake}
      ></input>
    </>
  );
};

export default Buscador;
