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

    function onClickOutside() {
        setShow(false);
    }

    return (
        <div className={"app"}>

            <CardPanel show={show} setShow={setShow} onClickOutside={onClickOutside}/>

            <nav>
                <ul className={styles["nav-wrapper"]}>
                    <li className={styles["list-item"]}><Link to={"/"}><h2>Logo</h2></Link></li>
                    <Dropdown main={"men"} links={["coats", "midlayers", "shirts", "bibs", "accessories"]}/>
                    <Dropdown main={"women"} links={["coats", "midlayers", "shirts", "bibs", "accessories"]}/>

                    <li className={styles["list-item"]}><SearchBar /></li>

                    <li className={styles["list-item"]}><h2 onClick={() => setShow(!show)}>Cart {cartNumber === 0 ? "" : cartNumber}</h2></li>
                </ul>
            </nav>

            <Outlet />

        </div>
    )
}

export default Navbar;