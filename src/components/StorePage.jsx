import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function StorePage() {

    const [productList, setProductList] = useState([
        {
            id: uuid(),
            categories: ["men"],
            value: "trousers"
        },
        {
            id: uuid(),
            categories: ["accessories"],
            value: "glasses"
        },
        {
            id: uuid(),
            categories: ["women"],
            value: "top"
        },
    ])

    const obj = useLocation();
    const pathFilter = obj.pathname.slice(1);

    return (
        <div>
            <ul>
                {productList.filter(item => item.categories.includes(pathFilter)).map(item => {
                    { return <li key={item.id}>{item.value}</li> }
                })}
            </ul>
        </div>
    );
}