"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.product = exports.users = void 0;
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
        category: types_1.CATEGORY.SHOES
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
//# sourceMappingURL=database.js.map