import React, {Component} from 'react'
import EditarAnimal from './EditarAnimal'

export default class ListarMascotas extends Component{

    render(){
        return(
            <div className="ListarMascotas-component">
                {this.props.animales.map( (animal) => 
                    <EditarAnimal 
                        animal={animal}
                        key={animal.id}
                        deleteData={this.props.deleteData}
                        updateData={this.props.updateData}
                    /> )}
            </div>
        )
    }
}