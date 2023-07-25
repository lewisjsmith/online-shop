import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../App";
import styles from "../styles/Navbar.module.css";

function Navbar() {

    const { cartItems } = useContext(CartContext);

    // Nav element?
    return (
        <div>
            <nav>
                <ul className={styles["nav-wrapper"]}>
                    <li><Link to={"/"}>Logo</Link></li>
                    <li><Link to={"/men"}>Men</Link></li>
                    <li><Link to={"/women"}>Women</Link></li>
                    <li><Link to={"/cart"}>Cart {cartItems.length === 0 ? "" : cartItems.length}</Link></li>
                </ul>
            </nav>
            <hr></hr>
            <Outlet />
        </div>
    )
}

export default Navbar;