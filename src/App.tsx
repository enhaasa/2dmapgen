// Components
import Toolbar from './components/toolbar/Toolbar';
import Canvas from './components/canvas/Canvas';

// Contexts
import { MapContextProvider } from './contexts/map';

// CSS
import styles from './App.module.scss';

function App() {
 
  return (
    <MapContextProvider>
      <div className={styles.container}>
        <Toolbar />
        <Canvas />
      </div>
    </MapContextProvider>
  )
}

export default App;
