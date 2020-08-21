import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//importar componentes
import MiComponente from './MiComponente';
import CargarDatosApi from './CargarDatosApi';
import MenuPrincipal from './MenuPrincipal';
import Question from './Questions'
import Formulario from './Formulario'
import CargandoAlCargarData from './CargandoAlCargarData'
import Style from './Style'
import CrudData from './agregarElementos/CrudData';

class Main extends Component{
    state = {
        questions: [
           { id: 'fdsd', title: 'Why is the sky blue?' },
           { id: 'adsf', title: 'Who invented pizza?' },
           { id: 'afdsf', title: 'Is green tea overrated?' },
        ],
        displayQuestions: false,
        opcionSeleccionada: '',
        language: ''
    }
    
    displayQuestion = () => {
        this.setState({
            displayQuestions: !this.state.displayQuestions
        })
    }

    opcionSeleccionada = (opcionSeleccionada) => {
        console.log("soy el parent y recibi.. " + opcionSeleccionada)
        this.setState({
            opcionSeleccionada: opcionSeleccionada
        });
    }

    render(){
        let questions = null;
        let opcionSeleccionada = '';
        if ( this.state.displayQuestions ) {
            questions = (
                <React.Fragment>
                    {
                        this.state.questions.map((question, index) => {
                            return <Question key={question.id}
                            title={question.title} />
                        })
                    }
                </React.Fragment>
            )
        }

        if ( this.state.opcionSeleccionada === 'Tabla Api' ) {
            opcionSeleccionada = (
                <div>
                    <CargarDatosApi></CargarDatosApi>
                </div>
            )
        }else if( this.state.opcionSeleccionada === 'Inicio' ){
            opcionSeleccionada = (
                <React.Fragment>
                    <section className="componente-prueba">
                        <button className="btn" onClick={this.displayQuestion}>View Unanswered Questions</button>
                        {questions}
                    </section>
                    <p>
                    Bienvenido a react
                    </p>

                    <section className="componentes">
                        <MiComponente />
                        <hr/>
                    </section>
                </React.Fragment>
            )

        }else if( this.state.opcionSeleccionada === 'Formulario' ){
            opcionSeleccionada = (
                <Formulario></Formulario>
            )
        }else if( this.state.opcionSeleccionada === 'Cargando' ){
            opcionSeleccionada = (
                <CargandoAlCargarData></CargandoAlCargarData>
            )
        }else if( this.state.opcionSeleccionada === 'Style' ){
            opcionSeleccionada = (
                <Style/>
            )
        }else if( this.state.opcionSeleccionada === 'CrudData' ){
            opcionSeleccionada = (
                <CrudData/>
            )
        }

        return(
            <main>
                <section className="componente-navbar">
                <MenuPrincipal onMenuPrincipal={this.opcionSeleccionada}></MenuPrincipal>
                </section>
                
                <section className="componente-prueba">
                    {opcionSeleccionada}
                </section>
            </main>
        );
    }
}

export default Main