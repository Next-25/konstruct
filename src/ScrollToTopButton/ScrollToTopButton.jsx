import { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';

function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    className={styles["scroll-to-top"]}
                    onClick={scrollToTop}
                    aria-label="Прокрутить наверх"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;