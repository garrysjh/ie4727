CREATE TABLE IF NOT EXISTS 
Orders( 
    `id` int NOT NULL AUTO_INCREMENT, 
    `orderDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    `javaQuantity` int NOT NULL DEFAULT 0, 
    `javaSubtotal` DECIMAL(10,2) NOT NULL, 
    `cafeDrinkId` int NOT NULL DEFAULT 2, 
    `cafeQuantity` int NOT NULL DEFAULT 0, 
    `cafeSubtotal` DECIMAL(10,2) NOT NULL, 
    `cappQuantity` int NOT NULL DEFAULT 0, 
    `cappDrinkId`int NOT NULL DEFAULT 4, 
    `cappSubtotal` DECIMAL(10,2) NOT NULL, 
    `totalPrice` DECIMAL(10,2) NOT NULL, 
    primary key(id));


CREATE TABLE IF NOT EXISTS
Prices(
    `id` int NOT NULL AUTO_INCREMENT,
    `itemName` varchar(50) NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    primary key(id)
);

INSERT INTO Prices WHERE NOT EXISTS (id, itemName, prices)
VALUES(1, 'java', 2.00),
(2, 'cafeSingle', 3.00),
(3, 'cafeDouble', 4.00),
(4, 'cappSingle', 4.75),
(5, 'cappDouble', 5.75);