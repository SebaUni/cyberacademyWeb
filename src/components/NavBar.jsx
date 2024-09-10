import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoEmpresa from '../assets/LogoEmpresa.png';
import LogoAplicacion from '../assets/LogoAplicacion.png';



function NavBar() {
    
  const normalButtonStyle= {
    backgroundColor: 'transparent',
    marginLeft: '5px',
    color: 'rgb(195, 195, 195)',
    fontSize: 'large',
    transition: 'transform 0.7s ease',
    '&:hover': {
      transform: 'scale(1.2,1.2)',
      color: 'white',
      opacity: '100%',
    },
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center',     // Centra verticalmente
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

  return (
    <AppBar position="static" sx={{backgroundColor:"#272E3D"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs:'none', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <div style={containerStyles}>
              <img src={LogoAplicacion} height={"80vh"} width = {"80vh"} alt='logo pagina' />
            </div>
            <h1>Cyber Academy</h1>
          </Typography>
          <Box 
            sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' }
              }}
              PaperProps={{sx:{backgroundColor:'preguntas.main',color:'preguntas.contrastText'}}}
            >
              {pages.map((page) => (
                <MenuItem key={page.name}>
                  <Button 
                    variant="text"
                    sx={normalButtonStyle}
                    component={Link}
                    to={page.href}
                    textalign="center"
                    color='inherit'
                  >
                  <Typography>{page.name}</Typography>
                  </Button>

                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', lg: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={LogoAplicacion} height={"80vh"} width = {"100vh"} alt='logo pagina' />
            <h1>Cyber Academy</h1>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }}} justifyContent="right">
            {pages.map((page) => (
              <Button
                key={page.name}
                variant="text"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
                component={Link}
                to={page.href}
                color='inherit'
              >
                <Typography fontWeight="bold">{page.name}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
