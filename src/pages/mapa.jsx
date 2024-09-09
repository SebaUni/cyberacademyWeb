import React from 'react'
import { useEffect,useState,useRef } from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import { Container, Drawer, Box, Stack, Typography, Button, Divider, Paper} from '@mui/material';
import BarChart from '../components/BarChart';
import { createRoot } from 'react-dom/client';
import Reciclaje from '../assets/reciclaje.png';
import { Wrapper } from '@googlemaps/react-wrapper';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';
import { Info } from '@mui/icons-material';

var head = document.getElementsByTagName('head')[0];

// Save the original method
var insertBefore = head.insertBefore;

// Replace it!
head.insertBefore = function (newElement, referenceElement) {

    if (newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
        return;
    }

    insertBefore.call(head, newElement, referenceElement);
};

const markersData = {
    A:{
        position:{lat:-33.49092, lng:-70.61872},
        state:"red",
        data:[100, 100, 100, 100, 100, 100]
    },
    B:{
        position:{lat:-33.49143, lng:-70.61830},
        state:"orange",
        data:[65, 59, 100, 81, 56, 55]
    },
    C:{
        position:{lat:-33.48984, lng:-70.61965},
        state:"green",
        data:[10, 20, 50, 20, 15, 40]
    }
}

const mapOptions = {
    mapId: "70ace97b3c490c53",
    center:{lat:-33.49100,lng:-70.61892},
    zoom: 19,
    disableDefaultUI: true
}

const bar = [10, 20, 50, 20, 15, 40];

export const Mapa = () => {
    const [ayuda,setAyuda] = useState(false);
    const toggleAyuda = ()=>{
        setAyuda(!ayuda);
    }
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <Typography variant='h3' align='center' sx={{fontWeight:'bold'}}>
                Mapa Interactivo
            </Typography>
            <Separador altura="20px" />
            <Container maxWidth={false} sx={{display:'flex'}}>
                <Wrapper
                    apiKey='AIzaSyBH7WLmJP1eX-pBZBILTvwXNBYayz2vjuA'
                    version='beta'
                    libraries={["marker"]}
                    >
                    <Map />
                </Wrapper>
            </Container>
            <Separador altura="20px" />
            <Footer/>
        </div>
    )
}

function Map(){
    const [map,setMap] = useState()
    const ref = useRef()
    useEffect(()=>{
        setMap(new window.google.maps.Map(ref.current,mapOptions))
    },[])
    return (
        <>
            <div ref={ref} id='map'/>
            {map && <Indicadores map={map}/>}
        </>
    )
}

function Leyenda(){
    const [ayuda,setAyuda] = useState(false);
    const toggleAyuda = ()=>{
        setAyuda(!ayuda);
    }
    return (
        <>
            <Paper className='leyenda' sx={{backgroundColor:"preguntas.main",color:"preguntas.contrastText"}}>
                <Box textAlign="center"><Typography variant='h5'>Indicadores</Typography></Box>
                <Stack spacing={2}>
                    <Stack direction='row' justifyContent='justify' alignItems="center" spacing={2}>
                        <div className={'marker red'}><div className='center'><img src={Reciclaje} alt="marker"/></div></div>
                        <Typography>Indica que todos los contenedores están llenos</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='justify' alignItems="center" spacing={2}>
                        <div className={'marker orange'}><div className='center'><img src={Reciclaje} alt="marker"/></div></div>
                        <Typography>Indica que uno o más contenedores están llenos</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='justify' alignItems="center" spacing={2}>
                        <div className={'marker green'}><div className='center'><img src={Reciclaje} alt="marker"/></div></div>
                        <Typography>Indica que ningún contenedor está lleno</Typography>
                    </Stack>
                </Stack>
                <Box sx={{width:"100%",marginTop:"10px",justifyContent:"right"}}>
                    <Button 
                        variant='contained' 
                        color='secondary'
                        startIcon={<Info />}
                        onClick={toggleAyuda}
                    >
                        Más información del mapa
                    </Button>
                </Box>
            </Paper>
            <Drawer
                    anchor='right'
                    open={ayuda}
                    onClose={toggleAyuda}
                    PaperProps={{sx:{backgroundColor:"preguntas.main",color:"preguntas.contrastText"}}}
                >
                <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width:"75vh",paddingTop:"2rem"}}>
                    <Stack spacing={2}>
                        <Typography variant='h4' sx={{fontWeight:'bold'}}>¿Como se utiliza el Mapa Interactivo?</Typography>
                        <Typography lineHeight={1.2} align='justify' variant='subtitle1'>Para desplazarte por el mapa, puedes utilizar el ratón, clickeando para desplazar en cierta dirección. Además, puedes usar la rueda de desplazamiento para acercar o alejar la vista del mapa.</Typography>
                        <Divider></Divider>
                        <Typography lineHeight={1.2} align='justify' variant='subtitle1'>Si quieres obtener más información de alguno de los marcadores en el mapa, puedes clickear en este, lo que te mostrará una vista detallada de los contenedores en función de la cantidad de residuos presentes.</Typography>
                        <Divider></Divider>
                        <Typography lineHeight={1.2} align='justify' variant='subtitle1'>Si quieres conocer detalladamente el porcentaje de residuos en cierto punto del mapa, debes posicionar el ratón sobre la barra correspondiente, lo que te indicará la cantidad de forma numérica.</Typography>
                        <Divider></Divider>
                        <Typography lineHeight={1.2} align='justify' variant='subtitle1'>Para salir de la vista de esta información, da click en la sección izquierda donde se encuentra el mapa.</Typography>
                    </Stack>
                </Container>
            </Drawer>
        </>
    )
}

function Indicadores({map}){
    const [openDrawer,setOpenDrawer] = useState(false)
    const [data,setData] = useState(markersData)
    const [databar,setDataBar] = useState(bar)
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }
    return (
        <>
            <Leyenda />
            {Object.entries(data).map(([key,marker])=>(
                <Marker
                    key={key}
                    map={map} 
                    position={marker.position}
                    onClick={() => {
                        setDataBar(marker.data)
                        toggleDrawer()
                    }}
                    >
                    <div className={`marker ${marker.state.toLowerCase()}`}>
                        <img src={Reciclaje} alt="marker"/>
                    </div>
                </Marker>
            ))}
            <Drawer
                    anchor='bottom'
                    open={openDrawer}
                    onClose={toggleDrawer}
                    PaperProps={{ square: false, sx:{borderTopLeftRadius:30,borderTopRightRadius:30}}}
                >
                    <Container maxWidth={false} sx={{display:'flex',justifyContent:'center',alignItems:"center"}} disableGutters>
                        <Box
                            justifyContent="center"
                            sx={{maxWidth:'80%',display:'flex', width:"75vh"}}
                        >
                            <BarChart data={databar}/>
                        </Box>
                    </Container>
            </Drawer>
        </>
    )
}

function Marker({ map, position, children, onClick}){
    const markerRef = useRef()
    const rootRef = useRef()
    useEffect(() => {
        if (!rootRef.current) {
            const container = document.createElement("div")
            rootRef.current = createRoot(container)
            
            markerRef.current = new google.maps.marker.AdvancedMarkerElement({
                position,
                content: container,
            })
        }
        return () => (markerRef.current.map = null)
    }, [])
    
    useEffect(()=>{
        rootRef.current.render(children)
        markerRef.current.position = position
        markerRef.current.map = map
        const listener = markerRef.current.addListener("click", onClick);
        return () => listener.remove()
    },[map,position,children])
}
export default Mapa