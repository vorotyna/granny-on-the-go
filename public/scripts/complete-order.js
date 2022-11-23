// ------ COMPLETE ORDER BUTTON (/my-orders) ----- //

// Create HTML template for entire user and order info box
const createMyInfo = function(data) {
  let myInfo = `
<div class="user-info">
  <h3 class="user-header">My Information</h3>
  <div class="name">
    <h5 class="name-header">Name:</h5>
    <p class="name-body">${data.name}</p>
  </div>
  <div class="number">
    <h5 class="name-header">Phone Number:</h5>
    <p class="name-body">${data.phone}</p>
  </div>
</div>
<div class="confirmation-status">
  <h3>Order Status</h3>
  <p>${confirmedOrPending(data.status)}</p>
</div>
<div class="time">
  <h3>Estimated Time</h3>
  <p>${data.time} minutes</p>
</div>
`;
  return myInfo;
};

// Use this function to convert boolean status for database into confirmed/pending status ^^
const confirmedOrPending = function(status) {
  if (status === true) {
    return 'Confirmed';
  } else {
    return 'Pending';
  }
};

// Adds user and order infortmation to be displayed on my-order page
const renderInfo = (arr) => {
  for (let user of arr) {
    $(`#summary-container`).empty();
    const newUserInfo = createMyInfo(user);
    $(`#summary-container`).append(newUserInfo);
  }
};


// This script populates the user information box on the /my-order page, using database
$(document).ready(function() {

  $("#summary-container").hide();

  $('#complete-order').click(() => {
    $.ajax({
      method: 'GET',
      url: '/my-order'
    })
      .then(() => {
        $("#summary-container").show();
        loadMyInfo();
      });
  });
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










// ------ UPDATE ORDER SUMMARY (/my-orders) ----- //

// Create HTML template for order summary
const createOrderSummary = function(data) {
  let orderSummary = `
  <h6>${data.quantity} items for $${data.total / 100} • ${data.date}</h6>
`;
  return orderSummary;
};


// Add order infortmation to be displayed on order summary
const renderSummary = (arr) => {
  for (let summary of arr) {
    $(`#final-order`).empty();
    const newSummary = createOrderSummary(summary);
    $(`#final-order`).append(newSummary);
  }
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
      renderSummary(response.returnObject.order);
    });
};


