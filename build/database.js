"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchase = exports.product = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
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
];
exports.product = [
    {
        id: "123",
        name: "Camisa 1 Santos FC",
        price: 250,
        category: types_1.CATEGORY.CLOTHES
    },
    {
        id: "321",
        name: "Camisa 2 Santos FC",
        price: 250,
        category: types_1.CATEGORY.CLOTHES
    }
];
exports.purchase = [
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
];
function createUser(id, email, password) {
    const newUser = {
        id: id,
        email: email,
        password: password
    };
    exports.users.push(newUser);
    console.log("Cadastro realizado com sucesso");
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, CATEGORY) {
    const newProduct = {
        id,
        name,
        price,
        category: CATEGORY
    };
    exports.product.push(newProduct);
    console.log("Produto adicionado com sucesso");
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.product;
}
exports.getAllProducts = getAllProducts;
function getProductById(idToSearch) {
    return (exports.product.filter((product) => {
        return product.id === idToSearch;
    }));
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    const query = exports.product.filter((products) => {
        return (products.name.toLowerCase().includes(q.toLowerCase()));
    });
    console.log(query);
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    };
    exports.purchase.push(newPurchase);
    console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchase.filter((purchases) => {
        return (purchases.userId.toLowerCase().includes(userIdToSearch.toLowerCase()));
    });
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map