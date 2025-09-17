import styles from './SimpleCard.module.css';

function SimpleCard(props) {

    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default SimpleCard