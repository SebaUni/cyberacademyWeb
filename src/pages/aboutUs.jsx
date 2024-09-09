import React from 'react';
import Separador from '../components/Separator';
import { Container, Paper, Grid, Typography } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import LogoEmpresa from '../assets/LogoEmpresa.png';
import TargetIcon from '@mui/icons-material/AdsClick';
import EyeIcon from '@mui/icons-material/Visibility';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

//Vista asociada a la Seccion Home
function AboutUsPage() {
    const containerStyles = {
        display: 'flex',
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center',     // Centra verticalmente
    };
    
    const enfoqueStyles = {
        padding:"15px",
        margin:"5px",
        backgroundColor: '#109BE1',
        color: 'black',
        borderRadius:5
    };
    
    return (
        <div style={{backgroundColor:"#F1F1F1"}}>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#109BE1'}} >
                <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs ={6}>
                        <img src={LogoEmpresa} width={"20%"}/>
                    </Grid>
                    <Grid item xs ={6}>
                        <Paper 
                            elevation={0}
                            sx={{
                                backgroundColor: "transparent",
                                padding:"15px",
                                margin:"5px",
                                color:"white",
                                borderRadius:5
                            }}
                        >
                            <Typography variant='h3' align='center' sx={{ fontWeight:'bold'}}>
                                ¿Cómo Surge Cyber Academy?
                            </Typography>
                            <Separador altura="5px"/>
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sem nisl. Nam sollicitudin dictum molestie. Morbi blandit nisl in enim sollicitudin elementum.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Separador altura="50px"/>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#F1F1F1'}} >
                <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs ={6}>
                        <Paper 
                            elevation={0}
                            sx={{
                                backgroundColor: "#109BE1",
                                padding:"15px",
                                margin:"5px",
                                color:"white",
                                borderRadius:5
                            }}
                        >
                            <Typography variant='h3' align='center' sx={{ fontWeight:'bold'}}>
                                Mision
                            </Typography>
                            <Separador altura="5px"/>
                            <div style={containerStyles}>
                                <TargetIcon width="50%"/>
                            </div>
                            <Separador altura="5px"/>
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sem nisl. Nam sollicitudin dictum molestie. Morbi blandit nisl in enim sollicitudin elementum.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs ={6}>
                        <Paper 
                            elevation={0}
                            sx={{
                                backgroundColor: "#109BE1",
                                padding:"15px",
                                margin:"5px",
                                color:"white",
                                borderRadius:5
                            }}
                        >
                            <Typography variant='h3' align='center' sx={{ fontWeight:'bold'}}>
                                Visión
                            </Typography>
                            <Separador altura="5px"/>
                            <div style={containerStyles}>
                                <EyeIcon width="50%"/>
                            </div>
                            <Separador altura="5px"/>
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sem nisl. Nam sollicitudin dictum molestie. Morbi blandit nisl in enim sollicitudin elementum.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Separador altura="50px"/>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#17191E'}} >
                <Separador altura="50px"/>
                <Grid container alignItems="center" justifyContent='center' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs ={4}>
                        <div style={containerStyles}>
                            <img src={LogoEmpresa} width={"50%"}/>
                        </div>
                        <Paper 
                            elevation={0}
                            sx={{
                                backgroundColor: "transparent",
                                textAlign: 'center',
                                padding:"5px",
                                margin:"5px",
                                color:"white",
                                borderRadius:5
                            }}
                        >
                            <Separador altura="2px"/>
                            <Typography variant='h7' sx={{ fontWeight:'bold'}}>
                                Sebastián Meneses
                            </Typography>
                            <Separador altura="5px"/>
                            <Typography variant='h7'sx={{ fontWeight:'bold'}}>
                                Scrum Master
                            </Typography>
                            <Separador altura="5px"/>
                            <div style={containerStyles}>
                                <LinkedinIcon/>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <div style={containerStyles}>
                            <img src={LogoEmpresa} width={"50%"}/>
                        </div>
                        <Paper 
                            elevation={0}
                            sx={{
                                backgroundColor: "transparent",
                                textAlign: 'center',
                                padding:"5px",
                                margin:"5px",
                                color:"white",
                                borderRadius:5
                            }}
                        >
                            <Separador altura="2px"/>
                            <Typography variant='h7' sx={{ fontWeight:'bold'}}>
                                Pablo Estobar
                            </Typography>
                            <Separador altura="5px"/>
                            <Typography variant='h7'sx={{ fontWeight:'bold'}}>
                                Product Owner
                            </Typography>
                            <Separador altura="5px"/>
                            <div style={containerStyles}>
                                <LinkedinIcon/>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <div style={containerStyles}>
                            <img src={LogoEmpresa} width={"50%"}/>
                        </div>
                        <Paper 
                            elevation={0}
                            sx={{
                                backgroundColor: "transparent",
                                textAlign: 'center',
                                padding:"5px",
                                margin:"5px",
                                color:"white",
                                borderRadius:5
                            }}
                        >
                            <Separador altura="2px"/>
                            <Typography variant='h7' sx={{ fontWeight:'bold'}}>
                                Joel Domínguez
                            </Typography>
                            <Separador altura="5px"/>
                            <Typography variant='h7'sx={{ fontWeight:'bold'}}>
                                Full Stack Developer
                            </Typography>
                            <Separador altura="5px"/>
                            <div style={containerStyles}>
                                <LinkedinIcon/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Separador altura="250px"/>
            </Container>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#17191E'}} >
                <Separador altura="250px"/>
                <Grid container alignItems="center" justifyContent='center' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs ={4}>
                        <div style={containerStyles}>
                            <img src={LogoEmpresa} width={"50%"}/>
                        </div>
                        <Paper 
                            elevation={0}
                            sx={{
                                backgroundColor: "transparent",
                                textAlign: 'center',
                                padding:"5px",
                                margin:"5px",
                                color:"white",
                                borderRadius:5
                            }}
                        >
                            <Separador altura="2px"/>
                            <Typography variant='h7' sx={{ fontWeight:'bold'}}>
                                Bastián Varas
                            </Typography>
                            <Separador altura="5px"/>
                            <Typography variant='h7'sx={{ fontWeight:'bold'}}>
                                Comunicaciones y Marketing
                            </Typography>
                            <Separador altura="5px"/>
                            <div style={containerStyles}>
                                <LinkedinIcon/>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <div style={containerStyles}>
                            <img src={LogoEmpresa} width={"50%"}/>
                        </div>
                        <Paper 
                            elevation={0}
                            sx={{
                                backgroundColor: "transparent",
                                textAlign: 'center',
                                padding:"5px",
                                margin:"5px",
                                color:"white",
                                borderRadius:5
                            }}
                        >
                            <Separador altura="2px"/>
                            <Typography variant='h7' sx={{ fontWeight:'bold'}}>
                                Sebastián Naranjo
                            </Typography>
                            <Separador altura="5px"/>
                            <Typography variant='h7'sx={{ fontWeight:'bold'}}>
                                Backend Developer
                            </Typography>
                            <Separador altura="5px"/>
                            <div style={containerStyles}>
                                <LinkedinIcon/>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs ={4}>
                        <div style={containerStyles}>
                            <img src={LogoEmpresa} width={"50%"}/>
                        </div>
                        <Paper 
                            elevation={0}
                            sx={{
                                backgroundColor: "transparent",
                                textAlign: 'center',
                                padding:"5px",
                                margin:"5px",
                                color:"white",
                                borderRadius:5
                            }}
                        >
                            <Separador altura="2px"/>
                            <Typography variant='h7' sx={{ fontWeight:'bold'}}>
                                Iván Oyarzún
                            </Typography>
                            <Separador altura="5px"/>
                            <Typography variant='h7'sx={{ fontWeight:'bold'}}>
                                Frontend y diseño UI/UX
                            </Typography>
                            <Separador altura="5px"/>
                            <div style={containerStyles}>
                                <LinkedinIcon/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Separador altura="50px"/>
            </Container>
        </div>
    );
}

export default AboutUsPage;