export type TUser ={
    id: string,
    email: string,
    password: string
}

export enum CATEGORY {
    ACCESSORIES = "Acessórios",
    CLOTHES = "Roupas",
    SHOES = "Calçados"
}

export type TProduct ={
    id: string,
    name: string,
    price: number,
    category: CATEGORY
}

export type TPurchase ={
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}