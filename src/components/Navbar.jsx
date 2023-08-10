import { useContext, useEffect, useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown";
import CardPanel from "./CartPanel";
import SearchBar from "./SearchBar";
import cartSvg from "../assets/cart.svg";

import logo from '../assets/logo.svg';
import logo2 from '../assets/logo2.svg';
import Footer from './Footer'

function Navbar() {

    const { cartItems, windowQuery } = useContext(ShopContext);
    const [cartNumber, setCartNumber] = useState(0);

    const [show, setShow] = useState("off");
    const [menDrop, setMenDrop] = useState(false);
    const [womenDrop, setWomenDrop] = useState(false);

    const menRef = useRef(null);
    const womenRef = useRef(null);

    const [showBurger, setShowBurger] = useState(false);
    const [mobileMenDrop, setMobileMenDrop] = useState(false);
    const [mobileWomenDrop, setMobileWomenDrop] = useState(false);

    // detects out of menu clicks
    useEffect(() => {
        const handleClick = (e) => {
            if (windowQuery.matches && menRef && !menRef.current.contains(e.target)) {
                menHide && menHide();
            }
        };
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        }
    }, []);

    // detects out of menu clicks
    useEffect(() => {

        const handleClick = (e) => {
            if (windowQuery.matches && womenRef && !womenRef.current.contains(e.target)) {
                womenHide && womenHide();
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

    function womenHide() {
        setWomenDrop(false);
    }

    // sums total items in cart for visual display
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

    // detects out of cart panel clicks
    function onClickOutside() {
        if (show === "on") {
            setShow("animation");
        }
    }

    return (
        <div className={"app"}>

            {windowQuery.matches && <CardPanel show={show} setShow={setShow} onClickOutside={onClickOutside} />}

            <nav>
                {/* Screen larger than mobile */}
                {windowQuery.matches && <ul className={styles["nav-wrapper"]}>

                    <div className={styles["sections-wrapper"]}>
                        <button type="button" className={styles["left-button"]} onClick={() => setMenDrop(!menDrop)}>
                            <h2 className={styles["option-hovers"]}>Men</h2>
                        </button>
                        <h2>|</h2>
                        <button type="button" className={styles["right-button"]} onClick={() => setWomenDrop(!womenDrop)}>
                            <h2 className={styles["option-hovers"]}>Women</h2>
                        </button>
                    </div>

                    <li className={styles["logo-wrapper"]}>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            <img className={styles["home-logo"]} src={logo} />
                        </Link>
                    </li>

                    <div className={styles["buttons-wrapper"]}>
                        <li><SearchBar /></li>
                        <li className={styles["cart-icon"]}>
                            <button type="button" className={styles["svg-wrapper"]} onClick={() => setShow("on")}>
                                <img className={styles["svg-img"]} viewBox="0 0 100 100" src={cartSvg} />
                            </button>
                            <div className={styles["cart-number-wrapper"]} style={cartNumber > 0 ? { backgroundColor: "black" } : null}>
                                <h2 className={styles["cart-number"]}>{cartNumber === 0 ? "" : cartNumber}</h2>
                            </div>
                        </li>
                    </div>

                </ul>}
                {windowQuery.matches && <div>
                    <div ref={menRef}>
                        <Dropdown main={"men"} drop={menDrop} links={["coats", "midlayers", "shirts", "bibs", "accessories"]} />
                    </div>
                    <div ref={womenRef}>
                        <Dropdown main={"women"} drop={womenDrop} links={["coats", "midlayers", "shirts", "bibs", "accessories"]} />
                    </div>
                </div>}

                {/* Mobile screen */}
                {!windowQuery.matches &&
                    <ul className={styles["nav-wrapper-mobile"]}>

                        <li className={styles["logo-wrapper-mobile"]}>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <img className={styles["home-logo-mobile"]} src={logo} />
                            </Link>
                        </li>

                        <li>
                            <button type="button" onClick={() => setShowBurger(!showBurger)}>
                                Menu
                            </button>

                            {showBurger &&
                                <div className={styles["burger-menu-wrapper"]}>

                                    <Link to={"/cart"}>
                                        <button type="button" onClick={() => {
                                            setShowBurger(false);
                                            setMobileMenDrop(false);
                                            setMobileWomenDrop(false);
                                        }}>
                                            <h2>Shopping Cart</h2>
                                        </button>
                                    </Link>

                                    <button type="button" onClick={() => setMobileMenDrop(!mobileMenDrop)}>
                                        <h2>Men</h2>
                                    </button>

                                    {mobileMenDrop &&
                                        <ul>

                                            <li key={"shop-all-men"}>
                                                <Link to={`/men/`} style={{ textDecoration: "none" }}>
                                                    <button onClick={() => {
                                                        setShowBurger(false);
                                                        setMobileMenDrop(false);
                                                        setMobileWomenDrop(false);
                                                    }}>
                                                        Shop All
                                                    </button>
                                                </Link>
                                            </li>

                                            {["coats", "midlayers", "shirts", "bibs", "accessories"].map(item => {
                                                return <li key={item}>
                                                    <Link to={`/men/${item}`} style={{ textDecoration: "none" }}>
                                                        <button onClick={() => {
                                                            setShowBurger(false);
                                                            setMobileMenDrop(false);
                                                            setMobileWomenDrop(false);
                                                        }}>
                                                            {item}
                                                        </button>
                                                    </Link>

                                                </li>
                                            })}
                                        </ul>
                                    }

                                    <button type="button" onClick={() => setMobileWomenDrop(!mobileWomenDrop)}>
                                        <h2>Women</h2>
                                    </button>

                                    {mobileWomenDrop &&
                                        <ul>
                                            <li key={"shop-all-women"}>
                                                <Link to={`/women/`} style={{ textDecoration: "none" }}>
                                                    <button onClick={() => {
                                                        setShowBurger(false);
                                                        setMobileMenDrop(false);
                                                        setMobileWomenDrop(false);
                                                    }}>
                                                        Shop All
                                                    </button>
                                                </Link>
                                            </li>

                                            {["coats", "midlayers", "shirts", "bibs", "accessories"].map(item => {
                                                return <li key={item}>
                                                    <Link to={`/women/${item}`} style={{ textDecoration: "none" }}>
                                                        <button onClick={() => {
                                                            setShowBurger(false);
                                                            setMobileMenDrop(false);
                                                            setMobileWomenDrop(false);
                                                        }}>
                                                            {item}
                                                        </button>
                                                    </Link>
                                                </li>
                                            })}
                                        </ul>
                                    }

                                </div>}
                        </li>

                    </ul>}

            </nav>
            <Outlet />
            <Footer />

        </div>
    )
}

export default Navbar;