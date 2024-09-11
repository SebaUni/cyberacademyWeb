import React from 'react';
import Separador from '../components/Separator';
import { Container, Paper, Grid, Typography } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import LogoAplicacion from '../assets/LogoAplicacion.png';
import IconGraduation from '../assets/IconGraduation.png';
import IconPlan from '../assets/IconPlan.png';

//Vista asociada a la Seccion Home
function HomePage() {

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
    
    const enfoqueStyles = {
        marginLeft: "5vh",
        marginRight: "5vh",
        paddingLeft: "10vh",
        paddingRight: "10vh",
        paddingBottom: "5vh",
        backgroundColor: Color_Celestial_Blue,
        color: 'black',
        borderRadius:5
    };
    
    const EnfoqueInfo = [
        {"title":"Aprender","source": IconGraduation},
        {"title":"Experimentar","source": IconPlan},
        {"title":"Algo Mas","source": IconGraduation},
    ];
    
    return (
        <div style={{backgroundColor:Color_Anti_Flash_White}}>
            <Container maxWidth={false} 
                sx={{
                    display:'flex', 
                    justifyContent:'center', 
                    backgroundColor: Color_Eeri_Black,
                    paddingTop: "8vh",
                    paddingBottom: "8vh",
                }} 
            >
                <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs ={7}>
                        <Separador altura="5vh"/>
                        <Typography variant='h3' align='justify' 
                            sx={{
                                width: "100%", 
                                alignItems: "center", 
                                paddingLeft: "10vh",
                                color: Color_White, 
                                fontWeight:'bold'
                        }}
                        >
                            Esto es un slogan representativo de <span style={{color:'blue'}}>Cyber Academy</span>
                        </Typography>
                        <Separador altura="15vh"/>
                        <Grid container spacing={1} sx={{
                            display: 'flex',
                            justifyContent: 'center', // Centra horizontalmente
                            alignItems: 'center',     // Centra verticalmente
                            marginLeft: "5vh"
                        }}>
                            {EnfoqueInfo.map((data) => (
                                <Grid item  xs={3} sx={enfoqueStyles} wrap="nowrap">
                                    <Typography variant='h6' align='center' 
                                    sx={{
                                        width: "100%",
                                        paddingLeft: "5vh",
                                        paddingRight: "5vh",
                                        display: "flex",
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        color: Color_White, 
                                        fontWeight:'bold'
                                    }}>
                                        {data.title}
                                    </Typography>
                                    <Separador altura="2vh"/>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        paddingLeft: "8vh",
                                    }}
                                    >
                                        <img src={data.source} width={"100%"}/>
                                    </div>
                                    <Separador altura="2vh"/>
                                </Grid>
                            ))}
                        </Grid>
                        <Separador altura="12vh"/>
                    </Grid>
                </Grid>
            </Container>
            <Separador altura="8vh"/>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#F1F1F1'}} >
                <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs ={6}>
                        <Typography variant='h3' align='center' sx={{color: 'black', fontWeight:'bold'}}>
                            ¿Qué es <span style={{color:'blue'}}>Cyber Academy</span>?
                        </Typography>
                        <Separador altura="5vh"/>
                        <Paper 
                            elevation={0}
                            sx={{
                            padding:"2vh",
                            margin:"5vh",
                            backgroundColor: "transparent",
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
                        <Separador altura="5vh"/>
                        <Paper 
                            elevation={0}
                            sx={{
                                padding:"2vh",
                                margin:"10vh",
                                backgroundColor: "transparent",
                                color:"black",
                                borderRadius:5
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-evenly"  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                                <Grid item xs ={4}>
                                    <Paper 
                                        elevation={1}
                                        sx={{
                                        padding:"2vh",
                                        margin:"2vh",
                                        backgroundColor: "transparent",
                                        color:"black",
                                        borderRadius:5
                                        }}
                                    >
                                        <Typography variant="body3" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs ={4}>
                                    <Paper 
                                        elevation={1}
                                        sx={{
                                        padding:"2vh",
                                        margin:"2vh",
                                        backgroundColor: "transparent",
                                        color:"black",
                                        borderRadius:5
                                        }}
                                    >
                                        <Typography variant="body3" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid> 
            </Container>
            <Separador altura="2vh"/>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#F1F1F1'}} >
                <Paper 
                    elevation={0}
                    sx={{
                        padding:"2vh",
                        margin:"5vh",
                        backgroundColor: "transparent",
                        color:"black",
                        borderRadius:5
                    }}
                >
                    <Typography variant='h3' align='center' sx={{color: 'black', fontWeight:'bold'}}>
                        ¿Cómo Surge <span style={{color:'blue'}}>Cyber Academy</span>?
                    </Typography>
                    <Separador altura="2vh"/>
                    <Typography variant="h8" align='justify' sx={{fontSize:'small', fontWeight:'bold'}} padding="1%">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sem nisl. Nam sollicitudin dictum molestie. Morbi blandit nisl in enim sollicitudin elementum. Duis aliquam lacus ac lacus placerat maximus. Integer scelerisque sed urna eu egestas. Donec et nisl vel turpis ornare malesuada. Etiam aliquet bibendum lectus, ut euismod massa dapibus sit amet. Fusce id ullamcorper est, a pretium dui. Pellentesque ornare ornare libero, sed convallis magna consectetur ut. Donec tempus tellus metus, id placerat sem tincidunt nec. Donec luctus urna ante, vitae lobortis est blandit quis. Donec maximus sem at nisl semper, non tempus dolor pretium. Nulla vel ligula ligula. Fusce sit amet volutpat felis, non condimentum sapien. Maecenas et leo et odio vulputate volutpat. 
                    </Typography>
                </Paper>
            </Container>
            <Separador altura="50px"/>
            <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"100%", backgroundColor: '#17191E'}} >
                <Paper 
                    elevation={0}
                    sx={{
                        padding:"2vh",
                        margin:"5vh",
                        backgroundColor: "transparent",
                        color:"white",
                        borderRadius:5
                    }}
                >
                    <Separador altura="8vh"/>
                    <Typography variant='h3' align='center' sx={{fontWeight:'bold'}}>
                        ¿Cómo Surge <span style={{color:'blue'}}>Cyber Academy</span>?
                    </Typography>
                    <Separador altura="8vh"/>
                    <Card sx={{flexGrow: 1}}>
                        <CardMedia
                            component="iframe"
                            backgroundColor="transparent"
                            width="850vh"
                            height="350vh"
                            image="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Video Presentacion"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </Card>
                    <Separador altura="10vh"/>
                </Paper>
            </Container>
        </div>
    );
}

export default HomePage;