import styles from './CallToAction.module.css';
import Button from '../Button/Button.jsx';

function CallToAction() {

    return (
        <>
            <section id='Contact' className={styles.section}>
                <h2 className={styles.title}>Want to build<br /> something amazing?</h2>
                <Button>Get in touch</Button>
            </section>

            <div className={styles.signup}>
                <h3 className={styles['signup-title']}>Newsletter Signup</h3>
                <input className={styles.input} placeholder='    test@youremail.com' />
                <Button>SIGNUP</Button>

            </div>

        </>
    );
}

export default CallToAction