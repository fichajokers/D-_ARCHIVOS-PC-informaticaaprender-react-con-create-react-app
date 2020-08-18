import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importar componentes
import MiComponente from './components/MiComponente';
import CargarDatosApi from './components/CargarDatosApi';

function holaMundo(nombre,edad){
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre} y estoy aprendiendo react</h2>
      <h3>Tengo {edad} años.</h3>
    </div>
  );
  
  return presentacion
}

function App() {
  var nombre = 'Matías';
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a react
        </p>
        {holaMundo(nombre,26)}

        <section className="componentes">
          <MiComponente />
          <hr/>
          <CargarDatosApi />
        </section>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
