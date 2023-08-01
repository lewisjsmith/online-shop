import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../App';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar() {

    const { products } = useContext(ShopContext);

    const [query, setQuery] = useState("");

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <div className={styles["container"]}>
            <input className={styles["search-bar"]} type="text" onChange={handleChange}></input>
            <ul className={styles["search-results-list"]}>
                {products.map(item => {
                    if (item.value.split("-").includes(query) || item.value.charAt(0) === query) {
                        return <li key={item.value}>
                            <Link onClick={() => setQuery("") } to={`/product/${item.value}`}>{item.categories[0]} &gt; {item.value}</Link>
                        </li>
                    }
                })}
            </ul>
        </div>
    );
}