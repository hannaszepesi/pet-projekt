import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { responsiveWindow } from "./components/Styles";

function App() {
  return (
    <Box sx={responsiveWindow}>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
