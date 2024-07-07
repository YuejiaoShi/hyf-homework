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
