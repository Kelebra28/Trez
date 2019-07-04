import React from 'react';
import Contenido from '../../components/Contenido/contenido';
const Industrias = props => {
    return (
        <div className="page">
        <section className="areaTextContainer">
            {/* <div data={props.data} nombreArea={props.data.socias.Luz.title} /> */}
            <Contenido data={props.data}
                parrafo={props.data.industrias.title}
                parrafoDos={props.data.industrias.menu.p1}
                parrafoTres={props.data.industrias.menu.p2}
                parrafoCuatro={props.data.industrias.menu.p3}
                // parrafoCinco={props.data.industrias.p4}
                // parrafoSeis={props.data.industrias.p5}
                // parrafoSiete={props.data.socias.Itziar.p1}
                // parrafoOcho={props.data.socias.Itziar.p1}
                // parrafoNueve={props.data.socias.Itziar.p1}
                />
        </section>
    </div>
    );

}

export default Industrias;