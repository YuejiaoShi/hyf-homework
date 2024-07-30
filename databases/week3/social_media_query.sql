-- Active: 1719748709143@@127.0.0.1@3306@hyf_social_media
-- Exercises Requirements: https://github.com/HackYourFuture-CPH/databases/blob/main/lesson3/social_media_exercise.md
CREATE DATABASE hyf_social_media DEFAULT CHARACTER SET = 'utf8mb4';

USE hyf_social_media;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    registration_datetime DATETIME
);

CREATE TABLE post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    creation_datetime DATETIME,
    update_datetime DATETIME,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    creation_datetime DATETIME,
    update_datetime DATETIME,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    parent_comment_id INT DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (post_id) REFERENCES post (id),
    FOREIGN KEY (parent_comment_id) REFERENCES comment (id)
);

CREATE TABLE reaction (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('like','highfive','laugh','cry') NOT NULL,
    user_id INT NOT NULL,
    post_id INT DEFAULT NULL,
    comment_id INT DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (post_id) REFERENCES post (id),
    FOREIGN KEY (comment_id) REFERENCES comment (id),
    CONSTRAINT unique_user_reaction UNIQUE (user_id, type, post_id, comment_id),
    CHECK (
    (post_id IS NOT NULL AND comment_id IS NULL) OR 
    (post_id IS NULL AND comment_id IS NOT NULL)
)
);


CREATE TABLE friendship (
    user_id1 INT NOT NULL,
    user_id2 INT NOT NULL,
    PRIMARY KEY (user_id1, user_id2),
    FOREIGN KEY (user_id1) REFERENCES user (id),
    FOREIGN KEY (user_id2) REFERENCES user (id),
    CHECK (user_id1 != user_id2)
);

-- Insert users
INSERT INTO user (name, email, password, registration_datetime)
VALUES ('John Doe', 'john.doe@example.com', 'password123', '2022-07-16 09:00:00'),
       ('Jane Smith', 'jane.smith@kfc.com', 'securepass', '2023-07-14 10:30:00'),
       ('Michael Johnson', 'michael.johnson@gmail.com', 'mikepass', '2021-07-18 11:45:00');


-- Insert posts
INSERT INTO post (title, content, creation_datetime, update_datetime, user_id)
VALUES ('First Post', 'This is the content of the first post.', '2024-07-14 12:00:00', NULL, 1),
       ('Second Post', 'This is another post content.', '2024-07-16 13:30:00', NULL, 2);


-- Insert comments
INSERT INTO comment (content, creation_datetime, update_datetime, user_id, post_id, parent_comment_id)
VALUES ('Great post!', '2024-07-18 12:30:00', NULL, 2, 1, NULL),
       ('Nice content.', '2024-07-18 13:45:00', NULL, 3, 2, NULL),
       ('I agree!', '2024-07-18 14:00:00', NULL, 1, 1, NULL);

-- Insert reactions
INSERT INTO reaction (type, user_id, post_id, comment_id) VALUES
('like', 1, 1, NULL),
('highfive', 1, 1, NULL),
('highfive', 2, NULL, 1),
('laugh', 3, 1, NULL),
('cry', 1, NULL, 2);

-- Insert friendships
INSERT INTO friendship (user_id1, user_id2) VALUES
(1, 2),
(2, 3);
