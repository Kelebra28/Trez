import React from 'react';
import './Style.css'



class MenuPq extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            Style = {backgroundColor: "#000"}
        }
    this.chageColor = this.chageColor.bind(this);
    }

    chageColor(backgroundColor) {
        this.setState({
            backgroundColor
        });
    }
    onMouseEnter() {
        this.setState((console.log('funciona')))
    }
    

        
    render(){
        return(
            <a  
                className="contenedorPq item1" 
                href={this.props.linkMenuPq}
                onMouseEnter={ () => this.chageColor() } 
                onMouseEnter={ () => this.onMouseEnter() }>{this.props.contenidoMenuPq}</a>
        )
    }


}

export default MenuPq