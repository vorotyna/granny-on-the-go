const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

// Get users and order information by order_id from database
const getUserInfoByOrderId = (orderId) => {

  const queryString = `
  SELECT users.name as name, users.phone as phone, orders.aprox_time as time, orders.is_accepted as status
  FROM users
  JOIN orders ON user_id = users.id
  WHERE orders.user_id = $1
  `;

  const queryParams = [orderId];

  return db.query(queryString, queryParams)
    .then(data => {
      console.log(data.rows);
      return data.rows;
    })
    .catch(err => {
      console.log("error", err);
    });
};

module.exports = { getUsers, getUserInfoByOrderId };
