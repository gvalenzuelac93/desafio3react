import { useState } from "react";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";
import Alerts from "./Alert";

const Formulario = ({ agregarColaborador, errorApp, correcto }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const agregar = (e) => {
    e.preventDefault();
    const id = uuidv4();

    if (
      nombre === "" ||
      correo === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      setError(true);
      setExito(false);
      return;
    }
    setExito(true);
    agregarColaborador({ nombre, correo, edad, cargo, telefono, id });
    setError(false);
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };
  return (
    <form className="formulario" onSubmit={agregar}>
      <div className="form-group my-3">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="form-control"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="email"
          name="correo"
          placeholder="correo@ejemplo.com"
          className="form-control"
          onChange={(e) => setCorreo(e.target.value)}
          value={correo}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          className="form-control"
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="text"
          name="cargo"
          placeholder="Cargo"
          className="form-control"
          onChange={(e) => setCargo(e.target.value)}
          value={cargo}
        />
      </div>
      <div className="form-group my-3">
        <input
          type="number"
          name="telefono"
          placeholder="Teléfono"
          className="form-control"
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" className="px-5 mt-3">
          Registrar colaborador
        </Button>
      </div>
      <div className="form-group my-2">
        {error ? <Alerts textAlert={errorApp} colorAlert={"danger"} /> : null}
        {exito ? <Alerts textAlert={correcto} colorAlert={"success"} /> : null}
      </div>
    </form>
  );
};

export default Formulario;
