import { v4 as uuid } from 'uuid';

const productExamples = [
    {
        id: uuid(),
        categories: ["men"],
        value: "trousers"
    },
    {
        id: uuid(),
        categories: ["men", "accessories"],
        value: "glasses"
    },
    {
        id: uuid(),
        categories: ["women"],
        value: "top"
    },
]

export default productExamples;