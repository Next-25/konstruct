import styles from './SimpleCard.module.css';

export default function SimpleCard(props) {

    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    );
}