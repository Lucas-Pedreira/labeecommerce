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

SELECT * FROM users;

SELECT * FROM products;