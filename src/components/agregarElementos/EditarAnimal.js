import React,{Component} from 'react'

export default class EditarAnimal extends Component{

    animalVivoMuerto(){
        return{
            color           : this.props.animal.vivo ? 'green' : 'red',
            textDecoration  : this.props.animal.vivo ? 'none' : 'line-through' 
        }
    }

    render(){
        const {animal} = this.props;
        return(
            <div style={claseAnimalCss}>
                Nombre: {animal.nombre} - 
                Edad: {animal.edad} - 
                <span style={this.animalVivoMuerto()}> Vivo: {animal.vivo.toString()}</span>
                <input type="checkbox" onChange={this.props.updateData.bind(this,animal.id)}/>
                <button onClick={this.props.deleteData.bind(this,animal.id)}> Eliminar</button>
            </div>
        )
    }
}

//agregar estilos en el mismo archivo mediante objeto
const claseAnimalCss = {
    background : 'gray'
}