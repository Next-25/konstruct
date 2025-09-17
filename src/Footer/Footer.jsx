import logo from '../assets/logo.svg';

import styles from './Footer.module.css';

function Footer() {

    const menu1 = ["Home", " About", "Services", "Projects", "Contact us"];
    const menu2 = ["Faq", "Terms", "Careers"];
    const menu3 = ["Blog", "Partners", "News"];

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <div className={styles.company}>
                    <h6 className={styles.title}>COMPANY</h6>
                    <img className={styles.logo} src={logo} />
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                </div>

                <div className={styles.links}>
                    <h6 className={styles.title}>LINKS</h6>
                    <nav>
                        <ul>
                            {menu1.map((item, index) => (
                                <li key={index}>
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>

                        <ul>
                            {menu2.map((item, index) => (
                                <li key={index}>
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>

                        <ul>
                            {menu3.map((item, index) => (
                                <li key={index}>
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className={styles.contact}>
                    <h6 className={styles.title}>CONTACT US</h6>
                    <p>213 Baker Street Oriel City Kounty 7000 KNW,Kountry Name</p>
                    <p>+23 994 233 4022</p>
                    <p>info@konstruct.com</p>
                </div>

                <div className={styles.social}>
                    <a href="">
                        <i className="fa-brands fa-square-facebook"></i>
                    </a>

                    <a href="">
                        <i className="fa-brands fa-twitter"></i>
                    </a>

                    <a href="">
                        <i className="fa-brands fa-google"></i>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Footer