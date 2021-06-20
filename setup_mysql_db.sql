-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS `services_db`;
CREATE USER IF NOT EXISTS 'services'@'localhost' IDENTIFIED BY 'services';
GRANT ALL PRIVILEGES ON `services_db`.* TO 'services'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'services'@'localhost';
FLUSH PRIVILEGES;
USE `services_db`;

-- Create User Table If not Exists
CREATE TABLE IF NOT EXISTS `Users` ( 
            user_id VARCHAR(50) NOT NULL, user_username VARCHAR(40) NOT NULL UNIQUE,
            user_password VARCHAR(255) NOT NULL, user_email VARCHAR(50) NOT NULL UNIQUE,
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
            partner_password VARCHAR(255) NOT NULL, 
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
('id-01', 'Robby Coiffeur', 'Specialty in Wigs and Hairweaving','address 01', '90000001', 
'company-user01', 'robby@email.com','password1', 12350, 'id-01'), 
('id-02', 'Lu Stetics', 'Botox and Facial Rejuvenation', 'address 02', '90000002', 
'company-user02','lu@email.com', 'password2', 14550, 'id-01'),
('id-03', 'Mica Hairdressing', 'African Look and Crazy Hair','address 03', '90000003', 
'company-user03', 'mica@email.com','password3', 1250, 'id-01'),
('id-04', 'Nico Spa', 'Comprehensive Treatment', 'address 04', '90000004', 
'company-user04', 'nico@email.com','password4', 1350, 'id-02'),
('id-05', 'Charly Hands', 'Thai Massage Therapy','address 05', '90000005', 
'company-user05', 'charly@email.com','password5', 2350, 'id-02'),
('id-06', 'Seba Massages', 'Chiropractic and Wellness','address 06', '90000006', 
'company-user06', 'seba@email.com','password6', 1235, 'id-02'),
('id-07', 'Huey Environmental Hygiene', 'Cleaning and Maintenance Services','address 07', '90000007', 
'company-user07', 'huey@email.com','password7', 1230, 'id-03'),
('id-08', 'Matt Superclean', 'Wash and Fold Lundry','address 08', '90000008', 
'company-user08', 'matt@email.com','password8', 18350, 'id-03'),
('id-09', 'Tucutucu Laundry Station', 'Environmentally Friendly Dry Cleaning','address 09', '90000009', 
'company-user09', 'tucu@email.com','password9', 12340, 'id-03');

-- Create Services(service_id, service_name, service_description
--          service_price, service_time, partner_id)

INSERT INTO Services VALUES
('id-01', 'Wig', 'Find your permanent wigs and those for special occasions', 850, 60, 'id-01'),
('id-02', 'Hairweaving', 'Hair extensions and men hair replacement systems', 300, 60, 'id-01'),
('id-03', 'Botox', 'Cosmetic botox therapies for all ages', 540, 60, 'id-02'),
('id-04', 'Facial Treatment', 'Treatments to buff away the top layers of your skin, which results in the reduced appearance of fine lines and wrinkles ', 430, 60, 'id-02'),
('id-05', 'Hairstyle', 'The most modern haircuts and hairstyles by the most avant-garde specialists', 670, 60, 'id-03'),
('id-06', 'Hair Dyeing', 'The highest variety of colors and tones without damaging the hair', 560, 60, 'id-03'),
('id-07', 'Hot Stone Massage', 'Therapeutic massage that uses heated stones for people who have muscle pain and tension or who simply want to relax', 230, 60, 'id-04'),
('id-08', 'Aromatherapy Massage', 'Full-body massage for people who want to have an emotional healing component to their massage', 360, 60, 'id-04'),
('id-09', 'Thai Massage', 'Massage that works the entire body using a sequence of movements that are similar to yogic stretching', 980, 60, 'id-05'),
('id-10', 'Reflexology Massage', 'Massage that uses gentle to firm pressure on different pressure points for people who are looking to relax or restore their natural energy levels', 350, 60, 'id-05'),
('id-11', 'Chiropractic Massage', 'Your chiropractor uses traditional adjustments to release any subluxations that could be causing your pain and discomfort, as well as promoting healing to your muscle fibers and soft tissue.', 840, 60, 'id-06'),
('id-12', 'Deep Tissue Massage', 'Your massage therapist uses slow strokes and deep finger pressure to relieve tension from the deepest layers of your muscles and connective tissues', 290, 60, 'id-06'),
('id-13', 'Office cleaning', 'Day and night cleaning options', 500, 60, 'id-07'),
('id-14', 'Industrial cleaning', 'Specialized expertise for industry-specific needs', 760, 60, 'id-07'),
('id-15', 'Cloth Laundering', 'Double-checked for supreme cleanliness and folded before being returned to you', 900, 60, 'id-08'),
('id-16', 'Pick Up and Delivery Service', 'Extended service for even more convenience', 290, 60, 'id-08'),
('id-17', 'Clothes Dry Cleaning', 'Specially beneficial for garments made from fibers that don’t react well when exposed to water, such as silk or wool', 560, 60, 'id-09'),
('id-18', 'Rug Cleaning', ' 7 Step approach to our Rug Cleaning services to ensure we get you the best results possible', 520, 60, 'id-09');

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
