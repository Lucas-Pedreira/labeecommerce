import { TUser, TProduct, TPurchase, CATEGORY } from "./types";

export const users: TUser[]=[
    {
    id: "123",
    email: "lucas@gmail.com",
    password: "Sfc1912**",
    },
    {
    id: "456",
    email: "andre@gmail.com",
    password: "Sfc2010",
    }
]

export const products: TProduct[]=[
    {
        id: "jersey1",
        name: "Camisa 1 Santos FC",
        price: 250,
        category: CATEGORY.CLOTHES
    },
    {
        id: "jersey2",
        name: "Camisa 2 Santos FC",
        price: 250,
        category: CATEGORY.CLOTHES
    }  
]

export const purchase: TPurchase[]=[
    {
        userId: "456",
        productId: "jersey1",
        quantity: 2,
        totalPrice: 500
    },
    {
        userId: "123",
        productId: "jersey2",
        quantity: 3,
        totalPrice: 750
    }
]

export function createUser ( id: string, email: string, password: string): void {
    const newUser: TUser = {
        id: id,
        email:email,
        password: password
    }
    users.push(newUser)
    console.log("Cadastro realizado com sucesso");
}

export function getAllUsers(): TUser[]{
    return users
}

export function createProduct (id: string, name: string, price: number, CATEGORY: CATEGORY){
    const newProduct: TProduct = {
        id,
        name,
        price,
        category: CATEGORY
    }
    products.push(newProduct)
    console.log("Produto adicionado com sucesso");
}

export function getAllProducts(): TProduct[]{
    return products
}

export function getProductById(idToSearch: string): TProduct[] | undefined {
    return (products.filter((product) => {
        return product.id === idToSearch
    }))
}

export function queryProductsByName(q: string){
    const query = products.filter(
        (products) => {
            return(products.name.toLowerCase().includes(q.toLowerCase()))
        }
    )
    console.log(query)
}

export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number){
    const newPurchase: TPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }
    purchase.push(newPurchase)
    console.log("Compra realizada com sucesso")
}

export function getAllPurchasesFromUserId(userIdToSearch: string): TPurchase[]{
    return purchase.filter(
        (purchases) => {
            return(purchases.userId.toLowerCase().includes(userIdToSearch.toLowerCase()))
        }
    )}