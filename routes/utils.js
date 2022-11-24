// Function that sum the quantity of rows ^
const totalQuantity = function(obj) {
  let sumQuantity = 0;
  for (let order of obj) {
    sumQuantity += order.quantity;
  }
  return sumQuantity;
};

// Function that sums the total price ^^
const totalPrice = function(obj) {
  let sumPrice = 0;
  for (let order of obj) {
    sumPrice += order.quantity * order.price;
  }
  return sumPrice;
};

module.exports = { totalQuantity, totalPrice };
