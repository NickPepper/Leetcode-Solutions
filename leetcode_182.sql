/*
182. Duplicate Emails (https://leetcode.com/problems/duplicate-emails/)

Write a SQL query to find all duplicate emails in a table named Person.

+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
For example, your query should return the following for the above table:

+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Note: All emails are in lowercase.
*/

/* Fast */
SELECT DISTINCT a.Email FROM Person a JOIN Person b WHERE a.Email = b.Email AND a.id <> b.id;

/* Slow */
SELECT Email FROM Person GROUP BY Email HAVING COUNT(*) > 1;
