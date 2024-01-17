import { useEffect, useState } from 'react';
import './App.css';

// Importar el componente que se quiere mostrar
import Testimonio from './components/Testimonio/Testimonio.js';
import { getTestimonios } from './Api/Testimonio.api.js';

function App() {
  // Estado para los testimonios
  const [ testimonios, setTestimonios ] = useState([]);
 
  // Llamar los datos al iniciar el componente
  useEffect(()=>{
    (async () => {
      await obtenerDatos();
    })();
  },[/** Se actualiza por cada cambio en las variables */]);

  const obtenerDatos = async () => {
    // Obtener los datos de la api (Testimonios)
    const resp = await getTestimonios();
    if ( resp === null ) return; // Respuesta posbible null (si es null cancelamos)
    setTestimonios( resp );
  };

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {
          testimonios.map( (testimonio, index) => (
            <Testimonio 
              nombre={ testimonio.nombre }
              pais={ testimonio.pais }
              imagen={ testimonio.imagen }
              alt={ testimonio.alt }
              cargo={ testimonio.cargo }
              empresa={ testimonio.empresa }
              testimonio={ testimonio.testimonio }
              key={ index }
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;