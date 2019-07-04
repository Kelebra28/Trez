import React from 'react';
import Contenido from '../../components/Contenido/contenido';
const SociasLert = props => {
    return (
        <div className="page">
            <section className="areaTextContainer">
                {/* <div data={props.data} nombreArea={props.dataprops.data.socias.Itziar.title} /> */}
                <Contenido data={props.data}
                    parrafo={props.data.socias.Luz.title}
                    parrafoDos={props.data.socias.Luz.p1}
                    parrafoTres={props.data.socias.Luz.p2}
                    parrafoCuatro={props.data.socias.Luz.p3}
                    parrafoCinco={props.data.socias.Luz.p4}
                    parrafoSeis={props.data.socias.Luz.p5}
                    parrafoSiete={props.data.socias.Luz.p6}
                    parrafoOcho={props.data.socias.Luz.p7}
                    parrafoNueve={props.data.socias.Luz.p8}

                />
            </section>
        </div>
    );

}

export default SociasLert;