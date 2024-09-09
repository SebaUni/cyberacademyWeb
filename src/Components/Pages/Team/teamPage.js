//import React from 'react';
//import { useState } from 'react';
import "./teamStyle.css";

const Logos = require("./../../../Assets/logos");

//Vista asociada a la Seccion del Equipo
const TeamPage = () =>{
    return (
        <div className="Content">
            <div className="Team">
                <h1>Equipo de trabajo</h1>
                <div className="Members">
                    <div className="Member">
                        <div className="Photo">
                            <Logos.LogoApp />
                        </div>
                        <div className="Info">
                            <b>Nombre:</b> Nombre_Integrante_1
                        </div>
                        <div className="Info">
                            <b>Rol:</b> Rol_Integrante_1
                        </div>
                    </div>
                    <div className="Member">
                        <div className="Photo">
                            <Logos.LogoApp />
                        </div>
                        <div className="Info">
                            <b>Nombre:</b> Nombre_Integrante_2
                        </div>
                        <div className="Info">
                            <b>Rol:</b> Rol_Integrante_2
                        </div>
                    </div>
                    <div className="Member">
                        <div className="Photo">
                            <Logos.LogoApp />
                        </div>
                        <div className="Info">
                            <b>Nombre:</b> Nombre_Integrante_3
                        </div>
                        <div className="Info">
                            <b>Rol:</b> Rol_Integrante_3
                        </div>
                    </div>
                    <div className="Member">
                        <div className="Photo">
                            <Logos.LogoApp />
                        </div>
                        <div className="Info">
                            <b>Nombre:</b> Nombre_Integrante_4
                        </div>
                        <div className="Info">
                            <b>Rol:</b> Rol_Integrante_4
                        </div>
                    </div>
                    <div className="Member">
                        <div className="Photo">
                            <Logos.LogoApp />
                        </div>
                        <div className="Info">
                            <b>Nombre:</b> Nombre_Integrante_5
                        </div>
                        <div className="Info">
                            <b>Rol:</b> Rol_Integrante_5
                        </div>
                    </div>
                    <div className="Member">
                        <div className="Photo">
                            <Logos.LogoApp />
                        </div>
                        <div className="Info">
                            <b>Nombre:</b> Nombre_Integrante_6
                        </div>
                        <div className="Info">
                            <b>Rol:</b> Rol_Integrante_6
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;