//import React from 'react';
//import { useState } from 'react';
import imgCompany from "./Images/Logos/LogoEmpresa.png";
import imgApp from "./Images/Logos/LogoAplicacion.png";
import imgFeria from "./Images/Logos/LogosFeriaSoftware.png";
import imgUSM from "./Images/Logos/LogoUniversidad.png";
import "./logosStyle.css";

//Define Seccion que contiene el Logo de la Empresa
const logoEmpresa= () => {
    return (
        <div className="Logo" title="Empresa">
            <img src={imgCompany} alt="Logo de la Empresa"/>
        </div>
    );
};

//Define Seccion que contiene el Logo de la Aplicacion
const logoApp= () => {
    return (
        <div className="Logo" title="Aplicacion">
            <img src={imgApp} alt="Logo de la Aplicacion"/>
        </div>
    );
};

//Define Seccion que contiene el Logo de la Feria de Software
const logoFeria= () => {
    return (
        <div className="Logo" title="Feria">
            <img src={imgFeria} alt="Logo de la Feria de Software"/>
        </div>
    );
};

//Define Seccion que contiene el Logo de la Universidad
const logoUSM= () => {
    return (
        <div className="Logo" title="Aplicacion">
            <img src={imgUSM} alt="Logo de la Universidad"/>
        </div>
    );
};

export default { logoEmpresa, logoApp, logoFeria, logoUSM };