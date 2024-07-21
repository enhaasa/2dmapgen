import { useContext } from 'react';

// Components
import Input from '../common/input/Input';

// Contexts
import { MapContext } from '../../contexts/map';

// CSS
import styles from './Toolbar.module.scss';

export default function Toolbar() {
    const map = useContext(MapContext);

    function handleHeight({ target }: React.ChangeEvent<HTMLInputElement>) {
        map.height.set(parseInt(target.value))
    }

    function handleWidth({ target }: React.ChangeEvent<HTMLInputElement>) {
        map.width.set(parseInt(target.value))
    }

    return (
        <div className={styles.container}>
            Map Height:
            <Input 
                type={'number'} 
                value={map.height.get}  
                onChange={handleHeight}
            />

            Map Width:
            <Input 
                type={'number'} 
                value={map.width.get}  
                onChange={handleWidth}
            />
        </div>    
    );
}
