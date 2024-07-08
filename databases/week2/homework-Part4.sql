-- See ER Diagram in file "IKEA_ER_Diagram.png";
CREATE DATABASE IKEA;
SET NAMES utf8mb4;
CREATE TABLE customer (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255)
);
CREATE TABLE category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE product (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE store (
    store_id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255),
    phone VARCHAR(20)
);

CREATE TABLE `order` (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    total_price DECIMAL(10, 2) NOT NULL
);

-- -- -- -- -- -- -- -- -- -- -- 
-- Junction Tables
-- -- -- -- -- -- -- -- -- -- -- 

CREATE TABLE category_product (
    category_id INT,
    product_id INT,
    PRIMARY KEY (category_id, product_id),
    FOREIGN KEY (category_id) REFERENCES category(category_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);
CREATE TABLE customer_order (
    customer_id INT,
    order_id INT,
    PRIMARY KEY (customer_id, order_id),
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY (order_id) REFERENCES `order`(order_id)
);
CREATE TABLE order_store (
    order_id INT,
    store_id INT,
    PRIMARY KEY (order_id, store_id),
    FOREIGN KEY (order_id) REFERENCES `order`(order_id),
    FOREIGN KEY (store_id) REFERENCES store(store_id)
);
CREATE TABLE order_product (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES `order`(order_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE store_product (
    store_id INT,
    product_id INT,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (store_id, product_id),
    FOREIGN KEY (store_id) REFERENCES store(store_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);



INSERT INTO customer (name, address, phone, email)
VALUES ('John Doe', '123 Main St, Anytown, USA', '555-1234', 'john.doe@example.com'),
       ('Jane Smith', '456 Elm St, Othertown, USA', '555-5678', 'jane.smith@example.com');

INSERT INTO category (name)
VALUES ('Bedroom'),
       ('Kitchen'),
       ('Office'),
       ('Outdoor'),
       ('Living Room'),
       ('Kids');

INSERT INTO product (name, description, price)
VALUES 
    ('Queen Bed', 'Elegant queen-sized bed frame for the bedroom', 499.99),
    ('Kitchen Mixer', 'Versatile kitchen mixer for baking and cooking', 129.99),
    ('Office Chair', 'Comfortable ergonomic chair for the office', 199.99),
    ('Outdoor Table', 'Durable outdoor dining table for patio or garden', 299.99),
    ('TV', 'High-definition smart TV with advanced features', 1799.99),
    ('Kids Bed', 'Colorful and fun bed frame for children', 249.99),
    ('Bookshelf', 'Stylish bookshelf for organizing books and decor', 149.99),
    ('Sofa', 'Comfortable sofa for living room lounging', 699.99),
    ('Microwave', 'Compact microwave oven for quick heating', 79.99),
    ('Garden Chair', 'Relaxing chair for outdoor garden spaces', 49.99),
    ('Play Table', 'Colorful play table for children activities', 89.99),
    ('Desk Lamp', 'Adjustable desk lamp for focused lighting', 29.99);


INSERT INTO store (location, phone)
VALUES ('Dybbølsbro 4, 1577 København V', '5555-9999'),
       ('Nybrovej 2, 2820 Gentofte', '5555-8888');

INSERT INTO `order` (order_date, total_price)
VALUES ('2024-07-08', 2299.98),
       ('2024-07-07', 59.98);


-- -- -- -- -- -- -- -- -- -- -- 
-- Junction Tables Inserts
-- -- -- -- -- -- -- -- -- -- -- 
INSERT INTO category_product (category_id, product_id)
VALUES 
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (3, 7),
    (5, 8),
    (2, 9),
    (4, 10),
    (6, 11),
    (3, 12);

INSERT INTO customer_order (customer_id, order_id)
VALUES
    (1, 1),
    (2, 2);

INSERT INTO order_store (order_id, store_id)
VALUES
    (1, 2),  
    (2, 1);

INSERT INTO order_product (order_id, product_id, quantity)
VALUES
    (1, 1, 1),
    (1, 5, 1),
    (2, 12, 2);

INSERT INTO store_product (store_id, product_id, stock_quantity)
VALUES 
    (1, 1, 10), (1, 2, 15), (1, 3, 20), (1, 4, 12),
    (1, 5, 8), (1, 6, 18), (1, 7, 25), (1, 8, 30),
    (1, 9, 22), (1, 10, 35), (1, 11, 15), (1, 12, 28),
    (2, 1, 8), (2, 2, 10), (2, 3, 18), (2, 4, 15),
    (2, 5, 6), (2, 6, 12), (2, 7, 20), (2, 8, 25),
    (2, 9, 20), (2, 10, 30), (2, 11, 10), (2, 12, 22);

-- See ER Diagram in file "IKEA_ER_Diagram.png";