import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown"

function Navbar() {

    const { cartItems } = useContext(ShopContext);
    const [cartNumber, setCartNumber] = useState(0);

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
        <div>
            <nav>
                <ul className={styles["nav-wrapper"]}>
                    {/* <Dropdown />
                    <Dropdown />
                    <Dropdown />
                    <Dropdown /> */}
                    <li><Link to={"/"}>Logo</Link></li>
                    <li><Link to={"/men"}>Men</Link></li>
                    <li><Link to={"/women"}>Women</Link></li>

                    <li><input type="text" /></li>
                    
                    <li><Link to={"/cart"}>Cart {cartNumber === 0 ? "" : cartNumber}</Link></li>
                </ul>
            </nav>
            
            <Outlet />
        </div>
    )
}

export default Navbar;