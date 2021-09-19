import { memo, useRef } from "react";
import styles from "./nav.module.css";

const Nav = memo(({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const query = inputRef.current.value;
        onSearch(query);
    }

    const onClick = () => {
        handleSearch();
    }

    const onKeypress = (event) => {
        if(event.key === "Enter"){
            handleSearch();
        }
    }
    return (
        <>
        <header className={styles.navbar}>
            <div className={styles.left}>
                <i id={styles.bars} className="fas fa-bars"></i>
                <i id={styles.youtube} className="fab fa-youtube"></i>
            </div>
            <div className={styles.right}>
                <input ref={inputRef} type="search" name="q" maxLength="30" onKeyPress={onKeypress}/>
                <button id={styles.search} onClick={onClick}>
                    <i className="fas fa-search"></i>
                </button>
                <button className={styles.join}>Join</button>
                <button className={styles.login}>Login</button>
            </div>
        </header>
        </>
    );
});

export default Nav;