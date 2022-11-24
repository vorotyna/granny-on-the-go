// Create HTML template for order summary
const createOrderSummary = function(data) {
  console.log("data", data);
  let orderSummary = `
  <h5>${data.totalQuantity} items for $${data.totalPrice / 100}</h5>
`;
  return orderSummary;
};


// Add order infortmation to be displayed on order summary
const renderSummary = (obj) => {
  $(`#total`).empty();
  const newSummary = createOrderSummary(obj);
  $(`#total`).append(newSummary);
};

// This script populates the order summary on the /my-order page, using database
$(document).ready(function() {
  loadOrderSummary();
});


// Gets order information via user_id
const loadOrderSummary = function() {
  $.ajax({
    method: "GET",
    url: "/my-order/1",
  })
    .done((response) => {
      renderSummary(response.returnObject);
    });
};


// ~~~~~~~~~~~~~~~~~

// Create HTML template for entire user and order info box
const createMyInfo = function(data) {
  let myInfo = `
  <p>Name: ${data.name} </p>
  <p>Phone: ${data.phone} </p>
`;
  return myInfo;
};


// Adds user and order infortmation to be displayed on my-order page
const renderInfo = (arr) => {
  for (let user of arr) {
    $(`#order-details`).empty();
    const newUserInfo = createMyInfo(user);
    $(`#order-details`).prepend(newUserInfo);
  }
};


// This script populates the user information box on the /my-order page, using database
$(document).ready(function(){

  loadMyInfo()

});



// Gets user and order information from users and orders tables
const loadMyInfo = function() {
  $.ajax({
    method: "GET",
    url: "/my-order/1",
  })
    .done((response) => {
      renderInfo(response.returnObject.userInfo);
    });
};
