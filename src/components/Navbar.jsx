import { useContext, useEffect, useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown"
import CardPanel from "./CartPanel";
import SearchBar from "./SearchBar";
import cartSvg from "../assets/cart.svg";

function Navbar() {

    const { cartItems } = useContext(ShopContext);

    const [cartNumber, setCartNumber] = useState(0);

    // card panel
    const [show, setShow] = useState("off");

    const [menDrop, setMenDrop] = useState(false);
    const [womenDrop, setWomenDrop] = useState(false);

    const menRef = useRef(null);
    const womenRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (menRef && !menRef.current.contains(e.target)) {
                menHide && menHide();
            }
        };
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        }
    }, []);

    function menHide() {
        setMenDrop(false);
    }

    useEffect(() => {
        const handleClick = (e) => {
            if (womenRef && !womenRef.current.contains(e.target)) {
                womenHide && womenHide();
            }
        };
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        }
    }, []);

    function womenHide() {
        setWomenDrop(false);
    }

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

                    <div className={styles["sections-wrapper"]}>

                        <li ref={menRef} className={styles["left-section"]} onClick={() => setMenDrop(true)}>
                            <Dropdown main={"men"} drop={menDrop} links={["coats", "midlayers", "shirts", "bibs", "accessories"]} />
                        </li>

                        <li ref={womenRef} className={styles["right-section"]} onClick={() => setWomenDrop(true)}>
                            <Dropdown main={"women"} drop={womenDrop} links={["coats", "midlayers", "shirts", "bibs", "accessories"]} />
                        </li>

                    </div>

                    <li className={styles["logo-wrapper"]}><Link to={"/"} style={{ textDecoration: "none" }}><h2>Stoked</h2></Link></li>


                    <div className={styles["buttons-wrapper"]}>
                        <li className={styles["search-bar"]}><SearchBar /></li>
                        <li className={styles["cart-icon"]}>
                            <div className={styles["svg-wrapper"]} onClick={() => setShow("on")}>
                                <img className={styles["svg-img"]} viewBox="0 0 100 100" src={cartSvg} />
                            </div>
                            <div className={styles["cart-number-wrapper"]} style={cartNumber > 0 ? { backgroundColor: "black" } : null}>
                                <h2 className={styles["cart-number"]}>{cartNumber === 0 ? "" : cartNumber}</h2>
                            </div>

                        </li>
                    </div>

                </ul>
            </nav>

            <Outlet />

        </div>
    )
}

export default Navbar;