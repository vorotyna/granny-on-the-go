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
            <button class="add">
              +
            </button>
            <button class="remove">
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

  for (let item of arr) {
    $(`#${item.category}-container`).empty();
    console.log("WOW", item.category);
    const newItemElement = createFoodItem(item);
    $(`#${item.category}-container`).append(newItemElement);
  }
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
      renderItems(response.returnObject.items);
    });
};

loadItems();

// get items from db for a certain restaurant
// add items to a list and make a food component for each item
// Function turns tweet object into HTML tweet article



// add item-appetizers, item-mains, item-desserts, item-drinks ids
// add





// ----- CREATE COUNTER FOR ITEMS IN CART ----- //
$(document).ready(function() {

  // Create a counter
  let counter = 0;

  // Make checkout counter count each time an item is added to cart
  $(document.body).on('click', '.add', function() {
    counter += 1;

    // Target the checkout button
    let checkout = $('.checkout');
    checkout.val(`Checkout (${counter}) 🛒`);

  });

  $(document.body).on('click', '.remove', function() {
    counter -= 1;

    // Target the checkout button
    let checkout = $('.checkout');
    checkout.val(`Checkout (${counter}) 🛒`);

    // If counter is at 0, you cannot remove an item
    if (counter < 0) {
      counter = 0;
      let checkout = $('.checkout');
      checkout.val(`Checkout (${counter}) 🛒`);
    }
  });
});
