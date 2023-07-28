import styles from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Card(props) {

    const [source, setSource] = useState(null);

    useEffect(() => {
        import("../assets/" + props.src).then(image => setSource(image.default))
    }, []);

    return (
        <div className={styles["card"]} >

            <img className={styles["card-image"]} src={source}></img>

            <div className={styles["card-text-wrapper"]}>
                <p className={styles["card-text"]}>{props.item.value}</p>
                <p className={styles["card-text"]}><Link to={`/product/${props.item.id}`}>Link to page</Link></p>
                <p className={styles["card-text"]}>£{(Math.round(props.price * 100) / 100).toFixed(2)}</p>
            </div>
            
        </div>
    );
}