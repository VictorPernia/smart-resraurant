import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
interface TestProps {}

export const Test: React.FC<TestProps> = ({}) => {
  const fetch = () => {
    axios
      .get("http://localhost:3001/shop")
      .then((response) => {
        console.log(" get de prueba ", response.data);
      })
      .catch((e) => {
        // Podemos mostrar los errores en la consola
        console.log(e);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return <>nueva app</>;
};

export default Test;
