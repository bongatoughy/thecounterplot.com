import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Typography, Box, Zoom } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Zoom in={true} timeout={2000}>
        <Box>
          <Typography variant="h1">Hi Nathan!</Typography>
          <Typography variant="h3">It's going to be a wonderful day</Typography>
        </Box>
      </Zoom>
    </>
  );
}

export default App;
