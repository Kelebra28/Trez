import React from 'react';
import TextPrin from '../TextPrin/TextPrin';
import SupTi from '../SupTi/SupTi'
import Title from '../Title/Title'

import './Style.css'


const ContenedorCen = () =>{

    return(

        <section className="seccionCentro">
            <article>
                <Title
                    title="REMEDIOS COMERCIALES"
                />
                <SupTi
                    subtitle="Investigaciones Antidumping"
                />
                <TextPrin
                    textPrin="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ratione praesentium ea aliquam dolorum quod sit alias totam quia earum sapiente, voluptate molestiae perspiciatis neque repellendus quibusdam consectetur! Voluptas, nulla!
                    "
                    
                />
                <br/>
                <TextPrin
                    textPrin="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ratione praesentium ea aliquam dolorum quod sit alias totam quia earum sapiente, voluptate molestiae perspiciatis neque repellendus quibusdam consectetur! Voluptas, nulla!
                    "
                    
                />
                <br/>
                <TextPrin
                    textPrin="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ratione praesentium ea aliquam dolorum quod sit alias totam quia earum sapiente, voluptate molestiae perspiciatis neque repellendus quibusdam consectetur! Voluptas, nulla!
                    "
                    
                />

            </article>
        </section>
        
    )

}

export default ContenedorCen