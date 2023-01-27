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