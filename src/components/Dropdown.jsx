import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Dropdown.module.css";
import skiSet from "../assets/ski-svg.svg";

export default function Dropdown(props) {

    const { links, main, drop } = props;

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className={styles["container"]}>

            <div className={styles["header-wrapper"]}>
                {/* <img className={styles["ski-svg"]} src={skiSet} height="50" width="100" /> */}
                <h2 className={styles["header"]} style={{ padding: 0, margin: 0 }}>
                    {capitalize(main)}
                </h2>
            </div>

            <ul className={drop ? styles["show-options"] : styles["hidden-options"]}>
                <li className={styles["options-item"]} key={main}><Link to={`/${main}/`} style={{ textDecoration: "none" }}>Shop All</Link></li>
                {links.map(item => {
                    return <li className={styles["options-item"]} key={item}><Link to={`/${main}/${item}`} style={{ textDecoration: "none" }}>{capitalize(item)}</Link></li>
                })}
            </ul>

        </div>

    );
}