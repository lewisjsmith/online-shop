import { v4 as uuid } from 'uuid';

// Mens

import cf1 from '../public/coat-1-front.png';
import cb1 from '../public/coat-1-back.png';
import cf2 from '../public/coat-2-front.png';
import cb2 from '../public/coat-2-back.png';
import cf3 from '../public/coat-3-front.png';
import cb3 from '../public/coat-3-back.png';
import cf4 from '../public/coat-4-front.png';
import cb4 from '../public/coat-4-back.png';
import cf5 from '../public/coat-5-front.png';
import cb5 from '../public/coat-5-back.png';

import sf1 from '../public/shirt-1-front.png';
import sb1 from '../public/shirt-1-back.png';
import sf2 from '../public/shirt-2-front.png';
import sb2 from '../public/shirt-2-back.png';

import bf1 from '../public/bib-1-front.png';
import bb1 from '../public/bib-1-back.png';
import bf2 from '../public/bib-2-front.png';
import bb2 from '../public/bib-2-back.png';

import midf1 from '../public/mid-1-front.png';
import midb1 from '../public/mid-1-back.png';
import midf2 from '../public/mid-2-front.png';
import midb2 from '../public/mid-2-back.png';
import midf3 from '../public/mid-3-front.png';
import midb3 from '../public/mid-3-back.png';

import acc1v1 from '../public/acc-1-v1.png';
import acc1v2 from '../public/acc-1-v2.png';
import acc2v1 from '../public/acc-2-v1.png';
import acc2v2 from '../public/acc-2-v2.png';
import acc3v1 from '../public/acc-3-v1.png';
import acc3v2 from '../public/acc-3-v2.png';

// Womens

import wcf1 from '../public/wcoat-1-front.png';
import wcb1 from '../public/wcoat-1-back.png';
import wcf2 from '../public/wcoat-2-front.png';
import wcb2 from '../public/wcoat-2-back.png';
import wcf3 from '../public/wcoat-3-front.png';
import wcb3 from '../public/wcoat-3-back.png';
import wcf4 from '../public/wcoat-4-front.png';
import wcb4 from '../public/wcoat-4-back.png';
import wcf5 from '../public/wcoat-5-front.png';
import wcb5 from '../public/wcoat-5-back.png';

import wmidf1 from '../public/wmid-1-front.png';
import wmidb1 from '../public/wmid-1-back.png';
import wmidf2 from '../public/wmid-2-front.png';
import wmidb2 from '../public/wmid-2-back.png';
import wmidf3 from '../public/wmid-3-front.png';
import wmidb3 from '../public/wmid-3-back.png';

import wsf1 from '../public/wshirt-1-front.png';
import wsb1 from '../public/wshirt-1-back.png';
import wsf2 from '../public/wshirt-2-front.png';
import wsb2 from '../public/wshirt-2-back.png';

import wbf1 from '../public/wbib-1-front.png';
import wbb1 from '../public/wbib-1-back.png';
import wbf2 from '../public/wbib-2-front.png';
import wbb2 from '../public/wbib-2-back.png';

