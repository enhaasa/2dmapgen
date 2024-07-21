// Components
import Tile from '../tile/Tile';

// CSS
import styles from './Map.module.scss';

// Types
import { type Tile as TTile } from '../tile/Tile';

interface IMap {
    width: number;
    height: number;
    tiles: TTile[];
}

export default function Map({ width, height, tiles }: IMap) {
    return (
        <div className={styles.container}>
            <div className={styles.map}>
                {tiles.map(tile => (
                    <Tile tile={tile}/>
                ))}
            </div>
        </div>    
    );
}
