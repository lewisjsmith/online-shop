import { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../App';
import styles from '../styles/SearchBar.module.css';
import searchSvg from '../assets/search.svg';

export default function SearchBar() {

    const { products } = useContext(ShopContext);

    const [query, setQuery] = useState("");
    const [show, setShow] = useState(false);

    const ref = useRef(null);

    function handleChange(e) {
        setQuery(e.target.value);
    }

    useEffect(() => {

        const handleClick = (e) => {
            if(ref && !ref.current.contains(e.target)) {
                onClickOutside();
            }
        }

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        }

    }, []);

    function onClickOutside() {
        setShow(false);
    }

    return (
        <div className={styles["container"]}>

            <input ref={ref} className={show ? styles["search-bar"] : styles["search-bar-hidden"]} type="text" onChange={handleChange}></input>

            <ul className={query.trim() !== ""  && show ? styles["search-results-list"] : styles["search-results-list-hidden"]  } >
                {products.map(item => {
                    if (item.value.includes(query)) {
                        return <li key={item.value} className={styles["search-result-item"]}>
                            <Link onClick={() => setQuery("")} to={`/product/${item.value}`} style={{ textDecoration: "none" }}>{item.categories[0]} &gt; {item.value.split("-").join(" ")}</Link>
                        </li>
                    }
                })}
            </ul>

            <button className={show ? styles["svg-wrapper-hidden"] : styles["svg-wrapper"]} onClick={() => setShow(true)}>
                <img className={styles["svg-img"]} viewBox="0 0 100 100" src={searchSvg} />
            </button>

        </div>
    );
}