import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown"
import CardPanel from "./CardPanel";

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
                    <li><Link to={"/"}>Logo</Link></li>
                    <li><Link to={"/men"}>Men</Link></li>
                    <li><Link to={"/women"}>Women</Link></li>

                    <li><input type="text" /></li>

                    <li onClick={() => setShow(!show)}>Cart{cartNumber === 0 ? "" : cartNumber}</li>
                </ul>
            </nav>

            <Outlet />

        </div>
    )
}

export default Navbar;