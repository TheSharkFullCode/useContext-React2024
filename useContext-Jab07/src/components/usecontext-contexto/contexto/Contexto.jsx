import React, { createContext, useContext, useState } from 'react'

export  const MiContexto = createContext();

export const Datos =({children})=>{
    const [color,setColor]=useState('darkgreen')
    return(
        <MiContexto.Provider value={{color,setColor}}>
            {children}
        </MiContexto.Provider>

    )

}