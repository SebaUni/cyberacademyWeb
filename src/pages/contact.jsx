import React from 'react';
import Separador from '../components/Separator';
import { Container, Paper, Grid, Typography } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import LogoEmpresa from '../assets/LogoEmpresa.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/LocationOn';

//Vista asociada a la Seccion Home
function ContactPage() {

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center',     // Centra verticalmente
    };
    
    const redesStyles = {
        display: 'flex',
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center',     // Centra verticalmente
        padding:"15px",
        margin:"5px",
        backgroundColor: '#109BE1',
        color: 'white',
        borderRadius:5
    };
    
    return (
        <div style={{backgroundColor:"#F1F1F1"}}>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#109BE1'}} >
            <Separador altura="125px"/>
                <Grid container alignItems="center" justifyContent='center' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item>
                        <Typography variant='h3' sx={{color:'white', fontWeight:'bold'}}>
                            ¡Pónte en contacto con nosotros!<br/>
                            Responderémos todas las dudas que tengas al respecto.
                        </Typography>
                    </Grid>
                </Grid>
                <Separador altura="125px"/>
            </Container>
            <Separador altura="125px"/>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#F1F1F1'}} >
                <Grid container gap={5} spacing={2} sx={containerStyles}>
                    <Grid item xs={2.5} sx={redesStyles}>
                        <InstagramIcon width="50%"/>
                        <Typography variant='h4' sx={{ fontWeight:'bold'}}>
                            Instragram
                        </Typography>
                    </Grid>
                    <Grid item xs={2.5} sx={redesStyles}>
                        <LinkedinIcon width="50%"/>
                        <Typography variant='h4' sx={{ fontWeight:'bold'}}>
                            LinkdedIn
                        </Typography>
                    </Grid>
                    <Grid item xs={2.5} sx={redesStyles}>
                        <EmailIcon width="50%"/>
                        <Typography variant='h4' sx={{ fontWeight:'bold'}}>
                            Correo
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Separador altura="125px"/>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#17191E'}} >
                <Paper 
                    elevation={0}
                    sx={{
                    padding:"15px",
                    margin:"5px",
                    backgroundColor: "#17191E",
                    color:"white",
                    borderRadius:5
                    }}
                >
                    <Typography variant='h3' align='center' sx={{fontWeight:'bold'}}>
                        ¡Ven a vernos el día X de Noviembre a la<br/>Feria de Software!
                    </Typography>
                    <Separador altura="5px"/>
                    <Card sx={{minWidth: 300, flexGrow: 1}}>
                        <CardMedia
                            component="iframe"
                            height="315"
                            image="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Video Presentacion"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </Card>
                    <Separador altura="20px"/>
                    <Typography variant='h5' align='center' sx={{fontWeight:'bold'}}>
                        <LocationIcon width="50%"/>
                        Av. Vicuña Mackenna 3939, San Joaquín, Región Metropolitana
                    </Typography>
                </Paper>
            </Container>
        </div>
    );
}

export default ContactPage;