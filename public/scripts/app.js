$(document).ready(function() {

  // Adds items into table and refreshes the cart
  $(document.body).on('click', '.add', function() {
    let itemID = $(this).val();
    let item = { id: itemID, orderID: 1, quantity: 1 };
    $.post('/api/carts', item)
      .then(() => {
        loadItems();
      })
      .catch(err => {
        console.log("error", err);
      });
      loadItems();
  });

   // Removes items from table and refreshes the cart
  $(document.body).on('click', '.remove', function() {
    let itemID = $(this).val();
    let item = { id: itemID, orderID: 1, quantity: -1 };
    $.post('/api/carts', item)
      .then(() => {
        loadItems();
      })
      .catch(err => {
        console.log("error", err);
      })
      loadItems();
  });

  $(() => {
    $('#fetch-restaurant').click(() => {
      $.ajax({
        method: 'GET',
        url: '/restaurant'
      })
        .then(() => {
          loadItems();
        })
        .catch(err => {
          console.log("error", err);
        });
    });
  });

loadItems();

});

//Creates the HTML for each food item
const createFoodItem = function(data) {
  let newItem = `
    <div class="menu-item">
      <img
        src="${data.img_url}"
        alt="${data.name}"
        class="menu-item-image"
      />
      <div class="menu-item-text">
        <h3 class="menu-item-heading">
          <span class="menu-item-name">${data.name}</span>
          <div class="end-of-header">
            <span class="menu-item-price">$${data.price / 100}</span>
            <button class="add" value=${data.id}>
              +
            </button>
            <button class="remove" value=${data.id}>
            -
          </button>
          </div>
        </h3>
        <p class="menu-item-description">${data.description}</p>
      </div>
    </div>
    `;
  return newItem;
};

//Renders each item on the page
const renderItems = (arr) => {
  for (let item of arr.items) {
    $(`#${item.category}-container`).empty();
  }
  for (let item of arr.items) {
    $(`#${item.category}-container`);
    const newItemElement = createFoodItem(item);
    $(`#${item.category}-container`).append(newItemElement);
  }
  let checkout = $('.checkout');
  checkout.val(`Checkout (${arr.totalQuantity}) 🛒`);
};


//Loads menu items and items in cart
const loadItems = function() {
  $.ajax({
    method: "GET",
    url: "/restaurant/1/1",
  })
    .done((response) => {
      renderItems(response.returnObject);
      appendItems(response.returnObject);
    })
    .catch(err => {
      console.log("error", err);
    });
};

// ----- CREATE ITEMS IN CART DISPLAY ----- //

//Creates a new order item using the template below
const createNewOrderItem = (item) => {

  let newOrderItem = `
  <div class="item-container">
    <p class="item-quantity">${item.quantity}</p>
    <p class="item-name">${item.name}</p>
  </div>
  `;

  return newOrderItem;
};

//Adds items to be displayed on my-order page
const appendItems = (obj) => {
  $('.items-list').empty();
  for (let item of obj.orderItems) {
    const newOrderItem = createNewOrderItem(item);
    $('.items-list').append(newOrderItem);
  }
};





