const db = require('../connection');

// Get items by order_id from database
const getItemsByOrderId = (orderId) => {
  return db.query(`SELECT * FROM items_in_order where order_id = ${orderId};`)
    .then(data => {
      return data.rows;
    });
};

// Add a carted item to database
const addItemToOrder = (itemID, orderID) => {

  const queryString = `
  INSERT INTO item_in_order (item_id, order_id, quantity)
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

module.exports = { getItemsByOrderId, addItemToOrder };
