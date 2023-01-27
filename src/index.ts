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
    try{
        res.status(200).send(getAllUsers())
    }catch(error:any){
        console.log(error)

        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})

app.get(`/products`, (req: Request, res: Response) => {
    try{
        res.status(200).send(getAllProducts())    
    }catch(error:any){
       console.log(error)

        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})

app.get(`/products/search`, (req: Request, res: Response) => {
    try{
        const q = req.query.q as string
        if(q.length<=0){
            res.status(400)
            throw new Error("Deve ter pelo menos um caractere")
        }
        const result = products.filter((product) => {
            return product.name.toLowerCase().includes(q.toLowerCase())    
        })
        res.status(200).send(result)
    }catch(error:any){
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})

app.post(`/users`, (req: Request, res: Response) => {
    try{
        const {id, email, password} = req.body as TUser
        
        if(!id){
            res.status(404)
            throw new Error("Adicione um ID para criar o usuario")
        }
        if(!email){
            res.status(404)
            throw new Error("Adicione um email para criar o usuario")
        }
        if(!password){
            res.status(404)
            throw new Error("Adicione uma senha para criar o usuario")
        }
        if(users.find((user) => user.id === id)){
            res.status(404)
            throw new Error("ID não disponivel, tente outro por favor");
        }
        if(users.find((user) => user.email === email)){
            res.status(404)
            throw new Error("email não disponivel, tente outro por favor");
        }

        createUser(id, email, password)
        res.status(201).send("Novo usuário registrado com sucesso")
    }catch(error:any){
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})

app.post(`/products`, (req: Request, res: Response) => {
    try{
        const {id, name, price, category} = req.body as TProduct
        
        if(!id){
            res.status(404)
            throw new Error("Adicione um ID para o produto")
        }
        if(!name){
            res.status(404)
            throw new Error("Adicione um nome para o produto")
        }
        if(!price){
            res.status(404)
            throw new Error("Adicione um preço para o produto")
        }
        if(!category){
            res.status(404)
            throw new Error("Adicione uma categoria para o produto")
        }
        if(products.find((product) => product.id === id)){
            res.status(404)
            throw new Error("ID não disponivel, tente outro por favor");
        }
        
        createProduct(id, name, price, category)
        res.status(201).send("Produto cadastrado com sucesso!")
    }catch(error:any){
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})

app.post(`/purchases`, (req: Request, res: Response) => {
    try{
        const {userId, productId, quantity, totalPrice} = req.body as TPurchase

        if(!userId){
            res.status(404)
            throw new Error("Insira um ID de usuario")
        }
        if(!productId){
            res.status(404)
            throw new Error("Insira um ID de produto")
        }
        if(!quantity){
            res.status(404)
            throw new Error("Insira a quantidade do produto que deseja")
        }
        if(!totalPrice){
            res.status(404)
            throw new Error("Insira o valor exato da compra")
        }
        if(!(users.find((user) => user.id === userId))){
            res.status(404)
            throw new Error("Insira um ID de usuario existente")
        }
        if(!(products.find((product) => product.id === productId))){
            res.status(404)
            throw new Error("Insira um ID de produto existente")
        }
        
        createPurchase(userId, productId, quantity, totalPrice)
        res.status(201).send("Compra realizada com sucesso")
    }catch(error:any){
            console.log(error)
            if(res.statusCode === 200){
                res.status(500)
            }
            res.send(error.message)
        }
    })

    app.get(`/products/:id`, (req: Request, res: Response) => {
        try{
            const id = req.params.id
            
            if(!(products.find((product) => product.id === id))){
                res.status(404)
                throw new Error("Insira um ID de produto existente")
            }
            res.status(200).send(getProductById(id))
        }catch(error:any){
            console.log(error)
            if(res.statusCode === 200){
                res.status(500)
            }
            res.send(error.message)
        }
    })

    app.get(`/users/:id/purchases`, (req: Request, res: Response) => {
        try{
            const id = req.params.id

            if(!(users.find((user) => user.id === id))){
                res.status(404)
                throw new Error("Insira um ID de usuario existente")
            }    
            res.status(200).send(getAllPurchasesFromUserId(id))
        }catch(error:any){
            console.log(error)
            if(res.statusCode === 200){
                res.status(500)
            }
            res.send(error.message)
        }
    })

app.delete(`/users/:id`, (req: Request, res: Response) => {
    try{
        const id = req.params.id

        if(!(users.find((user) => user.id === id))){
            res.status(404)
            throw new Error("Insira um ID existente para excluir o usuario")
        }
        const userIndex = users.findIndex((user) => user.id === id)
        if(userIndex >= 0) {
            users.splice(userIndex, 1)
        }
        res.status(200).send("Usuário excluido com sucesso")
    }catch(error:any){
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})

app.delete(`/products/:id`, (req: Request, res: Response) => {
    try{
        const id = req.params.id

        if(!(products.find((product) => product.id === id))){
            res.status(404)
            throw new Error("Insira um ID existente para excluir o produto")
        }
        const productIndex = products.findIndex((product) => product.id === id)
        if(productIndex >= 0){
            products.splice(productIndex, 1)
        }
        res.status(200).send("Produto excluido com sucesso")
    }catch(error:any){
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})

app.put(`/users/:id`, (req: Request, res: Response) => {
    try{
        const id = req.params.id

        if(!(users.find((user) => user.id === id))){
            res.status(404)
            throw new Error("Insira um ID existente para editar o usuario")
        }
       
        const newEmail = req.body.email as string | undefined    
        const newPassword = req.body.password as string | undefined      

        const user = users.find((user) => user.id === id)

        if(!newEmail){
            res.status(404)
            throw new Error("Insira o novo email")
        }
        if(!newPassword){
            res.status(404)
            throw new Error("Insira a nova senha")
        }
        if (user) {
            user.email = newEmail || user.email
            user.password = newPassword || user.password
        }
        res.status(200).send("Cadastro atualizado com sucesso")
    }catch(error:any){
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})

app.put(`/products/:id`, (req: Request, res: Response) => {
    try{
        const id = req.params.id

        if(!(products.find((product) => product.id === id))){
            res.status(404)
            throw new Error("Insira um ID existente para editar o produto")
        }

        const newName = req.body.name as string | undefined    
        const newPrice = req.body.price as number | undefined
        const newCategory = req.body.category as CATEGORY | undefined

        if(!newName){
            res.status(404)
            throw new Error("Insira o novo nome")
        }
        if(!newPrice){
            res.status(404)
            throw new Error("Insira o novo preço.")
        }
        if(!newCategory){
            res.status(404)
            throw new Error("Insira a nova categoria.")
        }

        const product = products.find((product) => product.id === id)

        if (product) {
            product.name = newName || product.name
            product.price = newPrice || product.price
            product.category = newCategory || product.category
        }
        res.status(200).send("Produto atualizado com sucesso")
    }catch(error:any){
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})