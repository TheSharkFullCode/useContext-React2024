import { useState } from 'react'
import './App.css'
import Pagina1 from './components/usecontext-contexto/Pagina1'
import Pagina2 from './components/usecontext-contexto/Pagina2'
import Pagina3 from './components/usecontext-contexto/Pagina3'
import Colores from './components/component-colores/Colores'
import { Datos } from './components/usecontext-contexto/contexto/Contexto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold text-blue-600"> Hola, Tailwind CSS! </h1>
    <Datos>
      <div className='App'>
            <Pagina1/>     <Pagina2/>      <Pagina3/>      
      </div>
      <div>
        <Colores></Colores>
      </div>
    </Datos>
    </>
  )
}

export default App
