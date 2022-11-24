const db = require('../connection');

// Get items by order_id from database
const getItemsByOrderId = (orderId) => {
  return db.query(`SELECT * FROM items_in_order WHERE order_id = ${orderId};`)
    .then(data => {
      return data.rows;
    });
};

// Add a carted item to database
const addItemsToOrder = (itemObj) => {

  return db.query(`SELECT * FROM items_in_order WHERE order_id = $1 AND item_id = $2;`, [itemObj.orderID, itemObj.id])
    .then(data => {
      return data.rows[0]
    })
    .then(item => {
      if (!item) {
        const queryString = `
          INSERT INTO items_in_order (item_id, order_id, quantity)
          VALUES ($1, $2, $3) RETURNING *;
          `;

        const queryParams = [itemObj.id, itemObj.orderID, itemObj.quantity];
        return db.query(queryString, queryParams)
          .then(response => {
            return response.rows[0];
          })
          .catch(err => {
            console.log("error", err);
          });
      }

      const queryString = `
          UPDATE items_in_order
          SET quantity = quantity + 1
          WHERE item_id = $1
          RETURNING *`

      const queryParams = [item.item_id];

      return db.query(queryString, queryParams)
        .then(response => {
          return response.rows[0];
        })
        .catch(err => {
          console.log("error", err);
        });
    })


};


const removeItemsToOrder = (itemObj) => {

  return db.query(`SELECT * FROM items_in_order WHERE order_id = $1 AND item_id = $2;`, [itemObj.orderID, itemObj.id])
    .then(data => {
      return data.rows[0]
    })
    .then(item => {
      if (item.quantity === 1) {
        const queryString = `DELETE FROM items_in_order WHERE order_id = $1 AND item_id = $2;`;

        const queryParams = [item.order_id, item.item_id];
        return db.query(queryString, queryParams)
          .then(response => {
            return response.rows[0];
          })
          .catch(err => {
            console.log("error", err);
          });
      }

      const queryString = `
          UPDATE items_in_order
          SET quantity = quantity - 1
          WHERE item_id = $1
          RETURNING *`

      const queryParams = [item.item_id];

      return db.query(queryString, queryParams)
        .then(response => {
          return response.rows[0];
        })
        .catch(err => {
          console.log("error", err);
        });
    })


};
module.exports = { getItemsByOrderId, addItemsToOrder, removeItemsToOrder };
