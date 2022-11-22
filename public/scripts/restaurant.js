// const createFoodItem = function(data) {
//   console.log(data);
//   let newItem = `
//     <div class="menu-item">
//       <img
//         src="${data.img_url}"
//         alt="${data.name}"
//         class="menu-item-image"
//       />
//       <div class="menu-item-text">
//         <h3 class="menu-item-heading">
//           <span class="menu-item-name">${data.name}</span>
//           <div class="end-of-header">
//             <span class="menu-item-price">$${data.price}</span>
//             <button class="add">
//               +
//             </button>
//           </div>
//         </h3>
//         <p class="menu-item-description">${data.description}</p>
//       </div>
//     </div>
//     `;
//   return newItem;
// };


// const renderItems = (arr, section) => {
//   $(`#${section}-container`).empty();
//   for (let item of arr) {
//     const newItemElement = createFoodItem(item);
//     $(`#${section}-container`).append(newItemElement);
//   }
// };




// $(document).ready(() => {
//   console.log("pre");
//   $('#fetch-restaurant').click(() => {
//     window.location.href = '/restaurant';

//     $.ajax({
//       method: 'GET',
//       url: '/restaurant'
//     })
//       .then(() => {
//         console.log("hi");
//         loadItems();
//       });
//   });
// });


// const loadItems = function() {
//   console.log("here1");
//   $.ajax({
//     method: "GET",
//     url: "/restaurant/1/1",
//   })
//     .done((response) => {
//       console.log("HERE");
//       renderItems(response.items, "appetizers");
//     });
// };


// // get items from db for a certain restaurant
// // add items to a list and make a food component for each item
// // Function turns tweet object into HTML tweet article



// // add item-appetizers, item-mains, item-desserts, item-drinks ids
// // add
