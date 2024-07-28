import React, { useContext } from 'react'
import { MiContexto } from './contexto/Contexto'

function Pagina3() {
    const  {color}=useContext(MiContexto)
  return (
    <div className='hijo' style={{backgroundColor:color}}> <h2>Pagina3</h2>
        {color}
    </div>
  )
}

export default Pagina3