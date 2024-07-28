import React, { useContext } from 'react'
import { MiContexto } from './contexto/Contexto'

function Pagina2() {
    const {color}=useContext(MiContexto);

  return (
    <div className='hijo' style={{backgroundColor:color}}> <h2>Pagina2</h2>
        {color}
    </div> 
  )
}

export default Pagina2