const productExamples = [
    {
        categories: ["men", "coats"],
        value: "metal-blue-ski-jacket",
        price: 150.00,
        srcOne: cf1,
        srcTwo: cb1
    },
    {
        categories: ["men", "coats"],
        value: "green-ski-jacket",
        price: 120.00,
        srcOne: cf2,
        srcTwo: cb2
    },
    {
        categories: ["men", "coats"],
        value: "vibrant-purple-ski-jacket",
        price: 170.00,
        srcOne: cf3,
        srcTwo: cb3
    },
    {
        categories: ["men", "coats"],
        value: "long-khaki-rain-parka",
        price: 200.00,
        srcOne: cf4,
        srcTwo: cb4
    },
    {
        categories: ["men", "coats"],
        value: "ruby-performace-ski-coat",
        price: 210.00,
        srcOne: cf5,
        srcTwo: cb5
    },
    {
        categories: ["men", "midlayers"],
        value: "beige-black-stripe-midlayer",
        price: 100.00,
        srcOne: midf1,
        srcTwo: midb1
    },
    {
        categories: ["men", "midlayers"],
        value: "knitted-cream-midlayer",
        price: 110.00,
        srcOne: midf2,
        srcTwo: midb2
    },
    {
        categories: ["men", "midlayers"],
        value: "reinforced-shirt-green-cream",
        price: 110.00,
        srcOne: midf3,
        srcTwo: midb3
    },
    {
        categories: ["men", "shirts"],
        value: "camo-green-shirt",
        price: 70.00,
        srcOne: sf1,
        srcTwo: sb1
    },
    {
        categories: ["men", "shirts"],
        value: "neutral-shirt",
        price: 50.00,
        srcOne: sf2,
        srcTwo: sb2
    },
    {
        categories: ["men", "bibs"],
        value: "night-blue-bib",
        price: 200.00,
        srcOne: bf1,
        srcTwo: bb1
    },
    {
        categories: ["men", "bibs"],
        value: "camo-bib",
        price: 180.00,
        srcOne: bf2,
        srcTwo: bb2
    },

    {
        categories: ["women", "coats"],
        value: "crimson-pattern-jacket",
        price: 200.00,
        srcOne: wcf1,
        srcTwo: wcb1
    },
    {
        categories: ["women", "coats"],
        value: "spring-pattern-jacket",
        price: 180.00,
        srcOne: wcf2,
        srcTwo: wcb2
    },
    {
        categories: ["women", "coats"],
        value: "army-green-jacket",
        price: 150.00,
        srcOne: wcf3,
        srcTwo: wcb3
    },
    {
        categories: ["women", "coats"],
        value: "Winters-night-jacket",
        price: 220.00,
        srcOne: wcf4,
        srcTwo: wcb4
    },
    {
        categories: ["women", "coats"],
        value: "Snow-cover-jacket",
        price: 220.00,
        srcOne: wcf5,
        srcTwo: wcb5
    },
    {
        categories: ["women", "midlayers"],
        value: "deep-marine-midlayer",
        price: 100.00,
        srcOne: wmidf1,
        srcTwo: wmidb1
    },
    {
        categories: ["women", "midlayers"],
        value: "grey-knit-hoodie",
        price: 110.00,
        srcOne: wmidf2,
        srcTwo: wmidb2
    },
    {
        categories: ["women", "midlayers"],
        value: "cream-knitted-fleece",
        price: 110.00,
        srcOne: wmidf3,
        srcTwo: wmidb3
    },
    {
        categories: ["women", "shirts"],
        value: "coral-red-shirt",
        price: 70.00,
        srcOne: wsf1,
        srcTwo: wsb1
    },
    {
        categories: ["women", "shirts"],
        value: "light-Tee",
        price: 25.00,
        srcOne: wsf2,
        srcTwo: wsb2
    },
    {
        categories: ["women", "bibs"],
        value: "Midnight--bib",
        price: 200.00,
        srcOne: wbf1,
        srcTwo: wbb1
    },
    {
        categories: ["women", "bibs"],
        value: "Forest-bib",
        price: 180.00,
        srcOne: wbf2,
        srcTwo: wbb2
    },

    {
        categories: ["men", "women", "accessories"],
        value: "woodland-cap",
        price: 30.00,
        srcOne: acc1v1,
        srcTwo: acc1v2
    },
    {
        categories: ["men", "women", "accessories"],
        value: "Cream-bean",
        price: 25.00,
        srcOne: acc2v1,
        srcTwo: acc2v2
    },
    {
        categories: ["men", "women", "accessories"],
        value: "Grey-knit-beanie",
        price: 20.00,
        srcOne: acc3v1,
        srcTwo: acc3v2
    },

]

export default productExamples;