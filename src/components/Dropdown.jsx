import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Dropdown.module.css";

export default function Dropdown(props) {

    const { links, main } = props;

    const [show, setShow] = useState(false);

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className={styles["container"]}>
            <h3 className={styles["header"]} onClick={() => setShow(!show)}>
                {capitalize(main)}
            </h3>
            <ul className={show ? styles["show-options"] : styles["hidden-options"]}>
                {links.map(item => {
                    return <li key={item}><Link to={`/${main}/${item}`}>{capitalize(item)}</Link></li>
                })}
                <li key={"main"}><Link to={`/${main}/`}>Shop All</Link></li>
            </ul>
        </div>
    );
}