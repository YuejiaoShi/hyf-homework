-- *******************************************************
-- ************** Part 1: Working with tasks *************
-- *******************************************************

-- Data from: https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/lesson2-data.sql

-- 1.1 Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task (title, description, created, updated, due_date, status_id, user_id) values 
('Learn Danish', 'Hvor arbejder du?', '2024-06-07 14:12:50', '2024-06-07 15:01:50', '2024-07-07 12:00:50', 1, 4);
-- 1.2 Change the title of a task
UPDATE task SET title = 'Practice Danish Conversation' WHERE task.id = LAST_INSERT_ID();
-- 1.3 Change a task due date
UPDATE task SET due_date = '2024-08-08 10:00:00' WHERE task.id = LAST_INSERT_ID();
-- 1.4 Change a task status
UPDATE task SET status_id = (SELECT id FROM status WHERE status.name ='In progress') WHERE task.id = LAST_INSERT_ID();
-- 1.5 Mark a task as complete
UPDATE task SET status_id = (SELECT id FROM status WHERE status.name ='Done')  WHERE task.id = LAST_INSERT_ID();
-- 1.6 Delete a task
DELETE FROM task WHERE task.id = LAST_INSERT_ID();