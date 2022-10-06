import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PetIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import { navbarTypography } from "./Styles";

const settings = ["Profil", "Saját állatok", "Kijelentkezés"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(90deg, rgba(159,38,124,1) 21%, rgba(252,158,69,1) 80%);",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetIcon sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={navbarTypography}
          >
            PET PROJEKT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <MenuItem
                component={Link}
                to="/orokbefogadhato-allatok"
                key="animals_phone"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                  Örökbefogadható állatok
                </Typography>
              </MenuItem>

              <MenuItem
                to="/kapcsolat"
                key="contacts_phone"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Kapcsolat</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <IconButton component={Link} to="/" sx={{ display: { xs: "flex", sm: "none" }, mr: 1 }}><PetIcon sx={{color: "white"}} /></IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Button
              component={Link}
              to="/orokbefogadhato-allatok"
              key="animals_tab"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Örökbefogadható állatok
            </Button>

            <Button
              component={Link}
              to="/kapcsolat"
              key="contacts_tab"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Kapcsolat
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
