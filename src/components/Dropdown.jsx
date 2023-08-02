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
            <h2 className={styles["header"]} onClick={() => setShow(!show)} style={{ padding: 0, margin: 0 }}>
                {capitalize(main)}
            </h2>
            <ul className={show ? styles["show-options"] : styles["hidden-options"]}>
                <li key={"main"}><Link to={`/${main}/`}>Shop All</Link></li>
                {links.map(item => {
                    return <li key={item}><Link to={`/${main}/${item}`}>{capitalize(item)}</Link></li>
                })}
            </ul>
        </div>
    );
}