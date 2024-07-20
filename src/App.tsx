// Components
import Toolbar from './components/toolbar/Toolbar';
import Canvas from './components/canvas/Canvas';

// Contexts
import { MapContextProvider } from './contexts/map';
import { TilesContextProvider } from './contexts/tiles';

// CSS
import styles from './App.module.scss';

function App() {
 
  return (
    <MapContextProvider>
      <TilesContextProvider>
        <div className={styles.container}>
          <Toolbar />
          <Canvas />
        </div>
      </TilesContextProvider>
    </MapContextProvider>
  )
}

export default App;
