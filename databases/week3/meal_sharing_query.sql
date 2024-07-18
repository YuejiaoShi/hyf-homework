-- Active: 1719748709143@@127.0.0.1@3306@meal_sharing
-- Homework Requirement: https://github.com/HackYourFuture-CPH/databases/blob/main/lesson3/README.md#homework

CREATE DATABASE meal_sharing
    DEFAULT CHARACTER SET = 'utf8mb4';
USE meal_sharing;

--------------------------------------------
-- Data model ------------------------------
--------------------------------------------
CREATE TABLE Meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL(10, 2),
    created_date DATE
);

CREATE TABLE Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255) UNIQUE,
    FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE SET NULL
);


CREATE TABLE Review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE SET NULL
);

-- insert examples
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Italian Dinner', 'Delicious Italian cuisine', 'Restaurant A', '2024-06-20 19:00:00', 20, 50.00, '2024-06-18'),
       ('Mexican Fiesta', 'Authentic Mexican dishes', 'Mexican Night', '2024-06-25 18:30:00', 15, 40.00, '2024-06-18'),
       ('Family Brunch', 'Weekend brunch menu', 'Cafe C', '2024-06-21 11:00:00', 30, 25.00, '2024-06-18'),
       ('French Cuisine Night', 'Exquisite French dishes', 'Bistro D', '2024-06-23 20:00:00', 25, 65.00, '2024-06-18'),
       ('Sushi Extravaganza', 'Fresh sushi and sashimi', 'Tokyo Sushi', '2024-06-27 19:30:00', 18, 55.00, '2024-06-18'),
       ('BBQ Feast', 'All-you-can-eat BBQ', 'Park F', '2024-06-28 17:00:00', 40, 30.00, '2024-06-18');

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 1, '2024-07-18', '123-456-7890', 'John Doe', 'john.doe@gmail.com'),
       (4, 2, '2024-07-19', '987-654-3210', 'Jane Smith', 'jane.smith@kfc.com'),
       (3, 3, '2024-07-20', '456-789-0123', 'Sarah Lee', 'sarah.lee@yahoo.com'),
       (6, 1, '2024-07-22', '789-012-3456', 'Michael Johnson', 'michael.johnson@hotmail.com'),
       (2, 2, '2024-07-25', '321-654-9870', 'Emily Brown', 'emily.brown@ku.com');

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Fantastic BBQ Experience', 'Great selection and flavors!', 3, 4, '2024-06-29'),
       ('Lovely French Dinner', 'Perfect ambiance and delicious food.', 4, 5, '2024-06-24'),
       ('Sushi Heaven', 'Freshness at its best.', 5, 5, '2024-06-28'),
       ('Great Italian Dinner', 'Amazing food and service!', 1, 5, '2024-06-21'),
       ('Fun Mexican Night', 'Loved the atmosphere and food.', 2, 4, '2024-06-26'),
       ('Disappointing Experience', 'The food was cold and the service was slow. Not worth the price.', 6, 2, '2024-06-30');


--------------------------------------------
-- Queries ---------------------------------
--------------------------------------------

-- **** Meal Queries ***************
-- 1. Get all meals
SELECT * FROM `Meal`;
-- 2. Add a new meal
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('Lasagna', 'Homemade lasagna with garlic bread', 'Italian Kitchen', '2024-07-05 19:00:00', 25, 40.00, '2024-07-01');
-- 3. Get a meal with any id, fx 1
SELECT * FROM Meal WHERE id = 5;
-- 4. Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Meal` SET title = 'Classic Sushi', price = 52.5 WHERE id = 5;
-- 5. Delete a meal with any id, fx 1
DELETE FROM `Meal` WHERE id = 6;

-- **** Review Queries *************
-- 1. Get all reviews
SELECT * FROM `Review`;
-- 2. Add a new review
INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES ('Nice Sushi', 'The sushi was fresh with excellent service.', 1, 5, '2024-07-18');
-- 3. Get a review with any id, fx 1
SELECT * FROM `Review` WHERE id = 2;
-- 4. Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review SET description = 'The sauce was a little bit sour.', stars = 4 WHERE id = 4;
-- 5. Delete a review with any id, fx 1
DELETE FROM `Review` WHERE id = 6;

-- **** Additional Queries *************
-- 1. Get meals that has a price smaller than a specific price fx 50
SELECT * FROM `Meal` WHERE price < 50;
-- 2. Get meals that still has available reservations
SELECT Meal.title, Meal.location, Reserved.total_guests, Meal.max_reservations
FROM Meal LEFT JOIN (
    SELECT meal_id, COALESCE(SUM(number_of_guests), 0) AS total_guests
    FROM Reservation GROUP BY meal_id
) AS Reserved ON Meal.id = Reserved.meal_id
WHERE Reserved.total_guests < Meal.max_reservations OR Reserved.total_guests IS NULL;
-- 3. Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM Meal WHERE title LIKE '%Sushi%';
-- 4. Get meals that has been created between two dates
SELECT * FROM Meal WHERE created_date BETWEEN '2024-06-20' AND '2024-06-25';
-- 5. Get only specific number of meals fx return only 3 meals
SELECT * FROM Meal LIMIT 3;
-- 6. Get the meals that have good reviews
SELECT Meal.title, ROUND(AVG(Review.stars), 2) AS avg_stars FROM Meal
JOIN Review ON Meal.id = Review.meal_id
GROUP BY meal_id HAVING avg_stars >= 4;
-- 7. Get reservations for a specific meal sorted by created_date
-- 8. Sort all meals by average number of stars in the reviews