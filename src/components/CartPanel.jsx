import styles from '../styles/CartPanel.module.css';
import { Link } from 'react-router-dom';

export default function CartPanel(props) {

    return (
        <div className={props.show ? styles["show-panel"] : styles["hidden-panel"]} onClick={() => props.setShow(!props.show)}>
            <p>Cart</p>
            <Link to={"/cart"}>
                <button>Continue to Cart</button>
            </Link>
        </div>
    );
}