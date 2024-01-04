// Importamos react y useState
import React, {useState} from 'react';
import Sum from './suma';

// Componente pregunta usuario
function AskUser() {
    const [showSum, setShowSum] = useState(false);
  
    const handleYesClick = () => {
      setShowSum(true);
    };
  
    const handleNoClick = () => {
      window.location.href = 'https://www.fi.uba.ar';
    };
  
    let content = null;
  
    if (showSum) {
      content = <Sum />;
    } else {
      content = <a href='https://www.fi.uba.ar'>Página de la FIUBA</a>;
    }
  
    return (
      <div>
        <p>¿Desea sumar dos numeros?</p>
        <button onClick={handleYesClick}>Sí</button>
        <button onClick={handleNoClick}>No</button>
        {content}
      </div>
    );
  }

  export default AskUser;
  