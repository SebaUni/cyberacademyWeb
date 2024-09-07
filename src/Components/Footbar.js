//import React from 'react';
//import { useState } from 'react';
//import { Link } from 'react-router-dom';
//import Button from '@mui/material/Button';
import "./FootbarStyle.css";
const Logos = require("./../Assets/logos")

//Barra de Navegacion de la Pagina
const FootnoteBar=() => (
    <div className="footnote">
        <div className="Image">
            <Logos.LogoEmpresa/>
        </div>
        <div className="Creator">
            <h3>Creado por<br/>Chibitech</h3>
        </div>
        <div className="RRSS">
            Redes Sociales:
        </div>
    </div>
);

export default FootnoteBar;