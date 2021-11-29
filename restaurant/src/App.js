import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";

import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SmoothList from "react-smooth-list";

import Snowy from "./wallpapper/Snowy.png";
import Sur from "./wallpapper/BigSur.jpg";
function App() {
  return (
    <Box
      className=""
      style={{
        backgroundColor: "#1D2548",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid container direction="row" justifyContent={"center"}>
        <Grid
          item
          xs={11}
          style={{
            backgroundColor: "#717580",
            borderRadius: "20px",
            width: "80%",
            paddingTop: "1%",
            marginTop: "1%",
          }}
        >
          <SmoothList
            delay={400}
            transitionDuration={600}
            className="flex"
            childClassName="ancho"
          >
            <Grid container direction="row">
              <Grid item xs={8}></Grid>

              <Grid item xs={4}>
                <img
                  style={{ height: "52px", width: "auto" }}
                  src={process.env.PUBLIC_URL + "/wheater.svg"}
                  alt="logo"
                />
              </Grid>
            </Grid>
            <Grid>
              <img
                style={{ height: "52px", width: "auto" }}
                src={process.env.PUBLIC_URL + "/wheater.svg"}
                alt="logo"
              />
            </Grid>
            <Grid>
              <img
                style={{ height: "52px", width: "auto" }}
                src={process.env.PUBLIC_URL + "/wheater.svg"}
                alt="logo"
              />
            </Grid>
          </SmoothList>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;

{
  /* <img
        style={{ height: "62px", width: "auto", marginTop: "3%" }}
        src={process.env.PUBLIC_URL + "/house.png"}
        alt="logo"
      />

    */
}

/*    <Box
          style={{
            backgroundColor: "#fbf7f730",
            borderRadius: "20px",
            width: "80%",
          }}
        > */
