import React,{Component} from 'react'

class Animal extends Component{

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
                <p style={this.animalVivoMuerto()}>Vivo: {animal.vivo.toString()}</p>
            </div>
        )
    }
}

//agregar estilos en el mismo archivo mediante objeto
const claseAnimalCss = {
    background : 'gray'
}

export default Animal