import { useState, createContext } from "react";

// Types
import { type Tile } from "../components/tile/Tile";

export interface IMapContext {
    height: {
        get: number,
        set: React.Dispatch<React.SetStateAction<number>>,
    },
    width: {
        get: number,
        set: React.Dispatch<React.SetStateAction<number>>,
    }
    tiles: {
        get: Array<Tile>,
        set: React.Dispatch<React.SetStateAction<Array<Tile>>>,
    }
    tileMap: {
        get: number,
        set: React.Dispatch<React.SetStateAction<number>>,
    }
}

const MapContext = createContext({} as IMapContext);

function MapContextProvider({ children }: any) {
    const [ height, setHeight ] = useState(16);
    const [ width, setWidth ] = useState(16);
    const [ tiles, setTiles ] = useState<Tile[]>(generateTiles());
    const [ tileMap, setTileMap ] = useState(0);

    function generateTiles() {
        return new Array((width * height)).fill([0, 0]);
    }

    return (
        <MapContext.Provider value={{
            width: {get: width, set: setWidth},
            height: {get: height, set: setHeight},
            tiles: {get: tiles, set: setTiles},
            tileMap: {get: tileMap, set: setTileMap}
        }}>
            {children}
        </MapContext.Provider>
    )
}

export { MapContextProvider, MapContext };