import React, { createContext, useState } from "react";

const CepContext = createContext();

const CepProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [cep, setCep] = useState("");
  const [error, setError] = useState({ show: false, message: "" });

  const fetchCep = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((json) => {
        const results = json;
        if (results && results.erro) {
          showError("Cep não encontrado");
        } else {
          setData(results);
          setError({ show: false, message: "" });
        }
      });
  };

  const showError = (message) => {
    setError({
      show: true,
      message,
    });
  };

  const context = {
    data,
    setData,
    cep,
    setCep,
    fetchCep,
    error,
  };

  return <CepContext.Provider value={context}>{children}</CepContext.Provider>;
};
export { CepContext, CepProvider as Provider };
