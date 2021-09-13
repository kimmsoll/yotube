import { Component } from 'react';
import styles from "./nav.module.css";

class Nav extends Component {
    render() {
        return (
            <>
            <header className={styles.navbar}>
                <div className={styles.left}>
                    <i id={styles.bars} className="fas fa-bars"></i>
                    <i id={styles.youtube} className="fab fa-youtube"></i>
                </div>
                <div className={styles.right}>
                    <i id={styles.search} className="fas fa-search"></i>
                    <button>Join</button>
                    <button>Login</button>
                </div>
            </header>
            </>
        );
    }
}

export default Nav;