// Importamos react y useState
import React, {useState} from 'react';

// Componente sumador de numeros
function Sum() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState('');
  
    const sumarNumeros = () => {
      const suma = Number(num1) + Number(num2);
      setResultado(suma);
    };
  
    return (
      <div>
        <input 
          type='number'
          placeholder='Ingrese el primer número'
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input 
          type='number'
          placeholder='Ingrese el segundo número'
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={sumarNumeros}>Sumar</button>
        <p>El resultado es: {resultado}</p>
      </div>
    );
  }

  export default Sum;