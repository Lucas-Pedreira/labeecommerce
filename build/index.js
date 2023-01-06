"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
(0, database_1.createUser)("s2", "gi@gmail.com", "laranja");
console.log((0, database_1.getAllUsers)());
(0, database_1.createProduct)("23", "Air Jordan 4", 1000, types_1.CATEGORY.SHOES);
console.table((0, database_1.getAllProducts)());
console.log((0, database_1.getProductById)("23"));
console.log("Pesquisa");
(0, database_1.queryProductsByName)("jordan");
(0, database_1.createPurchase)("s2", "23", 2, 2000);
console.log((0, database_1.getAllPurchasesFromUserId)("s2"));
//# sourceMappingURL=index.js.map