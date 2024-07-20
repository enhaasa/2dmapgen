import { useState, createContext } from "react";

export interface ITilesContext {
    size: {        
        get: number,
        set: React.Dispatch<React.SetStateAction<number>>,
    }
}

const MapContext = createContext({} as ITilesContext);

function MapContextProvider({ children }: any) {
    const [ size, setSize ] = useState(1);

    return (
        <MapContext.Provider value={{
            size: {get: size, set: setSize }
        }}>
            {children}
        </MapContext.Provider>
    )
}

export { MapContextProvider, MapContext };