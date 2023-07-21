import { Link, Outlet } from "react-router-dom";

function Navbar() {

    return (
        <div>
            <div>
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