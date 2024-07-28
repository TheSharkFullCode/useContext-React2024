import React, { useContext } from 'react'
import { MiContexto } from '../usecontext-contexto/contexto/Contexto'

function Colores() {
    const {setColor}=useContext(MiContexto);

  return (
    <div className='colors'>        
        <div className='colores' onClick={()=>setColor('#4285f4')}></div>
        <div className='colores' onClick={()=>setColor('#ea4335')}></div>
        <div className='colores' onClick={()=>setColor('#fbbc05')}></div>
        <div className='colores' onClick={()=>setColor('#34a853')}></div>
    </div>
  )
}

export default Colores