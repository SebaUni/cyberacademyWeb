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
import LogoUniversidad from '../assets/LogoUniversidad.png';
import LogoFeria from '../assets/LogosFeriaSoftware.png';

const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center',     // Centra verticalmente
};

function Footer() {
    return (
        <div style={{backgroundColor:"#272E3D"}}>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                }}
                //bgcolor="primary.dark"
                //color="primary.contrastText"
                boxShadow={3}
                >
                <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs ={3}>
                        <Typography variant='h6' align='center' sx={{color: 'white', fontWeight:'bold'}}>
                            Acerca de Cyber Academy
                        </Typography>
                        <Separador altura="5px"/>
                        <Paper 
                            elevation={0}
                            sx={{
                            padding:"15px",
                            margin:"5px",
                            background:"none",
                            color:"white",
                            borderRadius:5
                            }}
                        >
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                Software para el aprendizaje de ciberseguridad de forma interactiva y personalizada
                            </Typography>
                            <Separador altura="10px"/>
                            <Grid container justifyContent="space-bewteen" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                                <Grid item xs={5}>
                                    <InstagramIcon/>
                                    <LinkedinIcon/>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs ={3}>
                        <Typography variant='h6' align='center' sx={{color: 'white', fontWeight:'bold'}}>
                            Enlaces
                        </Typography>
                        <Separador altura="5px"/>
                        <Paper 
                            elevation={0}
                            sx={{
                            padding:"15px",
                            margin:"5px",
                            background:"none",
                            color:"white",
                            borderRadius:5
                            }}
                        >
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                ¿Quienes Somos?
                            </Typography>
                            <Separador altura="5px"/>
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                Contacto
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs ={3}>
                        <Typography variant='h6' align='center' sx={{color: 'white', fontWeight:'bold'}}>
                            Contáctanos
                        </Typography>
                        <Separador altura="5px"/>
                        <Paper 
                            elevation={0}
                            sx={{
                            padding:"15px",
                            margin:"5px",
                            background:"none",
                            color:"white",
                            borderRadius:5
                            }}
                        >
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                <PhoneIcon/> +0000000
                            </Typography>
                            <Separador altura="5px"/>
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                <EmailIcon/> mail@mail.com
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs ={3}>
                        <Typography variant='h6' align='center' sx={{color: 'white', fontWeight:'bold'}}>
                            Somos parte de
                        </Typography>
                        <Separador altura="5px"/>
                        <Paper 
                            elevation={0}
                            sx={{
                            padding:"15px",
                            margin:"5px",
                            background:"none",
                            color:"white",
                            borderRadius:5
                            }}
                        >
                            <div style={containerStyles}>
                                <img src={LogoUniversidad} width={"20%"}/>
                            </div>
                            <Separador altura="5px"/>
                            <div style={containerStyles}>
                                <img src={LogoFeria} width={"20%"}/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Divider
                    sx={{
                        borderColor: "#B0B4B5",
                        borderWidth: "1px",
                        width: "95%",
                        margin: '0 auto'
                    }}
                />
                <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%"}} >
                    <Grid container justifyContent="space-bewteen" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                        <Grid item xs={6}>
                            <img src={LogoEmpresa} alt="Logo de la Empresa" width={"35px"}></img>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign: "right"}}>
                                <Typography variant="p" className="col-sm" sx={{color: 'white', fontWeight:'bold'}}>
                                    &copy;{new Date().getFullYear()} Cyber Academy | Todos los derechos reservados.
                                </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
        
    )
}

export default Footer