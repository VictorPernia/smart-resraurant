import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
interface TestProps {}

export const Test: React.FC<TestProps> = ({}) => {
  const [state, setstate] = useState<any>();

  const fetch = () => {
    axios
      .get("http://localhost:3001/shop/1")
      .then((response) => {
        setstate(response.data.type);
      })
      .catch((e) => {
        // Podemos mostrar los errores en la consola
        console.log(e);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    alert(state);
  }, [state]);

  return <>nueva app</>;
};

export default Test;
