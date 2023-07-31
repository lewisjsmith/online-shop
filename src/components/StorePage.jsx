import { useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import createFilter from '../helperFunctions/createFilter';
import Card from './Card';
import { ShopContext } from '../App';
import styles from '../styles/StorePage.module.css';

export default function StorePage() {

    const { products } = useContext(ShopContext);

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList([...products])
    }, []);

    const obj = useLocation();
    const categoriesList = createFilter(obj.pathname);

    return (
        <ul className={styles["store-list"]}>
            {categoriesList.length === 2 ? (
                productList.filter(item => item.categories.includes(categoriesList[0]))
                    .filter(item => item.categories.includes(categoriesList[1])).map(item => {
                        {
                            return (
                                <li className={styles["list-item"]} key={item.value}>
                                    <Card item={item} src={item.srcOne} price={item.price}/>
                                </li>
                            );
                        }
                    })
            ) : (
                productList
                    .filter(item => item.categories.includes(categoriesList[0])).map(item => {
                        {
                            return (
                                <li className={styles["list-item"]} key={item.value}>
                                    <Card item={item} src={item.srcOne} price={item.price}/>
                                </li>
                            );
                        }
                    }
                    )
            )
            }
        </ul>
    );
}