import React from 'react';
import styles from './Map.module.scss';

interface Map {
    width: number;
    height: number;
}

export default function Map() {

    return (
        <div className={styles.container}>
            Hello I'm a map
        </div>    
    );
}
