-- Active: 1674824210103@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users (id, email, password)
VALUES 
("a001", "lucas@gmail.com", "lucas123"),
("a002", "kyra@gmail.com", "kyra123"),
("a003", "fred@gmail.com", "fred123");

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO products
VALUES
("p1", "Camiseta preta", 80, "Roupas"),
("p2", "Tênis branco", 400, "Calçados"),
("p3", "Short preto", 90, "Roupas"),
("p4", "Relógio", 300, "Acessórios"),
("p5", "Óculos de sol", 250, "Acessórios");


--Get All Users
SELECT * FROM users;

--Get All Products
SELECT * FROM products;

--Search Product By Name
SELECT * FROM products
WHERE name LIKE "%Relógio";

--Create User
INSERT INTO users
VALUES
("a004", "di@gmail.com", "di123");

--Create Product
INSERT INTO products
VALUES ("p6", "Meia", 30, "Roupas");

--Get Product by ID
SELECT * FROM products
WHERE id LIKE "p3";

--Delete User by ID
DELETE FROM users
WHERE id LIKE "a003";  

--Delete Product by ID 
DELETE FROM products
WHERE id LIKE "p1"; 

--Edit User by ID 
UPDATE users  
SET password = "nova123"
WHERE id = "a001";

--Edit Product by ID
UPDATE products
SET name = "Meias", price = 40
WHERE id = "p6";

--Get All Users ASC
SELECT * FROM users
ORDER BY email ASC;

--Get All Products price ASC
SELECT * FROM products
ORDER BY price ASC
LIMIT 20;

--Get All Products
SELECT * FROM products
WHERE price >= 100 AND price <= 300
ORDER BY price ASC;

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL UNIQUE NOT NULL,
    paid INTEGER NOT NULL,
    delivered_at TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);

DROP TABLE purchases;

SELECT * FROM purchases;

INSERT INTO purchases (id, total_price, paid, delivered_at, buyer_id)
VALUES
    ("p1", 80, 1, NULL, "a001"),
    ("p3", 90, 1, NULL, "a001"),
    ("p2", 400, 0, NULL, "a002"),
    ("p6", 40, 0, NULL, "a002"),
    ("p4", 300, 1, "2023-01-20", "a004"),
    ("p5", 250, 1, "2023-01-20", "a004");

SELECT * FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id
WHERE users.id = "a001";

CREATE TABLE purchases_products (
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO purchases_products (purchase_id, product_id, quantity)
VALUES
    ("m01", "p3", 3),
    ("m02", "p5", 2),
    ("m03", "p6", 5);

SELECT * FROM purchases_products;

SELECT * FROM purchases_products
INNER JOIN products
ON purchases_products.product_id = products.id;