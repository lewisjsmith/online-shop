import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/ProductPage.module.css"
import ImageSlider from "./ImageSlider";

export default function ProductPage() {

    const { addToCart, products } = useContext(ShopContext);
    const { pathname } = useLocation();
    // const navigate = useNavigate();

    const [pathId, setPathId] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [allImages, setAllImages] = useState([]);

    const [slide, setSlide] = useState({});

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setPathId(pathname.split("/").pop());
    }, [])

    useEffect(() => {
        if (pathId !== "") {
            const prod = products.filter(item => item.id === pathId)[0];
            setProductName(prod.value);
        }
    }, [pathId])

    useEffect(() => {
        if (pathId !== "") {
            const prod = products.filter(item => item.id === pathId)[0];
            setProductPrice(prod.price);
        }
    }, [pathId])

    useEffect(() => {
        if (pathId !== "") {
            const prod = products.filter(item => item.id === pathId)[0];
            let newImages = [...allImages];
            import("../assets/" + prod.srcOne)
                .then(image => {
                    newImages = [...newImages].concat([image.default]);
                })
                .then(() => import("../assets/" + prod.srcTwo))
                .then(image => {
                    newImages = [...newImages].concat([image.default])
                })
                .then(() => setAllImages([...newImages]));
        }
    }, [pathId])


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
        <div className={styles["page-wrapper"]}>

            <ImageSlider allImages={allImages} />

            <div className={styles["info-wrapper"]}>
                {/* Back button - requires history */}
                <p className={styles["info-detail"]}>{productName}</p>
                <p className={styles["info-detail"]}>£{(Math.round(productPrice * 100) / 100).toFixed(2)}</p>
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

        </div>
    );
}