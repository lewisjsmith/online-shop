import { useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import createFilter from '../helperFunctions/createFilter';
import ProductCard from './ProductCard';
import { ShopContext } from '../App';
import styles from '../styles/StorePage.module.css';

export default function StorePage() {

    const { windowQuery, products } = useContext(ShopContext);

    const [productSort, setProductSort] = useState(null);
    const [productList, setProductList] = useState([]);
    const [pageName, setPageName] = useState("");

    const obj = useLocation();

    useEffect(() => {
        setProductList([...products])
    }, []);

    useEffect(() => {
        const pathname = obj.pathname;
        const splitName = pathname.split("/");
        const umbrella = splitName[1].charAt(0).toUpperCase() + splitName[1].slice(1) + "'s"
        const subcategory = splitName[2].charAt(0).toUpperCase() + splitName[2].slice(1)
        setPageName(umbrella + " " + subcategory);
    }, [obj])

    const categoriesList = createFilter(obj.pathname);

    function handleChange(e) {
        setProductSort(e.target.value);
    }

    const sortedProducts = productSort ? productList.sort((a, b) => {
        switch (productSort) {
            case ("highest"):
                if (a.price < b.price) {
                    return 1
                } else if (a.price > b.price) {
                    return -1
                } else {
                    return 0;
                }
                break;
            case ("lowest"):
                if (a.price < b.price) {
                    return -1
                } else if (a.price > b.price) {
                    return 1
                } else {
                    return 0;
                }
                break;
            case ("az"):
                if (a.value.charAt(0) < b.value.charAt(0)) {
                    return -1
                } else if (a.value.charAt(0) > b.value.charAt(0)) {
                    return 1
                } else {
                    return 0;
                }
                break;
            case ("za"):
                if (a.value.charAt(0) < b.value.charAt(0)) {
                    return 1
                } else if (a.value.charAt(0) > b.value.charAt(0)) {
                    return -1
                } else {
                    return 0;
                }
        }
    }) : productList;

    return (
        <div className={windowQuery.matches ? styles["store-page-wrapper"] : styles["store-page-wrapper-mobile"]}>

            <h3 className={styles["page-name"]}>
                {pageName}
            </h3>

            <div className={styles["filter-menu-wrapper"]}>
                <select className={styles["filter-menu"]} onChange={handleChange}>
                    <option value={null}>By Release Date</option>
                    <option value={"highest"}>Price highest to lowest</option>
                    <option value={"lowest"}>Price lowest to highest</option>
                    <option value={"az"}>Name A to Z</option>
                    <option value={"za"}>Name Z to A</option>
                </select>
            </div>


            <ul className={styles["store-list"]}>
                {categoriesList.length === 2 ? (
                    sortedProducts.filter(item => item.categories.includes(categoriesList[0]))
                        .filter(item => item.categories.includes(categoriesList[1])).map(item => {
                            {
                                return (
                                    <li className={styles["list-item"]} key={item.value}>
                                        <ProductCard item={item} src={item.srcOne} price={item.price} />
                                    </li>
                                );
                            }
                        })
                ) : (
                    sortedProducts
                        .filter(item => item.categories.includes(categoriesList[0])).map(item => {
                            {
                                return (
                                    <li className={styles["list-item"]} key={item.value}>
                                        <ProductCard item={item} src={item.srcOne} price={item.price} />
                                    </li>
                                );
                            }
                        }
                        )
                )
                }
            </ul>
        </div>
    );
}