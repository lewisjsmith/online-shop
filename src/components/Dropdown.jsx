import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Dropdown.module.css";

export default function Dropdown(props) {

    // needs data for dropdown list values, list paths

    const [pos, setPos] = useState({
        transform: "translateY(-200%)",
        opacity: "0%"
    });

    return (
        <div className={styles["container"]}
            onClick={() => pos["transform"] === "translateY(-200%)" ?
                setPos({ transform: "translateY(75%)", opacity: "100%" }) : 
                setPos({ transform: "translateY(-200%)", opacity: "0%" }) }>
            <h3 className={styles["header"]}>
                Menu
            </h3>
            <ul className={styles["options"]} style={pos}>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
                <li>Option 5</li>
            </ul>
        </div>
    );
}
