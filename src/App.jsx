import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import { useState } from "react";
import { BaseColaboradores } from "../src/assets/javascript/BaseColaboradores.js";
import Buscador from "./components/Buscador.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [error] = useState("Todos los campos son obligatorios");
  const [correcto] = useState("Ingreso correcto");

  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [listaFiltrada, setListaFiltrada] = useState(listaColaboradores);
  const buscarColaborador = (palabra) => {
    const resultados =
      palabra === ""
        ? listaColaboradores
        : listaColaboradores.filter((colaborador) =>
            Object.values(colaborador).some(
              (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(palabra.toLowerCase())
            )
          );
    setListaFiltrada(resultados);
  };
  const agregarColaborador = (colaborador) => {
    setListaColaboradores([...listaColaboradores, colaborador]);
    setListaFiltrada([...listaFiltrada, colaborador]);
  };

  return (
    <Container className="mx-1">
      <Row>
        <Col className="d-flex flex-column align-items-start" xs={2} md={4} lg={6}>
          <h1 className="text-start">Lista de colaboradores</h1>
          <Buscador  buscar={buscarColaborador} />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <Listado colaboradores={listaFiltrada} />
        </Col>
        <Col sm>
          <h2>Agregar colaborador</h2>
          <Formulario
            agregarColaborador={agregarColaborador}
            errorApp={error}
            correcto={correcto}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
