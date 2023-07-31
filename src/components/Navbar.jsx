import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown"
import CardPanel from "./CartPanel";

function Navbar() {

    const { cartItems } = useContext(ShopContext);

    const [cartNumber, setCartNumber] = useState(0);

    const [show, setShow] = useState(false);

    useEffect(() => {

        const cartCount = () => {
            if (cartItems.length > 0) {
                const initialValue = 0;
                const sumWithIntial = cartItems.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.quantity
                }, initialValue);
                return sumWithIntial;
            }
        };

        setCartNumber(cartCount());

    }, [cartItems]);

    return (
        <div className={"app"}>

            <CardPanel show={show} setShow={setShow}/>

            <nav>
                <ul className={styles["nav-wrapper"]}>
                    {/* <Dropdown />
                    <Dropdown />
                    <Dropdown />
                    <Dropdown /> */}
                    <li className={styles["list-item"]}><Link to={"/"}><h2>Logo</h2></Link></li>
                    <li className={styles["list-item"]}><Link to={"/men"}><h2>Men</h2></Link></li>
                    <li className={styles["list-item"]}><Link to={"/women"}><h2>Women</h2></Link></li>

                    <li className={styles["list-item"]}><input className={styles["search-bar"]} type="text" /></li>

                    <li className={styles["list-item"]}><h2 onClick={() => setShow(!show)}>Cart {cartNumber === 0 ? "" : cartNumber}</h2></li>
                </ul>
            </nav>

            <Outlet />

        </div>
    )
}

export default Navbar;