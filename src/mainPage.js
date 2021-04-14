import React, { useContext, useState } from "react";
import CepDetails from "./components/cepDetails";
import { CepContext } from "./context/CepContext";
import InputMask from "react-input-mask";
import { Box, Button, Container, Input } from "@material-ui/core";

function MainPage() {
  const { data, fetchCep } = useContext(CepContext);
  const [searched, setSearched] = useState("");

  return (
    <Container maxWidth="sm">
      <Box display="flex">
        <h1>Busca Cep </h1>
      </Box>
      <Box>
        <InputMask
          mask="99999-999"
          type="text"
          value={searched}
          onChange={(e) => {
            setSearched(e.target.value);
          }}
        >
          {(inputProps) => (
            <Input {...inputProps} type="text" color="secondary"></Input>
          )}
        </InputMask>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => fetchCep(searched)}
        >
          Buscar
        </Button>
        <CepDetails cep={data} />
      </Box>
    </Container>
  );
}

export default MainPage;
