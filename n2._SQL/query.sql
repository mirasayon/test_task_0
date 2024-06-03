set statistics time on;

WITH RecursiveSubdivisions AS (
    SELECT id, parent_id, name, 1 AS sub_level
    FROM subdivisions
    WHERE id = (SELECT subdivision_id FROM collaborators WHERE id = 710253)
    UNION ALL
    SELECT s.id, s.parent_id, s.name, rs.sub_level + 1
    FROM subdivisions AS s
    INNER JOIN RecursiveSubdivisions rs ON s.parent_id = rs.id
),
CollaboratorsHierarchy AS (
    SELECT c.id, c.name, rs.name AS sub_name, rs.id AS sub_id, rs.sub_level,
           COUNT(*) OVER (PARTITION BY rs.id) AS colls_count
    FROM collaborators c
    INNER JOIN RecursiveSubdivisions rs ON c.subdivision_id = rs.id
    WHERE c.age < 40
    AND rs.id NOT IN (100055, 100059)
)
SELECT *
FROM CollaboratorsHierarchy
ORDER BY sub_level;

set statistics time off;