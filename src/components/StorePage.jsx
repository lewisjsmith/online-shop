import { useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import createFilter from '../helperFunctions/createFilter';
import Card from './Card';
import { ShopContext } from '../App';

export default function StorePage() {

    const { products } = useContext(ShopContext);

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        console.log(products)
        setProductList([...products])
    }, []);

    const obj = useLocation();
    const categoriesList = createFilter(obj.pathname);

    return (
        <div>
            <ul>
                {categoriesList.length === 2 ? (
                    productList.filter(item => item.categories.includes(categoriesList[0])).filter(item => item.categories.includes(categoriesList[1])).map(item => {
                        {
                            return (
                                <li key={item.id}>
                                    <Card item={item} />
                                </li>
                            );
                        }
                    })
                ) : (
                    productList.filter(item => item.categories.includes(categoriesList[0])).map(item => {
                        {
                            return (
                                <li key={item.id}>
                                    <Card item={item} />
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