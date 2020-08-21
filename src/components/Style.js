import React, {Component} from 'react'

import animales from '../samples/ejemplosStyle.json'
import Animal from './Animal'


class Style extends Component{
    state = {
        animales : animales
    }

    render(){
        return(
            <div className="style-component">

                <h3>Aprendiendo a agregar estilos y condicionales React</h3>
                {this.state.animales.map( (animal) => <Animal animal={animal} key={animal.id}/> )}
            </div>
        )
    }
}

export default Style
