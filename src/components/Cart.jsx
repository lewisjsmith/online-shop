import { useContext } from 'react'
import { ShopContext } from '../App'
import CartItemCard from './CartItemCard';
import LargeButton from './LargeButton';
import styles from '../styles/Cart.module.css'

export default function Cart() {

    const { windowQuery, cartItems, products } = useContext(ShopContext);

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0);

    return (

        <div className={windowQuery.matches ? styles["page-wrapper"] : styles["page-wrapper-mobile"]}>

            <div className={windowQuery.matches ? styles["cart-wrapper"] : styles["cart-wrapper-mobile"]}>

                <div className={windowQuery.matches ? styles["cart-left"] : styles["cart-left-mobile"]}>

                    <div className={styles["title-wrapper"]} style={windowQuery.matches ? {} : {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start"
                    }}>
                        <h3>MY CART</h3>
                        <h5>Items are reserved for 60 minutes</h5>
                    </div>

                    <ul className={styles["cart-list"]}>
                        {cartItems.map(item => {
                            return (
                                <li key={item.value + "-" + item.size} className={styles["cart-list-item"]}>
                                    <CartItemCard price={item.price} value={item.value} size={item.size} quantity={item.quantity} />
                                </li>
                            );
                        })}
                    </ul>

                    <div className={styles["subtotal-wrapper"]}>
                        <h4>Sub-Total: £{(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>
                    </div>

                </div>

                <div className={windowQuery.matches ? styles["cart-right"] : styles["cart-right-mobile"]}>
                    <div className={styles["sub-cart-right"]}>
                        <h3 className={windowQuery.matches ? styles["title-wrapper"] : styles["title-wrapper-mobile"]}>TOTAL</h3>
                        <div className={styles["total-details-wrapper"]}>
                            <p>Sub-total: £{(Math.round(totalPrice * 100) / 100).toFixed(2)}</p>
                            <p>Delivery</p>
                            <select>
                                <option>Standard</option>
                                <option>Next Day</option>
                                <option>Click & Collect</option>
                            </select>
                            <LargeButton text={"CHECKOUT"} />
                            <h4>We accept:</h4>
                            <p>Mastercard, Visa, AMEX etc</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}