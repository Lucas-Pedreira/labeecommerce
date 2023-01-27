import { users, products, purchase, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database";
import { CATEGORY, TProduct, TPurchase, TUser } from "./types";
import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong')
})

app.get(`/users`, (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.get(`/products`, (req: Request, res: Response) => {
    res.status(200).send(products)
})

app.get(`/products/search`, (req: Request, res: Response) => {
    const q = req.query.q as string

    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase())
    })
    res.status(200).send(result)
})

app.post(`/users`, (req: Request, res: Response) => {
    const {id, email, password} = req.body as TUser
    const newUser = {
        id, email, password
    }
    users.push(newUser)
    res.status(201).send("Novo usuário registrado com sucesso")
})

app.post(`/products`, (req: Request, res: Response) => {
    const {id, name, price, category} = req.body as TProduct
    const newProduct = {
        id, name, price, category
    }
    products.push(newProduct)
    res.status(201).send("Prodruto cadastrado com sucesso")
})

app.post(`purchases`, (req: Request, res: Response) => {
    const {userId, productId, quantity, totalPrice} = req.body as TPurchase
    const newPurchase = {
        userId, productId, quantity, totalPrice
    }
    purchase.push(newPurchase)
    res.status(201).send("Compra realizada com sucesso")
})

app.get(`/products/:id`, (req: Request, res: Response) => {
    const id = req.params.id
    res.status(200).send(getProductById(id))
})

app.get(`/users/:id/purchases`, (req: Request, res: Response) => {
    const id = req.params.id
    res.status(200).send(getAllPurchasesFromUserId(id))
})

app.delete(`/users/:id`, (req: Request, res: Response) => {
    const id = req.params.id
    const userIndex = users.findIndex((user) => user.id === id)

    if (userIndex >= 0){
        users.splice(userIndex, 1)
    }
    res.status(200).send("Usuário deletado com sucesso")
})

app.delete(`/products/:id`, (req: Request, res: Response) => {
    const id = req.params.id
    const productIndex = products.findIndex((product) => product.id === id)

    if(productIndex >=0){
        products.splice(productIndex, 1)
    }
    res.status(200).send("Produto deletado com sucesso")
})

app.put(`/users/:id`, (req: Request, res: Response) => {
    const id = req.params.id

    const newEmail = req.body.email as string | undefined
    const newPassword = req.body.password as string| undefined

    const user = users.find((user) => user.id === id)

    if(user){
        user.email = newEmail || user.email
        user.password = newPassword || user.password
    }
    res.status(200).send("Cadastro atualizado com sucesso")
})

app.put(`/products/:id`, (req: Request, res: Response) => {
    const id = req.params.id

    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category as CATEGORY | undefined

    const product = products.find((product) => product.id === id)

    if(product){
        product.name = newName || product.name
        product.price = newPrice || product.price
        product.category = newCategory || product.category
    }
    res.status(200).send("Produto atualizado com sucesso")
})

createUser("s2", "gi@gmail.com", "laranja")
console.log(getAllUsers());

createProduct("23", "Air Jordan 4", 1000, CATEGORY.SHOES)
console.table(getAllProducts());

console.log(getProductById("23"));

console.log("Pesquisa");
queryProductsByName("jordan")

createPurchase("s2", "23", 2, 2000)

console.log(getAllPurchasesFromUserId("s2"));
