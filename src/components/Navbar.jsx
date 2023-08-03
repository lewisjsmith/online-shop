import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown"
import CardPanel from "./CartPanel";
import SearchBar from "./SearchBar";

function Navbar() {

    const { cartItems } = useContext(ShopContext);

    const [cartNumber, setCartNumber] = useState(0);

    const [show, setShow] = useState("off");

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

    function onClickOutside() {
        if (show === "on") {
            setShow("animation");
        }
    }

    return (
        <div className={"app"}>

            <CardPanel show={show} setShow={setShow} onClickOutside={onClickOutside} />

            <nav>
                <ul className={styles["nav-wrapper"]}>

                    <li className={styles["logo-wrapper"]}><Link to={"/"} style={{ textDecoration: "none" }}><h2>Stoked</h2></Link></li>

                    <div className={styles["sections-wrapper"]}>
                        <li className={styles["left-section"]}><Dropdown main={"men"} links={["coats", "midlayers", "shirts", "bibs", "accessories"]} /></li>
                        <li className={styles["right-section"]}><Dropdown main={"women"} links={["coats", "midlayers", "shirts", "bibs", "accessories"]} /></li>
                    </div>
                    <div className={styles["buttons-wrapper"]}>
                        <li className={styles["search-bar"]}><SearchBar /></li>
                        <li className={styles["cart-icon"]}><h2 onClick={() => setShow("on")}>Cart {cartNumber === 0 ? "" : cartNumber}</h2></li>
                    </div>

                </ul>
            </nav>

            <Outlet />

        </div>
    )
}

export default Navbar;