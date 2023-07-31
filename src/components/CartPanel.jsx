import styles from '../styles/CartPanel.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { ShopContext } from '../App'
import CartCard from './CartCard';

export default function CartPanel(props) {

    const { cartItems } = useContext(ShopContext);

    return (
        <div className={props.show ? styles["show-panel"] : styles["hidden-panel"]} onClick={() => props.setShow(!props.show)}>
            <p>Cart</p>
            <Link to={"/cart"}>
                <button>Continue to Cart</button>
            </Link>

            <ul className={styles["cart-list"]}>
                {cartItems.map(item => {
                    return (
                        <li key={item.value} className={styles["list-item"]}>
                            <CartCard product={item.value} />
                            <div>
                                <p>{item.value}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>


        </div>
    );
}