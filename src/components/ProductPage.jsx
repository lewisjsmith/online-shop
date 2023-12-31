import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../App";
import styles from "../styles/ProductPage.module.css"
import ImageSlider from "./ImageSlider";
import LargeButton from "./LargeButton";

export default function ProductPage() {

    const { windowQuery, addToCart, products } = useContext(ShopContext);
    const location = useLocation();

    const [pathId, setPathId] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [allImages, setAllImages] = useState([]);
    const [product, setProduct] = useState({});

    const [size, setSize] = useState(null);

    function handleSizeChange(e) {
        setSize(e.target.value);
    }

    useEffect(() => {
        setPathId(location.pathname.split("/").pop());
    }, [location])

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
            let newImages = [];
            newImages.push(product.srcOne);
            newImages.push(product.srcTwo);
            setAllImages([...newImages]);
        }
    }, [product])

    return (

        <div>

            {windowQuery.matches && <div className={styles["page-wrapper"]}>

                <div className={styles["image-slider-wrapper"]}>
                    <ImageSlider allImages={allImages} />
                </div>

                <div className={styles["info-wrapper"]}>
                    <p className={styles["info-detail"]}>{productName}</p>
                    <p className={styles["info-detail"]}>£{(Math.round(productPrice * 100) / 100).toFixed(2)}</p>
                    <div>
                        <select id="sizes" onChange={handleSizeChange}>
                            <option value={"none"}>- Please select -</option>
                            <option value="XL">XL</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="S">S</option>
                            <option value="XS">XS</option>
                        </select>
                    </div>
                    <div className={styles["info-checkout-wrapper"]}>
                        <LargeButton text={"ADD TO CART"} fn={function () {
                            size && size !== "none" ? (
                                addToCart(product.value, 1, size)
                            ) : null
                        }} />
                    </div>
                </div>

            </div>}

            {!windowQuery.matches && <div>
                <div className={styles["page-wrapper-mobile"]}>

                    <div className={styles["image-slider-wrapper-mobile"]}>
                        <ImageSlider allImages={allImages} />
                    </div>

                    <div className={styles["info-wrapper-mobile"]}>
                        <p className={styles["info-detail"]}>{productName}</p>
                        <p className={styles["info-detail"]}>£{(Math.round(productPrice * 100) / 100).toFixed(2)}</p>
                        <div>
                            <select id="sizes" onChange={handleSizeChange}>
                                <option value={"none"}>- Please select -</option>
                                <option value="XL">XL</option>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="S">S</option>
                                <option value="XS">XS</option>
                            </select>
                        </div>
                        <div className={styles["info-checkout-wrapper"]}>
                            <LargeButton text={"ADD TO CART"} fn={function () {
                                size && size !== "none" ? (
                                    addToCart(product.value, 1, size)
                                ) : null
                            }} />
                        </div>
                    </div>

                </div>
            </div>}

        </div >
    );
}