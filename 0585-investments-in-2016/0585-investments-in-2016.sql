# Write your MySQL query statement below
SELECT ROUND(SUM(tiv_2016), 2) AS tiv_2016
FROM (
    SELECT *,
           COUNT(*) OVER (PARTITION BY tiv_2015) AS c1,
           COUNT(*) OVER (PARTITION BY lat, lon) AS c2
    FROM Insurance
) t
WHERE c1 > 1 AND c2 = 1;
