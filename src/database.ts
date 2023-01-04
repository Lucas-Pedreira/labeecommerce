import { TUser, TProduct, TPurchase } from "./types";
import { CATEGORY } from "./types";

export const users: TUser[]=[
    {
    id: "1912",
    email: "lucasantos@labenu.com",
    password: "Sfc1912**",
    },
    {
    id: "2010",
    email: "lucasantista@labenu.com",
    password: "Sfc2010",
    }
]

export const product: TProduct[]=[
    {
        id: "123",
        name: "Camisa 1 Santos FC",
        price: 250,
        category: CATEGORY.CLOTHES
    },
    {
        id: "321",
        name: "Camisa 2 Santos FC",
        price: 250,
        category: CATEGORY.CLOTHES
    }  
]

export const purchase: TPurchase[]=[
    {
        userId: "1912",
        productId: "123",
        quantity: 2,
        totalPrice: 500
    },
    {
        userId: "2010",
        productId: "321",
        quantity: 3,
        totalPrice: 750
    }
]