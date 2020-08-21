import React, {Component} from 'react'
import FormularioMascotas from './FormularioMascotas'
import ListarMascotas from './ListarMascotas'

import animales from '../../samples/ejemplosStyle.json'

export default class CrudData extends Component{

    state = {
        animales : animales
    }

    addData = (animal) => {
        console.log("funcion addData");
        //agregar elemento de animales que viene desde formularioMascotas
        const newAnimal = {
            nombre  : animal.nombre,
            edad    : animal.edad,
            vivo    : animal.vivo,
            id      : this.state.animales.length + Math.floor(Math.random() * (99 - 1 + 1)) + 1
        }

        console.log("animal",newAnimal);
        this.setState({
            animales: [...this.state.animales,newAnimal]
        })
    }

    deleteData = (id) => {
        const newAnimal = this.state.animales.filter(animal => animal.id !== id)
        this.setState({ animales : newAnimal })
    }

    updateData = (id) => {
        const newAnimal = this.state.animales.map(animal => {
            if( animal.id === id ){
                animal.vivo = !animal.vivo
            }
            return animal
        })
        this.setState({animales:newAnimal})
    }

    render(){
        return(
            <div id="AddData-component">
                <p>AddData</p>
                <ListarMascotas animales={this.state.animales} deleteData={this.deleteData} updateData={this.updateData}/>
                <FormularioMascotas  addData={this.addData}/>
            </div>
        )
    }
}