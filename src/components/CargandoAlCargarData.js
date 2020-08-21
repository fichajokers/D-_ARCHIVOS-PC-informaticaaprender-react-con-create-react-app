import React,{Component} from 'react'
import Spinner from 'react-bootstrap/Spinner';

import Loading from './Loading'

class CargandoAlCargarData extends Component{
    constructor(props){
        super(props);
        this.state = {
            hidden: false,
            usuario: []
        }
    }
    
    abortController = new AbortController();

    componentDidMount(){
        this.setState({hidden: false})
        ///Consultar datos guardados
        fetch('http://jsonplaceholder.typicode.com/users/2', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            signal: this.abortController.signal
        })
        .then(res => res.json())
        .then( (resultado) => {
            console.log("Respuesta GET usuarios",resultado);
            this.setState({
                hidden: true,
                usuario: resultado
            })
        })
        .catch(console.log);
    }

    componentWillUnmount(){
        this.abortController.abort();
    }

    render(){
        if( !this.state.hidden ){
            return(
                <Loading textoCargando="Loading..."/>
            );
        }else{
            return(
                <div className="Resultado-usuario">
                    <p>{this.state.usuario.name}</p>
                    <p>{this.state.usuario.email}</p>
                    <p>{this.state.usuario.address.city}</p>
                </div>
            )
        }
        
    }
}

export default CargandoAlCargarData 