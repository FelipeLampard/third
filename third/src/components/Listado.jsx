import { Table } from "react-bootstrap";

const Listado = ({ noteFilter }) => {
  const info = noteFilter.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.nombre}</td>
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
    <Table variant="dark" className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>{info}</tbody>
    </Table>
  );
};

export default Listado;
