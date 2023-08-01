import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/ProductPage.module.css"
import ImageSlider from "./ImageSlider";

export default function ProductPage(props) {

    const { addToCart, products } = useContext(ShopContext);
    const { pathname } = useLocation();
    // const navigate = useNavigate();

    const [pathId, setPathId] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [allImages, setAllImages] = useState([]);
    const [product, setProduct] = useState({});

    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState(null);

    function handleSizeChange(e) {
        setSize(e.target.value);
    }

    useEffect(() => {
        setPathId(pathname.split("/").pop());
    }, [])

    useEffect(() => {
        if (pathId !== "") {
            const prod = products.filter(item => item.value === pathId)[0];
            setProduct({ ...prod });
        }
    }, [pathId])

    useEffect(() => {
        if (pathId !== "") {
            let name = product.value.split("-");
            for (let i = 0; i < name.length; i++) {
                name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
            }
            name = name.join(" ");
            setProductName(name);
        }
    }, [product])

    useEffect(() => {
        if (pathId !== "") {
            setProductPrice(product.price);
        }
    }, [product])

    useEffect(() => {
        if (pathId !== "") {
            let newImages = [...allImages];
            newImages.push(product.srcOne);
            newImages.push(product.srcTwo);
            setAllImages([...newImages]);
        }
    }, [product])

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
                    <select id="sizes" onChange={handleSizeChange}>
                        <option value={null}>- Please select -</option>
                        <option value="XL">XL</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                    </select>
                </div>
                <div>
                    <button onClick={decreaseQuantity}>-</button>
                    <span>&nbsp;</span>
                    <span>{quantity}</span>
                    <span>&nbsp;</span>
                    <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={() => {
                    size ? (
                        addToCart(product.value, quantity, size),
                        setQuantity(0)
                    ) : null
                }}>Add to cart</button>
            </div>

        </div >
    );
}