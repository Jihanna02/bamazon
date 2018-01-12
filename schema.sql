CREATE DATABASE bamazon;

CREATE TABLE products (
    item_id int NOT NULL AUTO_INCREMENT,
    product_name varchar(100),
    department_name varchar(25),
    price int,
    stock_quantity int,
    PRIMARY KEY (item_id)
);