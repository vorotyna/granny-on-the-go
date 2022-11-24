const db = require('../connection');

// Get items by order_id from database
const getItemsByOrderId = (orderId) => {
  return db.query(
    `SELECT items.name as name, items.price as price, items_in_order.quantity as quantity
    FROM items
    JOIN items_in_order ON items.id = item_id
    WHERE items_in_order.order_id = ${orderId};`)
    .then(data => {
      return data.rows;
    });
};

// Add a carted item to database
const addItemToOrder = (itemID, orderID) => {

  const queryString = `
  INSERT INTO items_in_order (item_id, order_id, quantity)
  VALUES ($1, $2, $3);
  `;

  const queryParams = [itemID, orderID, 1];

  return db.query(queryString, queryParams)
    .then(response => {
      return response.rows[0];
    })
    .catch(err => {
      console.log("error", err);
    });
};

// Get order details by user_id
const getOrderSummary = (userId) => {

  const queryString = `
  SELECT TO_CHAR(orders.time_placed, 'YYYY-MM-DD') as date, SUM(items_in_order.quanity) as quantity, orders.total_price as total
  FROM orders
  JOIN items_in_order ON order_id = orders.id
  WHERE orders.user_id = $1
  GROUP BY date, total;
  `;


  const queryParams = [userId];

  return db.query(queryString, queryParams)
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log("error", err);
    });
};


module.exports = { getItemsByOrderId, addItemToOrder, getOrderSummary };
