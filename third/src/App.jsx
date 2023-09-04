import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { bs } from "./bs";
import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Alerta from "./components/Alert";

function App({}) {
  //Convertir el listado de JS Vanilla a un useState Base para el listado
  const [note, setNote] = useState(bs);
  //Lo mismo, pero que aplique al agregar un nombre
  const [noteFilter, setNoteFilter] = useState(note);

  const [alert, addAlert] = useState({
    msg: "",
    color: "",
    estado: false,
  });

  return (
    <>
      <h1 className="mb-3">Lista de colaboradores</h1>

      <div className="container">
        <Buscador note={note} noteFilter={setNoteFilter} />
        <div className="row">
          <Listado noteFilter={noteFilter}/>
          <Formulario addAlert={addAlert} note={note} setNote={setNote} setNoteFilter={setNoteFilter}/>
        </div>
        {alert.estado && <Alerta color={alert.color} msg={alert.msg} />}
      </div>
    </>
  );
}

export default App;
