-- *******************************************************
-- ************** Part 1: Working with tasks *************
-- *******************************************************

-- Data from: https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/lesson2-data.sql

-- 1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task (title, description, created, updated, due_date, status_id, user_id) values 
('Learn Danish', 'Hvor arbejder du?', '2024-06-07 14:12:50', '2024-06-07 15:01:50', '2024-07-07 12:00:50', 1, 4);
-- 2. Change the title of a task
UPDATE task SET title = 'Practice Danish Conversation' WHERE task.id = LAST_INSERT_ID();
-- 3. Change a task due date
UPDATE task SET due_date = '2024-08-08 10:00:00' WHERE task.id = LAST_INSERT_ID();
-- 4. Change a task status
UPDATE task SET status_id = (SELECT id FROM status WHERE status.name ='In progress') WHERE task.id = LAST_INSERT_ID();
-- 5. Mark a task as complete
UPDATE task SET status_id = (SELECT id FROM status WHERE status.name ='Done')  WHERE task.id = LAST_INSERT_ID();
-- 6. Delete a task
DELETE FROM task WHERE task.id = LAST_INSERT_ID();

-- *******************************************************
-- *************** Part 2: School database ***************
-- *******************************************************
CREATE DATABASE school;
SET NAMES utf8mb4;

CREATE TABLE class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL UNIQUE,
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES class(id) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_student_name ON student(name);

ALTER TABLE class ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL;

-- *******************************************************
-- ***************** Part 3: More queries ****************
-- *******************************************************
CREATE DATABASE hyf_lesson2;
-- Data from : https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/lesson2-data.sql

-- 1. Get all the tasks assigned to users whose email ends in @spotify.com-- 1. Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title FROM task 
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id 
WHERE user.email LIKE '%@spotify.com';

-- 2. Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title, user.name, status.name FROM task 
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id 
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

-- 3. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title, user.name, task.created FROM task 
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user_task.user_id = user.id 
JOIN status ON task.status_id = status.id
WHERE user.name = 'Maryrose Meadows' AND month(task.created)=9;

-- 4. Find how many tasks where created in each month, e.g. how many tasks were created in october, 
--    how many tasks were created in november, etc. (hint: use group by)
SELECT month(task.created), Count(*) AS task_count FROM task GROUP BY month(task.created);

-- *******************************************************
-- *************** Part 4: IKEA database ***************
-- *******************************************************