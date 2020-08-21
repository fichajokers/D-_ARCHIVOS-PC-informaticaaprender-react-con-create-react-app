import React, {Component} from 'react'

export default class FormularioMascotas extends Component{
    state = {
        nombre  : '',
        edad    : '',
        vivo    : false,
        id      : null
    }

    onChange = e => {
        //se hace esta condicion para evaluar el checkbox, si no guarda los values normales.
        const value = e.target.name === "vivo" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name] : value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        //llamar a la funcion que viene desde AddData mediante props.
        this.props.addData( this.state );
    }

    render(){
        return(
            <form id="FormularioMascotas-componenet" onSubmit={this.onSubmit}>
                <label>Nombre mascota</label>
                <br />
                <input 
                    name = "nombre"
                    value = {this.state.nombre}
                    onChange = {this.onChange}
                />
                <br />
                <label>Edad mascota</label>
                <br />
                <input 
                    name = "edad"
                    type = "number"
                    value = {this.state.edad}
                    onChange = {this.onChange}
                />
                <br />
                <label>Estado mascota</label>
                <br />
                <input 
                    name = "vivo"
                    type = "checkbox"
                    checked = {this.state.vivo}
                    onChange = {this.onChange}
                />
                <br />
                <button type="submit"> Agregar mascota </button>
            </form>
        )
    }
}