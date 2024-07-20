import { useContext } from 'react';

// Contexts
import { MapContext } from '../../contexts/map';

// CSS
import styles from './Canvas.module.scss';

export default function Canvas() {

    const { width, height } = useContext(MapContext);

    return (
        <div className={styles.container}>
            Width: {width.get}
            Height: {height.get}
        </div>
    )
}