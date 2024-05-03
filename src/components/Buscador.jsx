import React, { useState } from "react";

const Buscador = ({ buscar }) => {
  const [palabra, setPalabra] = useState("");

  const buscando = (e) => {
    const valor = e.target.value;
    setPalabra(valor);
    buscar(valor);
  };

  return (
    <div className="form-group my-2">
      <input  className="pe-5"
        type="text"
        placeholder="Buscar un colaborador"
        value={palabra}
        onChange={buscando}
      />
    </div>
  );
};

export default Buscador;
