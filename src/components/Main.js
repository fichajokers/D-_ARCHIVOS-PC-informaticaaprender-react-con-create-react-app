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

    render(){
        return(
            <main>
                <Router>
                    <Route exact path="/CargarDatosApi">
                        <CargarDatosApi/>
                    </Route>
                    <Route exact path="/Formulario">
                        <Formulario/>
                    </Route>
                    <Route exact path="/CargandoAlCargarData">
                        <CargandoAlCargarData/>
                    </Route>
                    <Route exact path="/Style">
                        <Style />
                    </Route>
                    <Route exact path="/CrudData">
                        <CrudData />
                    </Route>

                    <section className="componente-navbar">
                        <MenuPrincipal />
                    </section>

                </Router>
            </main>
        );
    }
}

export default Main