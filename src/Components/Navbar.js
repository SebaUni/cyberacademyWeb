//import React from 'react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import "./NavbarStyle.css";

//Barra de Navegacion de la Pagina
const NavigationBar= () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <div>Logo Pre-Empresa</div>
                </li>
                <li>
                    <div>Cyber Academy</div>
                </li>
                <li className="navMenu">
                    <Button variant="contained" component={Link} to='/Homepage'>
                        Inicio
                    </Button>
                    <Button variant="contained" component={Link} to='/Product'>
                        ¿Que es Cyber Academy?
                    </Button>
                    <Button variant="contained" component={Link} to='/Team'>
                        ¿Quiénes Somos?
                    </Button>
                    <Button variant="contained" component={Link} to='/Contacts'>
                        Contactenos
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;