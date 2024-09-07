//import React from 'react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { LogoEmpresa, LogoApp, LogoFeria, LogoUSM } from './../Assets/Images';
import Button from '@mui/material/Button';
import "./NavbarStyle.css";

const Logos = require("./../Assets/logos")

//Barra de Navegacion de la Pagina
const NavigationBar= () => {
    return (
        <nav className="navbar">
            <div className="Image">
                <Logos.LogoEmpresa/>
            </div>
            <div className="Title">
                <h1>Cyber Academy</h1>
            </div>
            <div className="Buttons">
                <ul>
                    <li>
                        <Button className="NavButton" variant="text" component={Link} to='/Homepage'>
                            Inicio
                        </Button>
                    </li>
                    <li>
                        <Button className="NavButton" variant="text" component={Link} to='/About'>
                            Acerca de Chibitech
                        </Button>
                    </li>
                    <li>
                        <Button className="NavButton" variant="text" component={Link} to='/Team'>
                            ¿Quiénes Somos?
                        </Button>
                    </li>
                    <li>
                        <Button className="NavButton" variant="text" component={Link} to='/Contacts'>
                            Contactenos
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavigationBar;