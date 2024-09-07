//import React from 'react';
//import { useState } from 'react';
import "./aboutStyle.css";

const Logos = require("./../../../Assets/logos");

//Vista asociada a la Seccion del Producto
const AboutPage = () =>{
    return (
        <div className="Content">
            <div className="About">
                <div className="Title">
                    <h1>Acerca de Chibitech</h1>
                </div>
                <div className="Info">
                    <div className="Texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra, turpis id hendrerit pretium, odio est interdum erat, in cursus diam dui at libero. Pellentesque at interdum magna, sit amet dictum enim. Donec a purus id nunc facilisis venenatis ac sed erat. Cras sed tellus sit amet quam rutrum pellentesque. Sed facilisis dui nec pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tortor vestibulum, mattis sapien id, condimentum tellus. Nam dapibus at diam ultricies pellentesque. Vivamus sapien lacus, semper nec justo quis, elementum sollicitudin nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut elementum turpis vel auctor pulvinar. Phasellus viverra enim at libero placerat commodo.
                        <br/>
                        Vivamus lorem neque, ultrices vel fermentum cursus, imperdiet ut justo. Morbi sollicitudin viverra libero, ac volutpat sapien. Vivamus elit felis, congue sit amet diam non, congue volutpat libero. Etiam tristique odio quis ante finibus pellentesque. Proin posuere blandit justo in fermentum. Nullam sapien est, pellentesque tempor massa eu, sagittis egestas ante. Morbi varius nunc quis sagittis convallis. Etiam tristique pharetra rutrum. Ut in tempus elit. Nunc rutrum, purus in sagittis faucibus, nibh nisi aliquam lectus, et accumsan elit tellus ac leo. Pellentesque dictum euismod sodales. Morbi condimentum laoreet mattis. Donec volutpat, tellus vel congue cursus, diam lectus ullamcorper justo, fringilla dignissim sapien metus a mauris. Praesent suscipit tellus sit amet lacinia molestie. Aenean gravida vulputate ornare. Donec non sem urna. 
                    </div>
                    <div className="Image">
                        <Logos.LogoApp />
                    </div>
                </div>
                <div className="Problems">
                    <h1>Problemas a Resolver:</h1>
                    <div>
                        aaaa
                    </div>
                </div>
                <div className="Solutions">
                    <h1>Soluciones propuestas:</h1>
                    <div>
                        aaaa
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;