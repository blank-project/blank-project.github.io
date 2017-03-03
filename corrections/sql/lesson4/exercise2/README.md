- `select * from orders o join customers c ON o.customer_id = c.id `
- `select o.id AS COMMANDE_N, p.name AS PRODUCT_NAME, op.amount AS QUANTITY from orders o join orders_products op ON o.id = op.order_id JOIN products p ON op.product_id = p.id `
- `SELECT * FROM customers c LEFT JOIN orders o ON o.customer_id = c.id WHERE o.id IS NULL`
 ou
 `SELECT * FROM customers c WHERE (SELECT count(*) from orders o where o.customer_id = c.id ) = 0`
 ou
 `SELECT * FROM customers c WHERE NOT EXISTS (SELECT * from orders o where o.customer_id = c.id )`
- Pareil mais avec `orders` et `orders_products`.
