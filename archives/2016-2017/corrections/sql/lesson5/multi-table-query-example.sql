INSERT INTO flight(`code`,`departure_id`,`arrival_id`,`departure_time`,`duration`, `plane_id`)
SELECT 'AF123', a1.id, a2.id, '2017-03-04 08:00:00', 710, p.id
FROM
	plane p,
    company c,
    airport a1,
    airport a2
WHERE
a1.code = 'CDG' AND
a2.code = 'LAX' AND
c.code = 'AF' AND
p.company_id = c.id
