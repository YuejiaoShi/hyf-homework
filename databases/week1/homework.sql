-- 1. Find out how many tasks are in the task table
--  Answer: 35
SELECT COUNT(*) AS tasks_amount FROM task;

-- 2. Find out how many tasks in the task table do not have a valid due date
--  Answer: 8
SELECT COUNT(*) AS tasks_with_valid_due_amount FROM task WHERE due_date IS NULL;

-- 3. Find all the tasks that are marked as done
SELECT task.title AS done_tasks FROM task WHERE status_id = (SELECT id FROM status WHERE name='done'); -- 12 tasks

-- 4. Find all the tasks that are not marked as done
SELECT task.title AS not_done_tasks FROM task WHERE status_id != (SELECT id FROM status WHERE name='done'); -- 23 tasks

-- 5. Get all the tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC;

-- 6. Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT task.title, task.due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT task.title AS task_title, status.name AS task_status 
FROM task JOIN status ON task.status_id = status.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS task_status, Count(*) AS task_amount
FROM task RIGHT JOIN status ON task.status_id = status.id
GROUP BY status.name

-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS task_status, Count(*) AS task_amount
FROM task RIGHT JOIN status ON task.status_id = status.id
GROUP BY status.name
ORDER BY task_amount DESC