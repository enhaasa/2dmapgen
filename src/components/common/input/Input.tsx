import styles from './Input.module.scss';

interface IInput {
    type: 'text' | 'number';
    onChange: any;
    value: string | number;
}

export default function Input({ type = 'text', value, onChange }: IInput) {

    return (
        <input 
            className={styles.container}
            type={type}
            value={value}
            onChange={onChange}
        />   
    );
}
