import React from 'react';
import HeaderAreas from '';
import Contenido from '../components/Contenido/contenido';

const Nosotros = props => {
    return (
        <div className="">
        
            <section className="">
                <HeaderAreas data={props.data} nombreArea={props.data.nosotros.title.area} />
                <Contenido data={props.data}
                    parrafo={props.data.nosotros.consulting.title}
                    parrafoDos={props.data.nosotros.consulting.p}
                />
            </section>
        </div>
    );

}

export default Nosotros;
