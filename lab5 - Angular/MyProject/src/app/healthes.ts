import { Dress } from "./dresses";

export interface Health extends Dress{
    id: number;
    img: string;
    description: string;
    price: number;
    likes: number; 
    is_liked: boolean;
}

export const healthes = [{
    id:1,
    img: 'https://m.media-amazon.com/images/I/61k+PHtQ4tL._AC_UL480_FMwebp_QL65_.jpg',
    description: 'ARGOMAX - Upgrated Retainer Mouth Guards Travel Case with Mirror Inside - Pink',
    price: 1.929,
    likes: 0,
    is_liked: false
},
{
    id:2,
    img: 'https://m.media-amazon.com/images/I/819Zt6VqJYL._SX466_.jpg',
    description: 'Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool, Eyebrow Razor, and Facial Razor with Precision Cover, 3 Count (Packaging May Vary)',
    price: 4.99,
    likes: 0,
    is_liked: false
},
{
   id: 3,
   img: 'https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_UL480_FMwebp_QL65_.jpg',
   description: 'CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Normal | Fragrance Free | 19 Oz',
   price: 15.44,
   likes: 0,
   is_liked: false
},
{   
   id: 4,
   img: 'https://m.media-amazon.com/images/I/81VWbVjvJqL._SX466_.jpg',
   description: 'CeraVe AM Facial Moisturizing Lotion SPF 30 | Oil-Free Face Moisturizer with Sunscreen | Non-Comedogenic | 3 Ounce',
   price: 11.87,
   likes: 0,
   is_liked: false
},
{
   id: 5,
   img: 'https://m.media-amazon.com/images/I/61nD93IEBKL._AC_UL480_FMwebp_QL65_.jpg',
   description: 'TruSkin Vitamin C Serum for Face, Anti Aging Serum with Hyaluronic Acid, Vitamin E, Organic Aloe Vera and Jojoba Oil, Hydrating & Brightening Serum for Dark Spots, Fine Lines and Wrinkles, 1 fl oz',
   price: 15.98,
   likes: 0,
   is_liked: false
},
{
   id: 6,
   img: 'https://m.media-amazon.com/images/I/61nD93IEBKL._AC_UL480_FMwebp_QL65_.jpg',
   description: 'Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Oral Rinse Helps Kill 99% of Bad Breath Germs, Prevents Cavities, Strengthens Teeth, ADA-Accepted, Fresh Mint, 1 L',
   price: 16.99,
   likes: 0,
   is_liked: false
},
{
   id: 7,
   img: 'https://m.media-amazon.com/images/I/81QKudDoSwL._SX466_.jpg',
   description: 'Crest 3D Vivid Plus Teeth Whitening Kit, Individual Basic Flavorless Whitestrips, 24 Count',
   price: 18.99,
   likes: 0,
   is_liked: false,
},
{
   id: 8,
   img: 'https://m.media-amazon.com/images/I/61scf7kONPL._AC_UL480_FMwebp_QL65_.jpg',
   description: 'PanOxyl Acne Foaming Wash Benzoyl Peroxide 10% Maximum Strength Antimicrobial, 5.5 Oz',
   price: 9.99,
   likes: 0,
   is_liked: false
}
];