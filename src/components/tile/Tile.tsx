import styles from './Tile.module.scss';

export type Tile = [number, number];

interface ITile {
    tile: Tile;
}

export default function Tile({ tile }: ITile) {

    return (
        <div className={styles.container}>

        </div>    
    );
}
