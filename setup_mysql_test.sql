-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS `services_test_db`;
CREATE USER IF NOT EXISTS 'services_test2'@'localhost' IDENTIFIED BY 'services';
GRANT ALL PRIVILEGES ON `services_test_db`.* TO 'services_test2'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'services_test2'@'localhost';
FLUSH PRIVILEGES;
USE `services_test_db`;

-- Create User Table If not Exists
CREATE TABLE IF NOT EXISTS `Users` ( 
            user_id VARCHAR(50) NOT NULL, user_username VARCHAR(40) NOT NULL UNIQUE,
            user_password VARCHAR(50) NOT NULL, user_email VARCHAR(50) NOT NULL UNIQUE,
            user_cash INT NOT NULL DEFAULT 0,
            PRIMARY KEY ( user_id ));

-- Create Categories Table If not Exists
CREATE TABLE IF NOT EXISTS `Categories` ( 
            category_id VARCHAR(50) NOT NULL, category_name VARCHAR(50) NOT NULL,
            PRIMARY KEY(category_id));

-- Create Partners Table If not Exists
CREATE TABLE IF NOT EXISTS `Partners` (
            partner_id VARCHAR(50) NOT NULL, partner_name VARCHAR(50) NOT NULL,
            partner_description VARCHAR(255) NOT NULL,
            partner_address VARCHAR(100) NOT NULL, partner_phone VARCHAR(20) NOT NULL, 
            partner_username VARCHAR(50), partner_email VARCHAR(50) NOT NULL UNIQUE,
            partner_password VARCHAR(50) NOT NULL, 
            partner_wallet INT DEFAULT 0, category_id VARCHAR(50) NOT NULL,
            PRIMARY KEY (partner_id),
            FOREIGN KEY (category_id) REFERENCES Categories(category_id));

-- Create Services Table If not Exists
CREATE TABLE IF NOT EXISTS `Services` ( 
            service_id VARCHAR(50) NOT NULL, service_name VARCHAR(50) NOT NULL,
            service_description VARCHAR(256), service_price INT NOT NULL, 
            service_time INT NOT NULL, partner_id VARCHAR(50) NOT NULL, 
            PRIMARY KEY(service_id), 
            FOREIGN KEY (partner_id) REFERENCES Partners(partner_id) ON DELETE CASCADE);

-- Create Orders Table If not Exists
CREATE TABLE IF NOT EXISTS `Orders` ( 
            order_id VARCHAR(50) NOT NULL, order_amount INT NOT NULL, 
            order_date DATETIME NOT NULL, user_id VARCHAR(50) NOT NULL,
            partner_id VARCHAR(50) NOT NULL, 
            PRIMARY KEY( order_id ),
            FOREIGN KEY ( user_id ) REFERENCES Users(user_id),
            FOREIGN KEY ( partner_id ) REFERENCES Partners(partner_id));

-- Create Reviews Table If not Exists
CREATE TABLE IF NOT EXISTS `Reviews` (
            review_id VARCHAR(50) NOT NULL, review_description VARCHAR(256),
            review_stars TINYINT NOT NULL, review_date DATE NOT NULL,
            user_id VARCHAR(50) NOT NULL, partner_id VARCHAR(50) NOT NULL,
            PRIMARY KEY ( review_id ), 
            FOREIGN KEY ( user_id ) REFERENCES Users(user_id),
            FOREIGN KEY ( partner_id ) REFERENCES Partners(partner_id));

-- Create Orders_Services Table If not Exists (N to N Table)
CREATE TABLE IF NOT EXISTS `Orders_Services` (
            order_id VARCHAR(50) NOT NULL,
            service_id VARCHAR(50) NOT NULL,
            FOREIGN KEY ( order_id ) REFERENCES Orders(order_id) 
            ON DELETE CASCADE,
            FOREIGN KEY ( service_id ) REFERENCES Services(service_id)
            ON DELETE CASCADE);


-- Create Users(user_id, user_name,  user_password,
--                  user_email, user_cash)
INSERT INTO Users VALUES
('id-01', 'user-01', 'password', 'user01@gmail.com', 5000),
('id-02', 'user-02', 'password2', 'user02@gmail.com', 15000),
('id-03', 'user-03', 'password3', 'user03@gmail.com', 25000);

-- Create Categories(category_id, category_name)

INSERT INTO Categories VALUES

('id-01', 'Estetica'),
('id-02', 'Hogar'),
('id-03', 'Category-3');

-- Create Partners(partner_id, partner_name, partner_address, partner_phone,
--   partner_user, partner_password, partner_cash, category_id) 


INSERT INTO Partners VALUES
('id-01', 'company 01', 'description','address 01', '12121212', 
'company-user01', 'email2','password', 12350, 'id-01'), 
('id-02', 'company 02', 'description', 'address 02', '12121212', 
'company-user02','email3', 'password', 14550, 'id-01'),
('id-03', 'company 03', 'description','address 03', '12121212', 
'company-user03', 'email4','password', 1250, 'id-02'),
('id-04', 'company 21', 'description', 'address 01', '12121212', 
'company-user01', 'email5','password', 12350, 'id-01');


-- Create Services(service_id, service_name, service_description
--          service_price, service_time, partner_id)

INSERT INTO Services VALUES
('id-01', 'service name 1', 'this is a description', 850, 60, 'id-01'),
('id-02', 'service name 2', 'this is a description', 300, 60, 'id-01'),
('id-03', 'service name 3', 'this is a description', 250, 60, 'id-02');

-- Create Orders (order_id, order_amount, order_date, user_id,
--             partner_id)

INSERT INTO Orders VALUES 
('id-01', 5000, '1995-01-29', 'id-02', 'id-01'),
('id-02', 1000, '1995-02-02', 'id-01', 'id-01'),
('id-03', 500, '1995-12-01', 'id-03', 'id-02');

-- Create Reviews (review_id, review_description, review_starts,
--     review_date, user_id, partner_id)

INSERT INTO Reviews VALUES
('id-01', 'review description 1', 3, '2012-03-05', 'id-01', 'id-02'),
('id-02', 'review description 2', 4, '2013-05-15', 'id-02', 'id-02'),
('id-03', 'review description 3', 5, '2014-06-25', 'id-01', 'id-03');


-- Create Order-Services N to N table (order_id, service_id)

INSERT INTO Orders_Services VALUES
('id-01','id-03'),
('id-01','id-02'),
('id-01','id-01');
