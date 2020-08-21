import React,{Component} from 'react'
import Spinner from 'react-bootstrap/Spinner';

class Loading extends Component{
    constructor(props){
        super(props);
        this.state = {
            hidden: false
        }
    }

    render(){
        return(
            <div className="loading-component">
                <Spinner animation="grow" variant="info">
                </Spinner>
                <p>{this.props.textoCargando}</p>
            </div>
        );
    }
}

export default Loading 