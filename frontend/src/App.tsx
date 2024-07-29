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
  ['Sheet Editor', <SheetEditor />],
];

function App() {
  const [view, setView] = useState<IView>(views[0]);

  const apiUrl = 'http://localhost:5000';

  fetch(`${apiUrl}/test`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));

  return (
    <MapContextProvider>
      <TilesContextProvider>
        <div className={styles.container}>
          <div className={styles.header}>{view[0]}</div>
          <div className={styles.component}>{view[1]}</div>
        </div>
      </TilesContextProvider>
    </MapContextProvider>
  );
}

export default App;
