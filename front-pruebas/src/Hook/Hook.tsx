import React, {useEffect, useState, useContext, createContext} from 'react';
import Axios from 'axios';



 export const DataContext = createContext<any>({});

// ContextProvider children
export const ContextProvider = ({children}) => {

    const [ id , setId ] = useState('613');
    const [ fechaInit , setFechaInit ] = useState(1669085940000);
    const [ fechaEnd , setFechaEnd ] = useState(1669172340000);

    const value = {
        id,
        setId,
        fechaInit,
        setFechaInit,
        fechaEnd,
        setFechaEnd
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export  const useData = () => useContext(DataContext);

export default ContextProvider;


