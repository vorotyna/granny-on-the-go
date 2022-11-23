
// This script populates /my-order page from the items-in-order database
$(() => {

  console.log('Hello from populate-myOrders.js');


  loadOrderItems();


});


//Creates a new order item using the template below
const createNewOrderItem = (data) => {

  console.log('hello from createNewOrderItem()');
  console.log;

  let newOrderItem =
    `<div class="item-container">
    <h5 class="item-quantity">1</h5>
    <p class="item-name">${data.name}</p>
    <p class="item-price">- $${data.price / 100}</p>
  </div>`;

  return newOrderItem;
};


//Adds items to be displayed on my-order page
const appendItems = (arr) => {

  console.log('hello from appendItems()');

  for (let item of arr) {
    $('#item-list').empty();
    const newOrderItem = createNewOrderItem(item);
    console.log('this is a newOrderItem', newOrderItem);
    $('#item-list').append(newOrderItem);

  }
};


//gets items from item_in_order table
const loadOrderItems = function() {
  $.ajax({
    method: "GET",
    url: "/restaurant/1/1",
  })
    .done((response) => {
      console.log('These are Items in the order', response.returnObject.orderItems);
      appendItems(response.returnObject.orderItems);

    });
};


