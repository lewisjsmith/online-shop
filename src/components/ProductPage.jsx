import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../App";

export default function ProductPage(props) {

    const navigate = useNavigate();

    const { pathname } = useLocation();

    const [pathId, setPathId] = useState("");

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const [quantity, setQuantity] = useState(0);

    const { addToCart, products } = useContext(ShopContext);

    useEffect(() => {
        setPathId(pathname.split("/").pop());
    },[])

    useEffect(() => {
        if (pathId !== ""){
            const prod = products.filter(item => item.id === pathId)[0];
            setProductName(prod.value);
            setProductPrice(prod.price);
        }

    },[pathId])    

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
            {/* Back button - requires history */}
            <p>{productName}</p>
            <p>£{(Math.round(productPrice*100)/100).toFixed(2)}</p>
            <div>
                <button onClick={decreaseQuantity}>-</button>
                <span>&nbsp;</span>
                <span>{quantity}</span>
                <span>&nbsp;</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
            <button onClick={() => {
                addToCart(pathId, quantity);
                setQuantity(0);
            }}>Add to cart</button>
        </div>
    );
}