import { useState, createContext } from "react";

export interface IMapContext {
    height: {
        get: number,
        set: React.Dispatch<React.SetStateAction<number>>,
    },
    width: {
        get: number,
        set: React.Dispatch<React.SetStateAction<number>>,
    }
}

const MapContext = createContext({} as IMapContext);

function MapContextProvider({ children }: any) {
    const [ height, setHeight ] = useState(1);
    const [ width, setWidth ] = useState(1);

    return (
        <MapContext.Provider value={{
            width: {get: width, set: setWidth},
            height: {get: height, set: setHeight}
        }}>
            {children}
        </MapContext.Provider>
    )
}

export { MapContextProvider, MapContext };