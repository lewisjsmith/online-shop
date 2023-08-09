import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/CartItemCard.module.css";

export default function CartItemCard(props) {

    const { cartItems, products, removeFromCart } = useContext(ShopContext);

    const { price, value, size, quantity } = props;

    const src = products.filter(product => {
        if (value === product.value) {
            return product;
        }
    })[0].srcOne;

    return (

        <div className={styles["card-wrapper"]}>
            <Link to={`/product/${value}`} style={{textDecoration: "none"}}>
                <div className={styles["image-container"]}>
                    <img src={src}></img>
                </div>
            </Link>
            <Link to={`/product/${value}`} style={{textDecoration: "none"}}>
                <div className={styles["card-details"]}>
                    <h4>£{(Math.round(price * 100) / 100).toFixed(2)}</h4>
                    <p>{value}</p>
                    <p>Size: {size}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </Link>
            <div className={styles["button-wrapper"]}>
                <button type="button" onClick={() => removeFromCart(value, quantity, size)}>X</button>
            </div>
        </div >

    );
}