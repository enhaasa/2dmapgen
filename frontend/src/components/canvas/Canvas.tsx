import { useContext } from 'react';

// Components
import Map from '../map/Map';

// Contexts
import { MapContext } from '../../contexts/map';

// CSS
import styles from './Canvas.module.scss';

export default function Canvas() {

    const { width, height, tiles } = useContext(MapContext);

    return (
        <div className={styles.container}>
            <Map width={width.get} height={height.get} tiles={tiles.get} />
        </div>
    )
}