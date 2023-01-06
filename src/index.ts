import { users, product, purchase, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database";
import { CATEGORY } from "./types";

createUser("s2", "gi@gmail.com", "laranja")
console.log(getAllUsers());

createProduct("23", "Air Jordan 4", 1000, CATEGORY.SHOES)
console.table(getAllProducts());

console.log(getProductById("23"));

console.log("Pesquisa");
queryProductsByName("jordan")

createPurchase("s2", "23", 2, 2000)

console.log(getAllPurchasesFromUserId("s2"));
