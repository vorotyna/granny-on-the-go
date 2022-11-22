const db = require('../connection');

const getItemsbyRestaurantId = (resId) => {
  const queryString = `
  SELECT *
  FROM items
  WHERE restaurant_id = $1;
  `;

  const queryParams = [resId];

  return db.query(queryString, queryParams)
    .then(response => {
      return response.rows;
    })
    .catch(err => {
      console.log("error", err);
    });
};

module.exports = { getItemsbyRestaurantId };
