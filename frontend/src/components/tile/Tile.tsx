import styles from './Tile.module.scss';

export type Tile = [number, number];

/*
interface ITile {
    tile: Tile;
}
*/

export default function Tile() {
  return <div className={styles.container}></div>;
}
