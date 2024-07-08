-- Exercise details: https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/class_exercises.md

-- ***************************************
-- ************** 1. Queries *************
-- ***************************************
-- Data from last week: https://github.com/HackYourFuture-CPH/databases/blob/main/lesson1/lesson-data.sql

-- 1. Get all the tasks assigned to Pavel;
select * from `user`;
SELECT task.title AS tasks_assigned_to_pavel FROM task JOIN `user` ON task.user_id = user.id WHERE user.name LIKE "%Pavel%";

-- 2. Find how many tasks each user is responsible for;
SELECT user.name, Count(task.id) FROM user LEFT JOIN task ON task.user_id = user.id GROUP BY user.name

-- 3. Find how many tasks with a status=Done each user is responsible for;
SELECT user.name, Count(task.id) AS done_task_num FROM user 
LEFT JOIN task ON task.user_id = user.id 
LEFT JOIN status ON task.status_id = status.id WHERE status.name = 'done' 
GROUP BY user.name


-- ********************************************************************
-- ******* 2. Design and implement a database for existing data *******
-- ********************************************************************
-- Data from: https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/articles_example.json
CREATE DATABASE articles;
SET NAMES utf8mb4;

CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE articles (
    article_id INT PRIMARY KEY,
    article_title VARCHAR(255) NOT NULL,
    article_content VARCHAR(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tags (
    tag_id INT PRIMARY KEY AUTO_INCREMENT,
    tag_name VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE articles_authors (
    article_id INT NOT NULL,
    author_id INT NOT NULL,
    PRIMARY KEY (article_id, author_id),
		FOREIGN KEY (article_id) REFERENCES articles(article_id),
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE articles_tags (
    article_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (article_id, tag_id),
		FOREIGN KEY (article_id) REFERENCES articles(article_id),
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO articles (article_id, article_title, article_content) VALUES
(1, 'BREAKING NEWS: Water is wet!', 'Scientists have discovered that water is wet, it\'s amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(2, 'Heavy Snowfall Expected this Weekend', 'Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(3, 'BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!', 'Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ');

INSERT INTO authors (author_id, author_name) VALUES
(1, 'James Smith'),
(2, 'Jane Jones'),
(3, 'Aliya Awad'),
(4, 'Igor Vladimir'),
(5, 'Kim Jensen')

INSERT INTO tags (tag_name) VALUES
('science'),
('breaking'),
('weather'),
('winter'),
('clickbait')


INSERT INTO articles_authors (article_id, author_id) VALUES
(1, 1),(1, 2),
(2, 3),(2, 4),
(3, 2),(3, 5)

INSERT INTO articles_tags (article_id, tag_id) VALUES
(1, (SELECT tag_id FROM tags WHERE tag_name = 'science')),
(1, (SELECT tag_id FROM tags WHERE tag_name = 'breaking')),
(2, (SELECT tag_id FROM tags WHERE tag_name = 'weather')),
(2, (SELECT tag_id FROM tags WHERE tag_name = 'winter')),
(3, (SELECT tag_id FROM tags WHERE tag_name = 'clickbait')),
(3, (SELECT tag_id FROM tags WHERE tag_name = 'breaking'));