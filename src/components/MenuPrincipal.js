import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

class MenuPrincipal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            opcionSeleccionada: ''
        };
    
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({opcionSeleccionada: e.target.id});
        this.props.onMenuPrincipal(e.target.id); 
    }

    render(){
        return(
            <React.Fragment>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link style={styleLink} to="CargarDatosApi">Tabla Api</Link>
                        <Link style={styleLink} to="Formulario">Formulario</Link>
                        <Link style={styleLink} to="CargandoAlCargarData">Load Data</Link>
                        <Link style={styleLink} to="Style">Style</Link>
                        <Link style={styleLink} to="CrudData">Crud Data</Link>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}

const styleLink = {
    textDecoration: "none",
    marginLeft: "10px",
    marginRight: "10px",
    color: "white"
}
export default MenuPrincipal