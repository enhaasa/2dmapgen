import styles from './Button.module.scss';

interface IButton {
    onClick: any;
    children: any;
}

export default function Button({ onClick, children }: IButton) {

    return (
        <button className={styles.container} onClick={onClick}>
            { children }
        </button>    
    );
}
