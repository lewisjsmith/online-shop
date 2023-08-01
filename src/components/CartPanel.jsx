import styles from '../styles/CartPanel.module.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useRef } from 'react'
import { ShopContext } from '../App'
import CartCard from './CartCard';

export default function CartPanel(props) {

    const { cartItems } = useContext(ShopContext);

    const { onClickOutside } = props;

    const panelRef = useRef(null);

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [ onClickOutside ]);

    const total = cartItems.reduce((prev, current) => {
        return prev = prev + (current.price * current.quantity);
    }, 0);

    return (

        <div ref={panelRef} className={props.show ? styles["show-panel"] : styles["hidden-panel"]}>

            <h2>Cart</h2>

            <Link to={"/cart"}>
                <button>Continue to Cart</button>
            </Link>

            <h3 style={{color: "white"}}>
                Total: £{(Math.round(total *100)/100).toFixed(2)}
            </h3>

            <ul className={styles["cart-list"]}>
                {cartItems.map(item => {
                    return (
                        <li key={item.value + "-" + item.size} className={styles["list-item"]}>
                            <CartCard item={item} quantity={item.quantity} size={item.size} />
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}