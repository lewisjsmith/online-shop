import { ShopContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import styles from "../styles/CartCard.module.css"

export default function CartCard(props) {

    const { products } = useContext(ShopContext);
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        const product = products.filter(item => item.value === props.product)[0];
        setPhoto(product.srcOne);
    }, [])

    return (
        <div className={styles["cart-card"]}>
            <img src={photo} className={styles["card-image"]}></img>
        </div>
    );
}