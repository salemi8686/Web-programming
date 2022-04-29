import { Dress } from "./dresses";

export interface Pick extends Dress{
    id: number;
    img: string;
    description: string;
    price: number;
    likes: number; 
    is_liked: boolean;
}

export const picks = [{
    id:1,
    img: 'https://m.media-amazon.com/images/I/61nvmVTF12L._AC_UL480_QL65_.jpg',
    description: 'essence | Lash Princess False Lash Effect Mascara | Gluten & Cruelty Free',
    price: 16.99,
    likes: 0,
    is_liked: false
},
{
    id:2,
    img: 'https://m.media-amazon.com/images/I/81a10H+CuJL._AC_UL480_QL65_.jpg',
    description: 'Neutrogena Makeup Remover Cleansing Face Wipes, Daily Cleansing Facial Towelettes to Remove Waterproof Makeup and Mascara, Alcohol-Free, Value Twin Pack, 25 Count, 2 Pack',
    price: 15.99,
    likes: 0,
    is_liked: false
},
{
   id: 3,
   img: 'https://m.media-amazon.com/images/I/819Zt6VqJYL._AC_UL480_QL65_.jpg',
   description: 'Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool, Eyebrow Razor, and Facial Razor with Precision Cover, 3 Count (Packaging May Vary)',
   price: 9.00,
   likes: 0,
   is_liked: false
},
{   
   id: 4,
   img: 'https://m.media-amazon.com/images/I/81VWbVjvJqL._SX466_.jpg',
   description: 'CeraVe AM Facial Moisturizing Lotion SPF 30 | Oil-Free Face Moisturizer with Sunscreen | Non-Comedogenic | 3 Ounce',
   price: 20.43,
   likes: 0,
   is_liked: false
},
{
   id: 5,
   img: 'https://m.media-amazon.com/images/I/71GIRogtyNL._AC_UL480_QL65_.jpg',
   description: 'REVLON One-Step Volumizer Original 1.0 Hair Dryer and Hot Air Brush, Black',
   price: 15.98,
   likes: 0,
   is_liked: false
},
{
   id: 6,
   img: 'https://m.media-amazon.com/images/I/81vNiROdiIL._AC_UL480_QL65_.jpg',
   description: 'Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Oral Rinse Helps Kill 99% of Bad Breath Germs, Prevents Cavities, Strengthens Teeth, ADA-Accepted, Fresh Mint, 1 L',
   price: 16.99,
   likes: 0,
   is_liked: false
},
{
   id: 7,
   img: 'https://m.media-amazon.com/images/I/61nD93IEBKL._AC_UL480_QL65_.jpg',
   description: 'TruSkin Vitamin C Serum for Face, Anti Aging Serum with Hyaluronic Acid, Vitamin E, Organic Aloe Vera and Jojoba Oil',
   price: 18.99,
   likes: 0,
   is_liked: false,
},
{
   id: 8,
   img: 'https://m.media-amazon.com/images/I/51DbQev1thL._AC_UL480_QL65_.jpg',
   description: 'CeraVe Hydrating Facial Cleanser | Moisturizing Non-Foaming Face Wash with Hyaluronic Acid, Ceramides and Glycerin | 16 Fluid Ounce',
   price: 13.59,
   likes: 0,
   is_liked: false
}
];