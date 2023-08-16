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

    }, [onClickOutside]);

    useEffect(() => {
        panelRef.current.addEventListener("animationend", (e) => {
            if (e.animationName.includes("retract")) {
                props.setShow("off")
            }
        });
    }, [])

    const total = cartItems.reduce((prev, current) => {
        return prev = prev + (current.price * current.quantity);
    }, 0);

    const stylingTest = (function () {
        switch (props.show) {
            case ("on"):
                return styles["show-panel"];
                break;
            case ("off"):
                return styles["hidden-panel"]
                break;
            case ("animation"):
                return styles["transitioning-panel"]
                break;
        }
    })();

    // console.log(stylingTest)

    return (

        <div ref={panelRef} className={stylingTest}>

            <h2 style={{padding: "2ch 0 2ch 0", margin: "0"}}>CART</h2>

            <Link to={"/cart"} style={{textDecoration: "none", padding: "0 0 2ch 0"}}>
                <button style={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    color: "black",
                    padding: "1ch 2ch",
                    border: "none",
                    fontWeight: "bolder"
            }}>CONTINUE TO CART</button>
            </Link>

            <h3 style={{ color: "white" }}>
                Total: £{(Math.round(total * 100) / 100).toFixed(2)}
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