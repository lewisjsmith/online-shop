import { ShopContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import styles from "../styles/CartCard.module.css"

export default function CartCard(props) {

    const { products } = useContext(ShopContext);
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        const product = products.filter(item => item.value === props.item.value)[0];
        setPhoto(product.srcOne);
    }, [])

    return (
        <div className={styles["cart-card"]}>

            <div className={styles["image-container"]}>
                <img src={photo} className={styles["card-image"]}></img>
            </div>

            <div className={styles["card-details"]}>
                <p>{props.item.value}</p>
                <p>Quantity: {props.quantity}</p>
                <p>Sub-total: £{(Math.round(props.quantity * props.item.price *100)/100).toFixed(2)}</p>
            </div>

        </div>
    );
}