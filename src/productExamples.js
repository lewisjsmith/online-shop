import { v4 as uuid } from 'uuid';

import cf1 from './assets/coat-1-front.png';
import cb1 from './assets/coat-1-back.png';
import cf2 from './assets/coat-2-front.png';
import cb2 from './assets/coat-2-back.png';
import cf3 from './assets/coat-3-front.png';
import cb3 from './assets/coat-3-back.png';

import sf1 from './assets/shirt-1-front.png';
import sb1 from './assets/shirt-1-back.png';

import bf1 from './assets/bib-1-front.png';
import bb1 from './assets/bib-1-back.png';

import wcf1 from './assets/wcoat-1-front.png';
import wcb1 from './assets/wcoat-1-back.png';
import wcf2 from './assets/wcoat-2-front.png';
import wcb2 from './assets/wcoat-2-back.png';
import wcf3 from './assets/wcoat-3-front.png';
import wcb3 from './assets/wcoat-3-back.png';

import midf1 from './assets/mid-1-front.png';
import midb1 from './assets/mid-1-back.png';
import midf2 from './assets/mid-2-front.png';
import midb2 from './assets/mid-2-back.png';
import midf3 from './assets/mid-3-front.png';
import midb3 from './assets/mid-3-back.png';

import wmidf1 from './assets/wmid-1-front.png';
import wmidb1 from './assets/wmid-1-back.png';
import wmidf2 from './assets/wmid-2-front.png';
import wmidb2 from './assets/wmid-2-back.png';
import wmidf3 from './assets/wmid-3-front.png';
import wmidb3 from './assets/wmid-3-back.png';

const productExamples = [
    {
        id: uuid(),
        categories: ["men", "coat"],
        value: "Metal Blue Ski Jacket",
        price: 150.00,
        srcOne: cf1,
        srcTwo: cb1
    },
    {
        id: uuid(),
        categories: ["men", "coat"],
        value: "Green Ski Jacket",
        price: 120.00,
        srcOne: cf2,
        srcTwo: cb2
    },
    {
        id: uuid(),
        categories: ["men", "coat"],
        value: "Vibrant Purple Ski Jacket",
        price: 170.00,
        srcOne: cf3,
        srcTwo: cb3
    },
    {
        id: uuid(),
        categories: ["men", "midlayer"],
        value: "Beige Black Stripe Midlayer",
        price: 100.00,
        srcOne: midf1,
        srcTwo: midb1
    },
    {
        id: uuid(),
        categories: ["men", "midlayer"],
        value: "Knitted Cream Midlayer",
        price: 110.00,
        srcOne: midf2,
        srcTwo: midb2
    },
    {
        id: uuid(),
        categories: ["men", "midlayer"],
        value: "Reinforced Shirt Green-Cream",
        price: 110.00,
        srcOne: midf3,
        srcTwo: midb3
    },
    {
        id: uuid(),
        categories: ["men", "shirt"],
        value: "Camo Green Shirt",
        price: 70.00,
        srcOne: sf1,
        srcTwo: sb1
    },
    {
        id: uuid(),
        categories: ["men", "bib"],
        value: "Night Blue Bib",
        price: 200.00,
        srcOne: bf1,
        srcTwo: bb1
    },

    
    {
        id: uuid(),
        categories: ["women", "coat"],
        value: "Crimson-Pattern Jacket",
        price: 200.00,
        srcOne: wcf1,
        srcTwo: wcb1
    },
    {
        id: uuid(),
        categories: ["women", "coat"],
        value: "Spring-Pattern Jacket",
        price: 200.00,
        srcOne: wcf2,
        srcTwo: wcb2
    },
    {
        id: uuid(),
        categories: ["women", "coat"],
        value: "Army Green Jacket",
        price: 200.00,
        srcOne: wcf3,
        srcTwo: wcb3
    },
    {
        id: uuid(),
        categories: ["women", "midlayer"],
        value: "Deep Marine Midlayer",
        price: 100.00,
        srcOne: wmidf1,
        srcTwo: wmidb1
    },
    {
        id: uuid(),
        categories: ["women", "midlayer"],
        value: "Grey Knit Hoodie",
        price: 110.00,
        srcOne: wmidf2,
        srcTwo: wmidb2
    },
    {
        id: uuid(),
        categories: ["women", "midlayer"],
        value: "Cream Knitted Fleece",
        price: 110.00,
        srcOne: wmidf3,
        srcTwo: wmidb3
    },

]

export default productExamples;