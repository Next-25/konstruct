import logo from '../assets/logo.svg'
import styles from './Hero.module.css'

function Hero() {

    return (
        <section id='Home' className={styles.section}>
            <img className={styles.logo} src={logo} />
            <div className={styles.text} >
                <h1 className={styles.title} >PARTNER WITH KONSTRUCT</h1>
                <p className={styles.description} >An award-winning construction management firm</p>
            </div>
            <p className={styles.call}>Scroll down</p>
        </section>
    );
}

export default Hero