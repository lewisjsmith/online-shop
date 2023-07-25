import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import productExamples from '../productExamples';
import createFilter from '../helperFunctions/createFilter';
import Card from './Card';

export default function StorePage() {

    const [productList, setProductList] = useState(productExamples)

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