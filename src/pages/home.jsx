import React from 'react';
import Separador from '../components/Separator';
import { Container, Paper, Grid, Typography } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import LogoAplicacion from '../assets/LogoAplicacion.png';

//Vista asociada a la Seccion Home
function HomePage() {
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
    
    const EnfoqueInfo = [
        {"title":"Aprender","source":{LogoAplicacion}},
        {"title":"Experimentar","source":{LogoAplicacion}},
        {"title":"Algo Mas","source":{LogoAplicacion}},
    ];
    
    return (
        <div style={{backgroundColor:"#F1F1F1"}}>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#17191E'}} >
                <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs ={6}>
                        <Typography variant='h3' align='center' sx={{color: 'white', fontWeight:'bold'}}>
                            Esto es un slogan representativo de Cyber Academy
                        </Typography>
                        <Separador altura="25px"/>
                        <Grid container spacing={1} sx={containerStyles}>
                            {EnfoqueInfo.map((data) => (
                                <Grid item  xs={3} sx={enfoqueStyles}>
                                    <Typography variant='h6' align='center' sx={{fontWeight:'bold'}}>
                                        {data.title}
                                    </Typography>
                                    <div style={containerStyles}>
                                        <img src={LogoAplicacion} width={"50%"}/>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs ={6}>
                        <img src={LogoAplicacion} width={"80%"}/>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#F1F1F1'}} >
                <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs ={6}>
                        <Typography variant='h3' align='center' sx={{color: 'black', fontWeight:'bold'}}>
                            ¿Qué es Cyber Academy?
                        </Typography>
                        <Separador altura="5px"/>
                        <Paper 
                            elevation={0}
                            sx={{
                            padding:"15px",
                            margin:"5px",
                            color:"black",
                            borderRadius:5
                            }}
                        >
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sem nisl. Nam sollicitudin dictum molestie. Morbi blandit nisl in enim sollicitudin elementum. Duis aliquam lacus ac lacus placerat maximus. Integer scelerisque sed urna eu egestas. Donec et nisl vel turpis ornare malesuada. Etiam aliquet bibendum lectus, ut euismod massa dapibus sit amet. Fusce id ullamcorper est, a pretium dui. Pellentesque ornare ornare libero, sed convallis magna consectetur ut. Donec tempus tellus metus, id placerat sem tincidunt nec. Donec luctus urna ante, vitae lobortis est blandit quis. Donec maximus sem at nisl semper, non tempus dolor pretium. Nulla vel ligula ligula. Fusce sit amet volutpat felis, non condimentum sapien. Maecenas et leo et odio vulputate volutpat. 
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs ={6}>
                        <Typography variant='h3' align='center' sx={{color: 'black', fontWeight:'bold'}}>
                            ¿A quién esta dirigido?
                        </Typography>
                        <Separador altura="5px"/>
                        <Paper 
                            elevation={0}
                            sx={{
                            padding:"15px",
                            margin:"5px",
                            color:"black",
                            borderRadius:5
                            }}
                        >
                            <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sem nisl. Nam sollicitudin dictum molestie. Morbi blandit nisl in enim sollicitudin elementum. Duis aliquam lacus ac lacus placerat maximus. Integer scelerisque sed urna eu egestas. Donec et nisl vel turpis ornare malesuada. Etiam aliquet bibendum lectus, ut euismod massa dapibus sit amet. Fusce id ullamcorper est, a pretium dui. Pellentesque ornare ornare libero, sed convallis magna consectetur ut. Donec tempus tellus metus, id placerat sem tincidunt nec. Donec luctus urna ante, vitae lobortis est blandit quis. Donec maximus sem at nisl semper, non tempus dolor pretium. Nulla vel ligula ligula. Fusce sit amet volutpat felis, non condimentum sapien. Maecenas et leo et odio vulputate volutpat. 
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid> 
            </Container>
            <Separador altura="5px"/>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#F1F1F1'}} >
                <Paper 
                    elevation={0}
                    sx={{
                    padding:"15px",
                    margin:"5px",
                    color:"black",
                    borderRadius:5
                    }}
                >
                    <Typography variant='h3' align='center' sx={{color: 'black', fontWeight:'bold'}}>
                        ¿Cómo Surge Cyber Academy?
                    </Typography>
                    <Separador altura="5px"/>
                    <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sem nisl. Nam sollicitudin dictum molestie. Morbi blandit nisl in enim sollicitudin elementum. Duis aliquam lacus ac lacus placerat maximus. Integer scelerisque sed urna eu egestas. Donec et nisl vel turpis ornare malesuada. Etiam aliquet bibendum lectus, ut euismod massa dapibus sit amet. Fusce id ullamcorper est, a pretium dui. Pellentesque ornare ornare libero, sed convallis magna consectetur ut. Donec tempus tellus metus, id placerat sem tincidunt nec. Donec luctus urna ante, vitae lobortis est blandit quis. Donec maximus sem at nisl semper, non tempus dolor pretium. Nulla vel ligula ligula. Fusce sit amet volutpat felis, non condimentum sapien. Maecenas et leo et odio vulputate volutpat. 
                    </Typography>
                </Paper>
            </Container>
            <Separador altura="25px"/>
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
                        ¿Cómo Surge Cyber Academy?
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
                </Paper>
            </Container>
        </div>
    );
}

export default HomePage;