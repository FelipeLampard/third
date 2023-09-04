import { Table } from "react-bootstrap";

const Listado = ({ noteFilter }) => {
  const info = noteFilter.map((item) => (
    <tr key={item.telefono}>
      <td scope="row">{item.nombre}</td>
      <td>{item.correo}</td>
      <td>{item.edad}</td>
      <td>{item.cargo}</td>
      <td>{item.telefono}</td>
      <td>
      <i className="fa fa-trash"></i>

      </td>
    </tr>
  ));

  return (
      <div className="col-md-7">
        <Table variant="dark" className="table table-responsive table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Edad</th>
              <th scope="col">Cargo</th>
              <th scope="col">Telefono</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>{info}</tbody>
      </Table>
      </div>    
  );
};

export default Listado;
