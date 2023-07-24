import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {

    // Nav element?
    return (
        <div>
            <nav>
                <ul className={styles["nav-wrapper"]}>
                    <li><Link to={"/"}>Logo</Link></li>
                    <li><Link to={"/men"}>Men</Link></li>
                    <li><Link to={"/women"}>Women</Link></li>
                    <li><Link to={"/accessories"}>Accessories</Link></li>
                    <li><Link to={"/cart"}>Cart</Link></li>
                </ul>
            </nav>
            <hr></hr>
            <Outlet />
        </div>
    )
}

export default Navbar;