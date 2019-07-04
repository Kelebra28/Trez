import React from 'react';
import Contenido from '../../components/Contenido/contenido';
const AntiUsa = props => {
    return (
        <div className="page">
            <section className="areaTextContainer">
                <div data={props.data} nombreArea={props.data.areas.practica.area.aduanas.nombre} />
                <Contenido data={props.data}
                    parrafo={props.data.areas.practica.area.aduanas.uno}
                    parrafoDos={props.data.areas.practica.area.aduanas.dos}
                    parrafoTres={props.data.areas.practica.area.aduanas.tres}
                    parrafoCuatro={props.data.areas.practica.area.aduanas.cuatro}
                    parrafoCinco={props.data.areas.practica.area.aduanas.cinco}
                />
            </section>
        </div>
    );

}

export default AntiUsa;