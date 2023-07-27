import { v4 as uuid } from 'uuid';

const productExamples = [
    {
        id: uuid(),
        categories: ["men"],
        value: "trousers",
        price: 10.00
    },
    {
        id: uuid(),
        categories: ["men", "accessories"],
        value: "glasses",
        price: 25.50
    },
    {
        id: uuid(),
        categories: ["women"],
        value: "top",
        price: 15.33
    },
]

export default productExamples;