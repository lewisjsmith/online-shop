import { v4 as uuid } from 'uuid';

const productExamples = [
    {
        id: uuid(),
        categories: ["men", "coat"],
        value: "Metal Blue Ski Jacket",
        price: 150.00,
        srcOne: "coat_1_front.png",
        srcTwo: "coat_1_back.png"
    },
    {
        id: uuid(),
        categories: ["men", "coat"],
        value: "Green Ski Jacket",
        price: 120.00,
        srcOne: "coat_2_front.png",
        srcTwo: "coat_2_back.png"
    },
    {
        id: uuid(),
        categories: ["men", "coat"],
        value: "Vibrant Purple Ski Jacket",
        price: 170.00,
        srcOne: "coat_3_front.png",
        srcTwo: "coat_3_back.png"
    },
    {
        id: uuid(),
        categories: ["men", "midlayer"],
        value: "Beige Black Stripe Midlayer",
        price: 100.00,
        srcOne: "mid_1_front.png",
        srcTwo: "mid_1_back.png"
    },
    {
        id: uuid(),
        categories: ["men", "midlayer"],
        value: "Knitted Cream Midlayer",
        price: 110.00,
        srcOne: "mid_2_front.png",
        srcTwo: "mid_2_back.png"
    },
    {
        id: uuid(),
        categories: ["men", "midlayer"],
        value: "Reinforced Shirt Green-Cream",
        price: 110.00,
        srcOne: "mid_3_front.png",
        srcTwo: "mid_3_back.png"
    },
    {
        id: uuid(),
        categories: ["men", "shirt"],
        value: "Camo Green Shirt",
        price: 70.00,
        srcOne: "shirt_1_front.png",
        srcTwo: "shirt_1_back.png"
    },
    {
        id: uuid(),
        categories: ["men", "bib"],
        value: "Night Blue Bib",
        price: 200.00,
        srcOne: "bib_1_front.png",
        srcTwo: "bib_1_back.png"
    },
    
]

export default productExamples;