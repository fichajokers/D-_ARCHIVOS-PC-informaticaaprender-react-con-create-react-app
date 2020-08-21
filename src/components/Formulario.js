import React,{Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form"
import Loading from "./Loading"

function SampleForm() {
    const { register,errors, handleSubmit } = useForm();
    
    const variables = {
        loading: false
    };

    const onSubmit = data => {
        console.log(data);
        console.log("Aca se tiene que llamar API");
        
        console.log( variables.loading );
        
        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.nombre,
                job: data.trabajo
            })
        })
        .then(res => res.json())
        .then( (data) => {
            console.log("Respuesta api:",data);
            ///Consultar datos guardados
            fetch('http://jsonplaceholder.typicode.com/users/2', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then( (resultado) => {
                console.log("Respuesta GET usuarios",resultado);
            })
            .catch(console.log);
            })

        .catch(console.log);
      
    };
  
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {<Loading/>}
            <Form.Group controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Nombre" 
                name="nombre" 
                ref={register({ required: true, maxLength: 10 })}/>
                {/*<Form.Text className="text-muted">
                Ingrese nombre completo
                </Form.Text>*/}
                {errors.nombre?.type === "required" && "Nombre requerido"}
                {errors.nombre?.type === "maxLength" && "Ha superado el maximo de 10 caracteres"}
            </Form.Group>

            <Form.Group controlId="formBasicApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" name="apellido" placeholder="Apellido" ref={register}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Trabajo</Form.Label>
                <Form.Control type="text" name="trabajo" placeholder="Trabajo" ref={register}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Enviar formulario
            </Button>
        </Form>
    );
}

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            contrasena: ''
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = e => {
        console.log('el valor del formulario es:',this.state);
        e.preventDefault();
    }

    render(){
        return(
            <div className="formulario">
                <h1>Aprendiendo Formularios</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail2">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Nombre"
                        name="nombre" 
                        value={this.state.nombre} 
                        onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                        Ingrese nombre completo
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                        type="password" 
                        name="contrasena"
                        value={this.state.contrasena}
                        placeholder="Contraseña"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="submit">
                        Enviar formulario
                    </Button>
                </Form>
                
                <hr/>
                
                <h1>Aprendiendo Formularios con React Hook Form</h1>
                <SampleForm/>
            </div>
        );
    }
}

export default Formulario