import styles from './OurStory.module.css';
import SimpleCard from '../SimpleCard/SimpleCard.jsx';

export default function OurStory() {

    return (
        <section id='About' className={styles.section}>
            <h2 className={styles.title}>Our story</h2>
            <div className={styles.line}></div>
            <article className={styles.article}>
                <div className={styles.text}>
                    <p className={styles.story}>Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has become the number one construction management firm</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                </div>
                <div className={styles.cards}>
                    <SimpleCard className={styles.card1}>
                        We<br />Plan
                    </SimpleCard>

                    <SimpleCard className={styles.card2}>
                        We<br />Manage
                    </SimpleCard>

                    <SimpleCard className={styles.card3}>
                        We<br />Build
                    </SimpleCard>
                </div>
            </article>
        </section>
    );

}