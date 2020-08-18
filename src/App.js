import React from 'react';
//import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Main from './components/Main';

//<CargarDatosApi />
/*function holaMundo(nombre,edad){
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre} y estoy aprendiendo react</h2>
      <h3>Tengo {edad} años.</h3>
    </div>
  );
  
  return presentacion
}*/

function App() {
  //var nombre = 'Matías';
  return (
    <div className="App">
      <header className="App-header">
        <Main></Main>
      </header>
    </div>
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <Main></Main>
        <section className="componente-navbar">
          <MenuPrincipal></MenuPrincipal>
        </section>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a react
        </p>
        {holaMundo(nombre,26)}
        <section className="componentes">
          <MiComponente />
          <hr/>
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
  );*/
}

export default App;
