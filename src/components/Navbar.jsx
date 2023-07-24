import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {

    return (
        <div>
            <div className={styles["nav-wrapper"]}>
                <Link to={"/home"}>Logo</Link>
                <Link to={"/men"}>Men</Link>
                <Link to={"/women"}>Women</Link>
                <Link to={"/accessories"}>Accessories</Link>
                <Link to={"/cart"}>Cart</Link>
            </div>
            <hr></hr>
            <Outlet />
        </div>
    )
}

export default Navbar;