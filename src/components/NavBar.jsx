import React from "react";
import { Link } from "react-router-dom";
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
import LogoEmpresa from "../assets/LogoEmpresa.png";
import LogoAplicacion from "../assets/LogoAplicacion.png";



function NavBar() {

  const Color_Eeri_Black= "#17191E";
  const Color_Gunmetal= "#272E3D";
  const Color_Celestial_Blue= "#109BE1";
  const Color_Silver= "#B0B4B5";
  const Color_Anti_Flash_White= "#F1F1F1";
  const Color_White= "#FFFFFF";

  const containerStyles = {
    display: "flex",
    justifyContent: "center", // Centra horizontalmente
    alignItems: "center",     // Centra verticalmente
  };

  const pages = [
    {"name":"Inicio","href":"/"},
    {"name":"¿Quienes Somos?","href":"/AboutUs"}, 
    {"name":"Contacto","href":"/Contact"},
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const DesktopButtonDefaultStyle= {
    my: 2, 
    display: "block", 
    backgroundColor: "transparent",
    marginLeft: "5px",
    color: {Color_White},
    fontFamily: "Nanum Gothic",
    fontWeight: "600",
    fontSize: "22",
    letterSpacing: "0%",
    transition: 'all 0.5s ease',
  };

  const DesktopButtonInteractiveStyle= {
    my: 2, 
    display: "block", 
    backgroundColor: "transparent",
    marginLeft: "5px",
    color: {Color_Anti_Flash_White},
    fontFamily: "Nanum Gothic",
    fontWeight: "600",
    fontSize: "22",
    letterSpacing: "0%",
    transition: 'all 0.5s ease',
    '&:hover': {
      transform: "scale(1.2,1.2)",
      opacity: "100%",
      color: {Color_White}
    },
    '&:not(:hover)': {
      transform: "scale(0.6,0.6)",
      opacity: "80%",
      color: {Color_Silver}
    }
  };

  const [DesktopButtonHovered, setDesktopButtonHovered] = React.useState(null);

  const handleMouseEnterButtonDesktop = (index) => {
    setDesktopButtonHovered(index);
  };

  const handleMouseLeaveButtonDesktop = () => {
    setDesktopButtonHovered(null);
  };

  const getButtonStyleDesktopView= () => {
    if (DesktopButtonHovered === null){
        return DesktopButtonDefaultStyle;
    }
    return DesktopButtonInteractiveStyle;
  };

  const MovileButtonDefaultStyle= {
    backgroundColor: "transparent",
    marginLeft: "5px",
    color: {Color_Anti_Flash_White},
    fontFamily: "Nanum Gothic",
    fontWeight: "600",
    fontSize: "22",
    letterSpacing: "0%",
    transition: 'all 0.5s ease',
  };

  const MovileButtonInteractiveStyle= {
    backgroundColor: "transparent",
    marginLeft: "5px",
    color: {Color_Anti_Flash_White},
    fontFamily: "Nanum Gothic",
    fontWeight: "600",
    fontSize: "22",
    letterSpacing: "0%",
    transition: 'all 0.5s ease',
    '&:hover': {
      opacity: "100%",
      color: {Color_White}
    },
    '&:not(:hover)': {
      transform: "scale(0.9,0.9)",
      opacity: "80%",
      color: {Color_Silver}
    }
  };

  const [MovileButtonHovered, setMovileButtonHovered] = React.useState(null);

  const handleMouseEnterButtonMovile = (index) => {
    setMovileButtonHovered(index);
  };

  const handleMouseLeaveButtonMovile = () => {
    setMovileButtonHovered(null);
  };

  const getButtonStyleMovileView= () => {
    if (MovileButtonHovered === null){
      return MovileButtonDefaultStyle;
    }
    return MovileButtonInteractiveStyle;
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: Color_Gunmetal,
      width: "100%",
      height: "4.00%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*Configuracion de la Estructura en Movile View*/}
          <Container>
            {/* Configurando el Logo y Titulo de la Aplicacion */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs:"none", lg: "flex" },
                fontFamily: "Carrois Gothic SC",
                fontWeight: "700",
                fontSize: "20",
                letterSpacing: "0%",
                color: "inherit",
                textDecoration: "none",
                marginLeft: "11.09%",
                marginTop: "0.65%",
                marginBottom: "0.65%",
              }}
            >
              <div style={containerStyles}>
                <img src={LogoAplicacion} height={"80vh"} width = {"80vh"} alt="logo pagina" />
              </div>
              <div style={containerStyles}>
                <span height={"100vh"}>Cyber Academy</span>
              </div> 
            </Typography>
            {/* Gap entre el Contenedor del Logo y los Botones */}
            <div style={{width: "45.99%"}}></div>
            {/* Configurando los Botones de Navegacion en la Aplicacion */}
            <Box 
              sx={{ 
                flexGrow: 1, 
                display: { xs: "flex", lg: "none" } 
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleOpenNavMenu}
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
                  display: { xs: "block", lg: "none" },
                  gap: "2.24%",
                  marginRight: "10.21%",
                  marginTop: "1.41%",
                  marginBottom: "1.41%",
                }}
                PaperProps={{sx:{backgroundColor:"preguntas.main",color:"preguntas.contrastText"}}}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name}>
                    <Button 
                      variant="text"
                      onMouseEnter={() => handleMouseEnterButtonMovile(page.name)}
                      onMouseLeave={handleMouseLeaveButtonMovile}
                      onClick={handleCloseNavMenu}
                      sx={getButtonStyleMovileView}
                      component={Link}
                      to={page.href}
                      textalign="center"
                      color="inherit"
                    >
                    <Typography>{page.name}</Typography>
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Container>
          {/*Configuracion de la Estructura en Desktop View*/}
          <Container>
            {/* Configurando el Logo y Titulo de la Aplicacion */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", lg: "none" },
                flexGrow: 1,
                fontFamily: "Carrois Gothic SC",
                fontWeight: "700",
                fontSize: "20",
                letterSpacing: "0%",
                color: "inherit",
                textDecoration: "none",
                marginTop: "0.65%",
                marginBottom: "0.65%",
              }}
            >
              <div style={containerStyles}>
                <img src={LogoAplicacion} height={"80vh"} width = {"80vh"} alt="logo pagina" />
              </div>
              <div style={containerStyles}>
                <span height={"100vh"}>Cyber Academy</span>
              </div> 
            </Typography>
            {/* Gap entre el Contenedor del Logo y los Botones */}
            <div style={{width: "45.99%"}}></div>
            {/* Configurando los Botones de Navegacion en la Aplicacion */}
            <Box 
              sx={{ 
                flexGrow: 1, 
                display: { xs: "none", lg: "flex" },
                backgroundColor: Color_Gunmetal
              }} 
              justifyContent="right"
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  variant="text"
                  onMouseEnter={() => handleMouseEnterButtonDesktop(page.name)}
                  onMouseLeave={handleMouseLeaveButtonDesktop}
                  onClick={handleCloseNavMenu}
                  sx={getButtonStyleDesktopView}
                  component={Link}
                  to={page.href}
                  color="inherit"
                >
                  <Typography fontWeight="bold">{page.name}</Typography>
                </Button>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
