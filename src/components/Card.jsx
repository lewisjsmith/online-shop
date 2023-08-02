import styles from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Card(props) {

    const [source, setSource] = useState(null);

    useEffect(() => {
        setSource(props.src);
    }, []);

    let name = props.item.value.split("-");
    for (let i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    name = name.join(" ");

    return (
        <div>
            <Link to={`/product/${props.item.value}`}>

                <div className={styles["card"]} >
                    
                    <div className={styles["image-wrapper"]}>
                        <img className={styles["card-image"]} src={source}></img>
                    </div>

                    <div className={styles["card-text-wrapper"]}>
                        <p className={styles["card-text"]}>{name}</p>
                        <p className={styles["card-text"]}>£{(Math.round(props.price * 100) / 100).toFixed(2)}</p>
                    </div>

                </div>
            </Link>
        </div>
    );
}