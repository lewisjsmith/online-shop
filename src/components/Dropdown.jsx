import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Dropdown.module.css";
import skiSet from "../../public/ski-svg.svg";

export default function Dropdown(props) {

    const { links, main, drop, setDrop } = props;

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
            <ul className={drop ? styles["show-options"] : styles["hidden-options"]}>
                <li className={styles["options-item"]} onClick={setDrop} key={main}><Link to={`/${main}/`} style={{ textDecoration: "none" }}>Shop All</Link></li>
                {links.map(item => {
                    return <li className={styles["options-item"]} onClick={setDrop} key={item}><Link to={`/${main}/${item}`} style={{ textDecoration: "none" }}>{capitalize(item)}</Link></li>
                })}
            </ul>
    );
}