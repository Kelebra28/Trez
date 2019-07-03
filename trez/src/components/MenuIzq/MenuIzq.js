import React from 'react';
import MenuPq from '../MenuPeque/MenuPeque'
import './Style.css'

const MenuIzq = () => {
    return(
        
        <section className="seccionIzq">
            <article className="menu">
                <MenuPq 
                    linkMenuPq=""
                    contenidoMenuPq="Antidumping"
                />
                <MenuPq
                    linkMenuPq="/"
                    contenidoMenuPq="Anti-Subvenciones"
                />
                <MenuPq
                    linkMenuPq="/"
                    contenidoMenuPq="Salvaguardias"
                />
                <MenuPq
                    linkMenuPq="/"
                    contenidoMenuPq="Exámenes de vigencia"
                />
                <MenuPq
                    linkMenuPq="/"
                    contenidoMenuPq="Revisiones anuales"
                />
                <MenuPq
                    linkMenuPq="/"
                    contenidoMenuPq="Reviciones anuales"
                />
                <MenuPq
                    linkMenuPq="/"
                    contenidoMenuPq="Anti-elusión"
                />
                <MenuPq
                    linkMenuPq="/"
                    contenidoMenuPq="Cobertura de producto"
                />               
            </article>
        </section>

    )
}

export default MenuIzq