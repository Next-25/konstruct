import styles from './MegaCard.module.css';

export default function MegaCard(props) {
    return (
        <div className={styles["mega-card"]}>
            <img className={styles.image} src={props.src} />
            <h6 className={styles.title}>{props.title}</h6>
            <p className={styles.description}>{props.children}</p>
        </div>
    );
}