import styles from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Card(props) {

    const [source, setSource] = useState(null);

    useEffect(() => {
        import("../assets/" + props.src).then(image => setSource(image.default))
    },[]);

    return (
        <div className={styles["card"]} >
            <p>{props.item.value}</p>
            <p><Link to={`/product/${props.item.id}`}>Link to page</Link></p>
            <p>£{(Math.round(props.price * 100) / 100).toFixed(2)}</p>
            <img src={source}></img>
        </div>
    );
}