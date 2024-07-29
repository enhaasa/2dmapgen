// Components
import Toolbar from '../../components/toolbar/Toolbar';
import Canvas from '../../components/canvas/Canvas';

// CSS
import styles from './MapEditor.module.scss';


export default function MapEditor() {

    return (
        <div className={styles.container}>
          <Toolbar />
          <Canvas />
        </div>    
    );
}
