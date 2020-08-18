import React, {Component} from 'react';

class MiComponente extends Component{
    //se puede retornar un <div className="mi-componente"> o un <React.Fragment>
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','Queso','Salame'],
            calorias: 400
        };

        return(
            <div className="mi-componente">
                <h4>{'Receta: ' + receta.nombre}</h4>
                <h4>{'Calorías : ' + receta.calorias}</h4>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente,index) => {
                            return(
                                <li key={index}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        );
        /*return (
            <div className="mi-componente">
                <h1>Hola, soy el componente llamado: MiComponente</h1>
                <h2>Estoy probando el componente</h2>
                <hr/>
            </div>
        );*/
    }

}

export default MiComponente;