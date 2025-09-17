import logo from '../assets/logo-black.svg';
import styles from './Header.module.css';

function Header() {

    const menuItems = ["Home", "About", "Services", "Work", "Contact"];

    return (
        <section className={styles.section}>
            <nav className={styles.navigator}>
                <img className={styles.logo} src={logo} />
                <ul className={styles['menu_items']}>
                    {menuItems.map((item, index) => (
                        <li key={index} className={styles.item}>
                            <a href={"#"+item}>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}

export default Header