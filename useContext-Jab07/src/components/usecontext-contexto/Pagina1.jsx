import React, { useContext } from 'react'
import { MiContexto } from './contexto/Contexto'

function Pagina1() {
    const {color}=useContext(MiContexto);

  return (
    <div className='hijo' style={{backgroundColor:color}}> <h2>Pagina1</h2>
        {color}
    </div>
  )
}

export default Pagina1