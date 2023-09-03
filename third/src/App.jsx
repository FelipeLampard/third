import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { bs } from "./bs";
import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";

function App({}) {
  const [note, setNote] = useState(bs);
  const [noteFilter, setNoteFilter] = useState(note);

  const [alert, addAlert] = useState({
    msg: "",
    color: "",
    estado: false,
  });

  return (
    <>
      <h1 className="mb-3">Lista de colaboradores</h1>

      <div>
        <Buscador note={note} noteFilter={setNoteFilter} />
        <Listado
          note={note}
          setNote={setNote}
          noteFilter={noteFilter}
          setNoteFilter={setNoteFilter}
        />
      <Formulario addAlert={addAlert} note={note} setNote={setNote} />
      {alert.estado && <Alert color={alert.color} msg={alert.msg} />}
      </div>
    </>
  );
}

export default App;
