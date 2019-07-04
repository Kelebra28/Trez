import React from 'react';
import Contenido from '../../components/Contenido/contenido';
const Servicios = props => {
    return (
        <div className="page">
        <section className="areaTextContainer">
            {/* <div data={props.data} nombreArea={props.data.socias.Luz.title} /> */}
            <Contenido data={props.data}
                parrafo={props.data.servicos.title}
                parrafoDos={props.data.servicos.p1}
                parrafoTres={props.data.servicos.p2}
                parrafoCuatro={props.data.servicos.p3}
                parrafoCinco={props.data.servicos.p4}
                parrafoSeis={props.data.servicos.p5}
                // parrafoSiete={props.data.socias.Itziar.p1}
                // parrafoOcho={props.data.socias.Itziar.p1}
                // parrafoNueve={props.data.socias.Itziar.p1}
                />
        </section>
    </div>
    );

}

export default Servicios;