import { useState, ReactElement } from 'react';

// Components
import MapEditor from './views/map_editor/MapEditor';
import SheetEditor from './views/sheet_editor/SheetEditor';

// Contexts
import { MapContextProvider } from './contexts/map';
import { TilesContextProvider } from './contexts/tiles';

// CSS
import styles from './App.module.scss';

type IView = [string, ReactElement];

const views: IView[] = [
  ['Map Editor', <MapEditor />],
  ['Sheet Editor', <SheetEditor />]
];

function App() {

  const [ view, setView ] = useState<IView>(views[0]);
  
 
  return (
    <MapContextProvider>
      <TilesContextProvider>
        <div className={styles.container}>
          <div className={styles.header}>
            {view[0]}
          </div>
          <div className={styles.component}>
            {view[1]}
          </div>
        </div>
      </TilesContextProvider>
    </MapContextProvider>
  )
}

export default App;
