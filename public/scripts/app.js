// Client facing scripts here
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


$(() => {
  $('#fetch-restaurant').click(() => {
    $.ajax({
      method: 'GET',
      url: '/restaurant'
    })
      .then(() => {
        loadItems();
      });
  });
});


const loadItems = function() {
  $.ajax({
    method: "GET",
    url: "/restaurant/1/1",
  })
    .done((response) => {
      renderItems(response.returnObject);
      appendItems(response.returnObject);
    });
};

loadItems();







// ----- CREATE COUNTER FOR ITEMS IN CART ----- //
$(document).ready(function() {

  //Create cart object
  // let cart = {orderID:1, itemID: 1, 1: 0, 2:0}


  // Make checkout counter count each time an item is added to cart
  $(document.body).on('click', '.add', function() {
    let itemID = $(this).val();
    let item = { id: itemID, orderID: 1, quantity: 1 };
    $.post('/api/carts', item);
    // Target the checkout button
    loadItems();

  });


  $(document.body).on('click', '.remove', function() {
    let itemID = $(this).val();
    let item = { id: itemID, orderID: 1, quantity: -1 };
    $.post('/api/carts', item);

    loadItems();
  });

  //posts the cart info
  // $('.checkout').on('click', function(){
  //   console.log(cart)
  //   $.post('/api/carts', cart);
  // })

});




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





