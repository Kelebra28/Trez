import React from 'react';
import Foto from '../../assents/foto2.png';
import './Style.css';

const ImgOs = () => {

    return(
        
        <section className="seccionIzq">
            <article className="contenedorFotoIzq">
                <img src={Foto} alt="Foto planta"/>
            </article>
        </section>

    )
}

export default ImgOs;