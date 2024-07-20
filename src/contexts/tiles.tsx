import { useState, createContext } from "react";

export interface ITilesContext {
    size: {        
        get: number,
        set: React.Dispatch<React.SetStateAction<number>>,
    }
}

const TilesContext = createContext({} as ITilesContext);

function TilesContextProvider({ children }: any) {
    const [ size, setSize ] = useState(1);

    return (
        <TilesContext.Provider value={{
            size: {get: size, set: setSize }
        }}>
            {children}
        </TilesContext.Provider>
    )
}

export { TilesContextProvider, TilesContext };