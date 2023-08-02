import { useContext } from 'react'
import { ShopContext } from '../App'
import CartItemCard from './CartItemCard';
import styles from '../styles/Cart.module.css'

export default function Cart() {

    const { cartItems, products } = useContext(ShopContext);

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0);

    return (
        <div className={styles["cart-wrapper"]}>

            <div className={styles["cart-left"]}>
                <div>
                    <h3>My Cart</h3>
                    <h5>Items are reserved for 60 minutes</h5>
                </div>
                <ul className={styles["cart-list"]}>
                    {cartItems.map(item => {
                        return (
                            <li key={item.value + "-" + item.size} className={styles["cart-list-item"]}>
                                <CartItemCard price={item.price} value={item.value} size={item.size} quantity={item.quantity}/>
                            </li>
                        );
                    })}
                </ul>
                <div>
                    <h4>Sub-Total: £{(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>
                </div>
            </div>

            <div className={styles["cart-right"]}>
                <h3>Total</h3>
                <p>Total Cost: £{(Math.round(totalPrice * 100) / 100).toFixed(2)}</p>
                <button>Checkout</button>
                <h4>We accept:</h4>
                <p>Mastercard, Visa, AMEX etc</p>
                <input type="text" defaultValue={"ABC123"}></input>
                <button>Apply Discount</button>
            </div>
        </div>
    )
}