import styles from './OurCapabilities.module.css';
import Button from '../Button/Button.jsx'
import MegaCard from '../MegaCard/MegaCard.jsx'

export default function OurCapabilities() {

    return (
        <>
            <section id='Services' className={styles.section}>
                <div className={styles['title-group']}>
                    <h2 className={styles.title}>OUR CAPABILITIES</h2>
                    <div className={styles.line}></div>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                <Button>All Services</Button>
            </section>

            <section id='Work'>
                <div className={styles.section}>
                    <MegaCard src="./card-4.png" title="PROJECT AND CONSTRUCTION MANAGEMENT">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                    </MegaCard>

                    <MegaCard src="./card-5.png" title="STRUCTURE AUDIT AND MAINTENANCE">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                    </MegaCard>

                    <MegaCard src="./card-5.png" title="FACTORY CONSTRUCTION AND MODELING">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                    </MegaCard>
                </div>
            </section>
        </>
    );

}