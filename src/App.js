import './App.css';
import { useState } from 'react';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla./pantalla';
import BotonClear from './componentes/BotonClear';
import logoCrispdevps from './imagenes/logo crispdevps.png';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const cacularResultado = () => {
    if (input){
      setInput(evaluate(input));
    }else {
      alert('Por favor ingrese los valores para realizar los calculos');
    };
    
  };

  return (
    <div className="App">
     <div className='logo-contenedor'>
      <img 
      src={logoCrispdevps}
      className='logo-crispdevps'
      alt='logo Crispdevps' />
     </div>
     <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={cacularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>
          Clear
        </BotonClear>
      </div>
     </div>
    </div>
  );
}

export default App;
