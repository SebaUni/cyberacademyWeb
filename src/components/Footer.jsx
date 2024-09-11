import React from "react";
import Separador from './Separator';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, Paper } from '@mui/material';
import { IconButton, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LogoEmpresa from '../assets/LogoEmpresa.png';
import LogoUniversidad from '../assets/USMIconBlackWhite.png';
import LogoFeria from '../assets/FESWIconBlackWhite.png';



function Footer() {
    const Color_Eeri_Black= "#17191E";
    const Color_Gunmetal= "#272E3D";
    const Color_Celestial_Blue= "#109BE1";
    const Color_Silver= "#B0B4B5";
    const Color_Anti_Flash_White= "#F1F1F1";
    const Color_White= "#FFFFFF";

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center',     // Centra verticalmente
    };

    return (
        <Container maxWidth="x1" sx={{
            backgroundColor: Color_Gunmetal, 
            height: "8.82%" 
        }}
        >
            {/* Contenedor Superior del Pie de Nota*/}
            <Grid 
                container 
                justifyContent="space-evenly" 
                alignItems="center" 
                spacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3}}
                sx={{
                    backgroundColor: Color_Gunmetal,
                    paddingLeft: "5.73%",
                    paddingRight: "5.73%",
                    paddingTop: "1.67%",
                    paddingBottom: "0.60%",
                    height: "50.67%",
                }}
            >
                {/* Acerca de Cyber Academy */}
                <Grid item 
                    xs={3}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "600",
                                fontSize: "28",
                                letterSpacing: "0.1px",
                                color: Color_White,
                                textDecoration: "none",
                                marginTop: "6.33%",
                                marginBottom: "6.33%",
                                wordWrap: 'break-word',
                            }}
                            >
                            Acerca de Cyber Academy
                        </Typography>
                        <Typography
                            variant="body3"
                            align='left'
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "300",
                                fontSize: "16",
                                letterSpacing: "0",
                                color: Color_White,
                                width: "90%",
                                textDecoration: "none",
                                marginTop: "6.33%",
                                marginBottom: "6.33%",
                            }}
                        >
                            Software para el Aprendizaje de Ciberseguridad de forma interactiva y personalizada
                        </Typography>
                        <Typography
                            variant="body3"
                            align='left'
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "300",
                                fontSize: "16",
                                letterSpacing: "0",
                                color: Color_White,
                                width: "90%",
                                textDecoration: "none",
                                marginTop: "6.33%",
                                marginBottom: "6.33%",
                            }}
                        >
                            <InstagramIcon/>
                            <LinkedinIcon/>
                        </Typography>
                    </Box>
                </Grid>
                {/* Enlaces */}
                <Grid item 
                    xs={3}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "90%"
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "600",
                                fontSize: "28",
                                letterSpacing: "0.1px",
                                color: Color_White,
                                textDecoration: "none",
                                marginTop: "0",
                                marginBottom: "0",
                                wordWrap: 'break-word',
                                marginTop: "6.33%",
                            }}
                            >
                            Enlaces
                        </Typography>
                        <Typography
                            variant="body3"
                            align='left'
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "300",
                                fontSize: "16",
                                letterSpacing: "0",
                                color: Color_White,
                                width: "90%",
                                textDecoration: "none",
                                marginTop: "2.33%",
                                marginBottom: "1.33%",
                            }}
                        >
                            ¿Quienes Somos?
                        </Typography>
                        <Typography
                            variant="body3"
                            align='left'
                            component="a"
                            sx={{
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "300",
                                fontSize: "16",
                                letterSpacing: "0",
                                color: Color_White,
                                width: "90%",
                                textDecoration: "none",
                                marginTop: "1.33%",
                                marginBottom: "6.33%",
                            }}
                        >
                            Contacto
                        </Typography>
                    </Box>
                </Grid>
                {/* Contactanos */}
                <Grid item 
                    xs={3}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "600",
                                fontSize: "28",
                                letterSpacing: "0.1px",
                                color: Color_White,
                                textDecoration: "none",
                                marginTop: "0",
                                marginBottom: "0",
                                wordWrap: 'break-word',
                                marginTop: "6.33%",
                            }}
                            >
                            Contáctanos
                        </Typography>
                        <Typography
                            variant="body3"
                            align='left'
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "300",
                                fontSize: "16",
                                letterSpacing: "0",
                                color: Color_White,
                                textDecoration: "none",
                                marginTop: "2.33%",
                                marginBottom: "1.33%",
                            }}
                        >
                            <PhoneIcon/> 
                            <div style={{width: "5vh"}}/>
                            +56 912345678
                        </Typography>
                        <Typography
                            variant="body3"
                            align='left'
                            component="a"
                            sx={{
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "300",
                                fontSize: "16",
                                letterSpacing: "0",
                                color: Color_White,
                                textDecoration: "none",
                                marginTop: "1.33%",
                                marginBottom: "6.33%",
                            }}
                        >
                            <EmailIcon/> 
                            <div style={{width: "5vh"}}/>
                            mail@mail.com
                        </Typography>
                    </Box>
                </Grid>
                {/* Somos Parte */}
                <Grid item 
                    xs={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "600",
                                fontSize: "28",
                                letterSpacing: "0.1px",
                                color: Color_White,
                                textDecoration: "none",
                                marginTop: "0",
                                marginBottom: "0",
                                wordWrap: 'break-word',
                                marginTop: "6.33%",
                            }}
                            >
                            Somos Parte de
                        </Typography>
                        <Typography
                            variant="body3"
                            align='left'
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "300",
                                fontSize: "16",
                                letterSpacing: "0",
                                color: Color_White,
                                width: "100%",
                                textDecoration: "none",
                                marginTop: "2.33%",
                                marginBottom: "1.33%",
                            }}
                        >
                            <div style={containerStyles}>
                                <img src={LogoUniversidad} height={"40vh"} width = {"150vh"} alt="logo pagina" />
                            </div>
                        </Typography>
                        <Typography
                            variant="body3"
                            align='left'
                            component="a"
                            sx={{
                                display: { xs:"none", lg: "flex" },
                                fontFamily: "Nanum Gothic",
                                fontWeight: "300",
                                fontSize: "16",
                                letterSpacing: "0",
                                color: Color_White,
                                width: "100%",
                                textDecoration: "none",
                                marginTop: "1.33%",
                                marginBottom: "6.33%",
                            }}
                        >
                            <div style={containerStyles}>
                                <img src={LogoFeria} height={"40vh"} width = {"80vh"} alt="logo pagina" />
                            </div>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* Linea Divisora del Contenido*/}
            <Divider
                sx={{
                    borderColor: Color_Silver,
                    borderWidth: "1px",
                    width: "95%",
                    margin: '0 auto',
                }}
            />
            {/* Contenedor Inferior del Pie de Nota*/}
            <Grid 
                container 
                justifyContent="space-bewteen" 
                alignItems="center" 
                spacing={0} 
                columnSpacing={{ xs: 1, sm: 2, md: 3}}
                sx={{
                    backgroundColor: Color_Gunmetal,
                    paddingLeft: "3.67%",
                    paddingRight: "3.67%",
                    paddingTop: "0.60%",
                    paddingBottom: "0.60%",
                }}
            >
                {/* Logo de la Compañia */}
                <Grid item 
                    xs={true} 
                    sx={{
                        paddingRight: "45.99%",
                    }}
                >
                    <img src={LogoEmpresa} alt="Logo de la Empresa" width={"50vh"}></img>
                </Grid>
                {/* Derechos de Chibi tech*/}
                <Grid item 
                    xs={true} 
                    sx={{
                        paddingLeft: "46.00%",
                    }}
                >
                    <Typography
                        variant="body3"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs:"none", lg: "flex" },
                            fontFamily: "Nanum Gothic",
                            fontWeight: "600",
                            fontSize: "16",
                            letterSpacing: "0.1px",
                            color: Color_White,
                            textDecoration: "none",
                            marginTop: "0.65%",
                            marginBottom: "0.65%",
                        }}
                        >
                        <span>&copy;{new Date().getFullYear()} Cyber Academy | Todos los derechos reservados.</span>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer