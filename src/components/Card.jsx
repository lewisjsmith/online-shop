import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../App";

export default function Card(props) {

    const [quantity, setQuantity] = useState(0);
    const { addToCart } = useContext(ShopContext);

    function increaseQuantity() {
        const x = quantity;
        setQuantity(x + 1);
    }

    function decreaseQuantity() {
        const x = quantity;
        if (x > 0) {
            setQuantity(x - 1);
        }
    }

    return (
        <div>
            <p>{props.item.value}</p>
            <p><Link to={`/product/${props.item.id}`}>Link to page</Link></p>
        </div>
    );
}