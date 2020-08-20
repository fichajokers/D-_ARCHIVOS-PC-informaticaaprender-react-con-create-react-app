import React,{Component} from 'react'
import Spinner from 'react-bootstrap/Spinner';

class CargandoAlCargarData extends Component{
    constructor(props){
        super(props);
        this.state = {
            hidden: false
        }
    }

    render(){
        return(
            <Spinner animation="grow" variant="info">
                <span className="sr-only">Cargando...</span>
            </Spinner>
        );
    }
}

export default CargandoAlCargarData 