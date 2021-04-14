import React, { useContext } from "react";
import { CepContext } from "../context/CepContext";

function CepDetails() {
  const { data, error } = useContext(CepContext);

  const showAddress = (error) => {
    return error.show ? (
      <div>{error.message}</div>
    ) : (
      <div>
        <p>{data.cep}</p>
        <p>{data.logradouro}</p>
        <p>{data.complemento}</p>
        <p>{data.bairro}</p>
        <p>{data.localidade}</p>
        <p>{data.uf}</p>
      </div>
    );
  };

  return showAddress(error);
}
export default CepDetails;
