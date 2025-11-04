import './App.css'
import { letters } from './helpers/letters'

function App() {


  return (
    <div className='App'>
      
      {/* Imagenes  */}
      <h3>Imagen del Juego</h3>


      {/* Palabra  */}
      <h3>_ _ _ _ _ _ _ _</h3>


      {/* Intentos  */}
      <h3>Intento: 0</h3>


      {/* letras  */}
      {
        letters.map( (letter) =>  (
          <button key={letter}>{letter}</button>
        ))
      }



    </div>
  )
}

export default App
