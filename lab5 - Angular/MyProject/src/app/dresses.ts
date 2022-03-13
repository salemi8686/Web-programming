export interface Dress{
     id: number;
     img: string;
     description: string;
     price: number;
     likes: number; 
     is_liked: boolean;
}

export const dresses = [{
     id:1,
     img: 'https://m.media-amazon.com/images/I/71dynQkbrIS._MCnd_AC_UL480_FMwebp_QL65_.jpg',
     description: 'PRETTYGARDEN Womens Summer Casual Boho Dress Floral Print Ruffle Puff Sleeve High Waist Midi Beach Dresses',
     price: 38.99,
     likes: 0,
     is_liked: false
},
{
     id:2,
     img: 'https://m.media-amazon.com/images/I/71i4v7gpYBL._MCnd_AC_UL480_FMwebp_QL65_.jpg',
     description: 'PRETTYGARDEN Womens Summer Wrap Maxi Dress Casual Boho Floral V Neck Short Sleeve Ruffle Hem Split Beach Long Dresses',
     price: 39.14,
     likes: 0,
     is_liked: false
},
{
    id: 3,
    img: 'https://m.media-amazon.com/images/I/51-MebX9LyL._MCnd_AC_UL480_FMwebp_QL65_.jpg',
    description: 'WOOSEA Womens Split Bodycon Mermaid Evening Cocktail Long Dress',
    price: 46.15,
    likes: 0,
    is_liked: false
},
{   
    id: 4,
    img: 'https://m.media-amazon.com/images/I/51sVinVyoJL._MCnd_AC_UL480_FMwebp_QL65_.jpg',
    description: 'ANRABESS Womens Casual Loose Sundress Long Dress Sleeveless Split Maxi Dresses Summer Beach Dress with Pockets',
    price: 31.00,
    likes: 0,
    is_liked: false
},
{
    id: 5,
    img: 'https://m.media-amazon.com/images/I/71wRLHGkumS._MCnd_AC_UL480_FMwebp_QL65_.jpg',
    description: 'ECOWISH Womens Dresses Elegant Ruffles Cap Sleeves Summer A-Line Midi Dress',
    price: 45.98,
    likes: 0,
    is_liked: false
},
{
    id: 6,
    img: 'https://m.media-amazon.com/images/I/61nB6OFznhL._MCnd_AC_UL480_FMwebp_QL65_.jpg',
    description: 'Verdusa Womens Elegant Ribbed Knit Bell Sleeve Fit and Flare Midi Dress',
    price: 46.99,
    likes: 0,
    is_liked: false
},
{
    id: 7,
    img: 'https://m.media-amazon.com/images/I/71LBoO5rBCL._MCnd_AC_UL480_FMwebp_QL65_.jpg',
    description: 'LALAGEN Womens Plus Size Lace Cold Shoulder Long Swing Evening Party Maxi Dress',
    price: 38.99,
    likes: 0,
    is_liked: false,
},
{
    id: 8,
    img: 'https://m.media-amazon.com/images/I/310rRkI2-rS._SX38_SY50_CR,0,0,38,50_.jpg',
    description: 'oxiuly Womens Vintage Half Sleeve O-Neck Contrast Casual Pockets Party Swing Dress OX253',
    price: 29.99,
    likes: 0,
    is_liked: false
}
];