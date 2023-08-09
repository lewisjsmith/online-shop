import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/CartItemCard.module.css";

export default function CartItemCard(props) {

    const { cartItems, products, addToCart, removeFromCart } = useContext(ShopContext);

    const { price, value, size, quantity } = props;

    const [newQuantity, setNewQuantity] = useState(quantity);

    useEffect(() => {

        const obj = cartItems.filter(item => (item.value === value) && (item.size === size) )[0];
        const objValue = obj.value;
        const objQuantity = obj.quantity;

        if (newQuantity > objQuantity) {
            addToCart(objValue, (newQuantity - objQuantity), size)
        }

        if (objQuantity > newQuantity) {
            removeFromCart(objValue, (objQuantity - newQuantity), size)
        }

    }, [newQuantity])

    function handleSizeChange(e) {
        setNewQuantity(e.target.value);
    }

    const src = products.filter(product => {
        if (value === product.value) {
            return product;
        }
    })[0].srcOne;

    return (

        <div className={styles["card-wrapper"]}>
            <Link to={`/product/${value}`} style={{ textDecoration: "none" }}>
                <div className={styles["image-container"]}>
                    <img src={src}></img>
                </div>
            </Link>
            <Link to={`/product/${value}`} style={{ textDecoration: "none" }}>
                <div className={styles["card-details"]}>
                    <h4>£{(Math.round(price * 100) / 100).toFixed(2)}</h4>
                    <p>{value}</p>
                    <div>
                        <p>Size: {size}</p>
                        <p>Quantity:
                            <select onChange={handleSizeChange} defaultValue={quantity}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                        </p>
                    </div>
                </div>
            </Link>
            <div className={styles["button-wrapper"]}>
                <button type="button" onClick={() => removeFromCart(value, quantity, size)}>X</button>
            </div>
        </div >

    );
}