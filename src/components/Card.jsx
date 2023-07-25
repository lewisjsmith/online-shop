import { useContext, useState } from "react";
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
        if(x > 0){
            setQuantity(x - 1);
        }
    }

    return (
        <div>
            {props.item.value}
            <div>
                <button onClick={decreaseQuantity}>-</button>
                <span>&nbsp;</span>
                <span>{quantity}</span>
                <span>&nbsp;</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
            <button onClick={() => {
                addToCart(props.item.id, quantity); 
                setQuantity(0);
                }}>Add to cart</button>
        </div>
    );
}