import { Dress } from "./dresses";

export interface Toy extends Dress{
    id: number;
    img: string;
    description: string;
    price: number;
    likes: number; 
    is_liked: boolean;
}

export const toys = [{
    id:1,
    img: 'https://m.media-amazon.com/images/I/81RvVAsdZEL._AC_UY327_FMwebp_QL65_.jpg',
    description: 'Bluetrunk Dinosaur Easter Eggs with Toys Inside, Easter Basket Stuffers Gifts Easter Party Favors, Dino Eggs Jumbo Dinosaur',
    price: 25.99,
    likes: 0,
    is_liked: false
},
{
    id:2,
    img: 'https://m.media-amazon.com/images/I/61KwAUX6sEL._AC_UY327_FMwebp_QL65_.jpg',
    description: 'Squishmallows Official KellyToy Micromallows 2.5” Mystery Squad Series 2 in Sealed Capsule Plush Stuffed Toy (2 Pack (Capsule Colors Will Vary))',
    price: 15.99,
    likes: 0,
    is_liked: false
},
{
   id: 3,
   img: 'https://m.media-amazon.com/images/I/71Irr4I9oGL._AC_UY327_FMwebp_QL65_.jpg',
   description: 'Montessori Toy for 1 Year Old Toddlers - Wooden Sorting and Stacking Toys for Boys and Girls - Shape Sorter and Color Stacker Kids Wood Gifts',
   price: 19.99,
   likes: 0,
   is_liked: false
},
{   
   id: 4,
   img: 'https://m.media-amazon.com/images/I/716NYfCl-TL._AC_UY327_FMwebp_QL65_.jpg',
   description: 'hamovessi LCD Color Writing Toy-4.4-inch Doodle Scribbler Pad Learning Educational Toy Color Screen',
   price: 20.43,
   likes: 0,
   is_liked: false
},
{
   id: 5,
   img: 'https://m.media-amazon.com/images/I/61nd5ucvO-L._AC_UY327_FMwebp_QL65_.jpg',
   description: 'WAKAKAC 1/32 Scale Benz AMG GLE 63S SUV Toy Car',
   price: 15.98,
   likes: 0,
   is_liked: false
},
{
   id: 6,
   img: 'https://m.media-amazon.com/images/I/41eDWtcKJML._AC_UY327_FMwebp_QL65_.jpg',
   description: 'Eevee Plush Stuffed Animal',
   price: 16.99,
   likes: 0,
   is_liked: false
},
{
   id: 7,
   img: 'https://m.media-amazon.com/images/I/71xfa64UP3L._AC_UY327_FMwebp_QL65_.jpg',
   description: 'Anime Heroes One Piece Chopper Action Figure',
   price: 18.99,
   likes: 0,
   is_liked: false,
},
{
   id: 8,
   img: 'https://m.media-amazon.com/images/I/81Uzugl4LXL._AC_UY327_FMwebp_QL65_.jpg',
   description: 'CubicFun 3D Puzzles for Kids Ages 4-8 Arts and Crafts for Kids Ages 8-12 Pirate Treasure Ship, Toys for 5+ Year Old Boys Girls DIY Sailing Boat Model Kits',
   price: 19.99,
   likes: 0,
   is_liked: false
}
];