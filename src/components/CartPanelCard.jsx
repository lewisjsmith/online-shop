import { ShopContext } from '../App';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import styles from "../styles/CartCard.module.css"

export default function CartPanelCard(props) {

    const { products } = useContext(ShopContext);
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        const product = products.filter(item => item.value === props.item.value)[0];
        setPhoto(product.srcOne);
    }, [])

    return (
        <Link to={`product/${props.item.value}`}>
            <div className={styles["cart-card"]}>

                <div className={"image-wrapper"}>
                    <div className={styles["image-container"]}>
                        <img src={photo} className={styles["card-image"]}></img>
                    </div>
                </div>

                <div className={styles["card-details"]}>
                    <p>{props.item.value.split("-").join(" ")}</p>
                    <p>Size: {props.item.size}</p>
                    <p>Quantity: {props.quantity}</p>
                    <p>Sub-total: £{(Math.round(props.quantity * props.item.price * 100) / 100).toFixed(2)}</p>
                </div>

            </div>
        </Link>
    );
}