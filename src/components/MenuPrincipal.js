import React, {Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../assets/images/logo.svg';

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
                        <Nav.Link id="Inicio"        onClick={this.handleClick.bind(this)}>Inicio</Nav.Link>
                        <Nav.Link id="Tabla Api"     onClick={this.handleClick.bind(this)}>Tabla Api</Nav.Link>
                        <Nav.Link id="Formulario"    onClick={this.handleClick.bind(this)}>Formulario</Nav.Link>
                        <Nav.Link id="Cargando"      onClick={this.handleClick.bind(this)}>Cargando al cargar Data</Nav.Link>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MenuPrincipal