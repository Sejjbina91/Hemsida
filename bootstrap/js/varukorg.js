// How to make a click-function
$(document).on('click', '.cart-button', function () {
    // Code put here will run when someone clicks an html-element with the class cart-button.
});


store.products = [];

store.products.push({
    price: 2500,
    title: "Isafold",
    amount: 1

})

store.products.push({
    price: 2000,
    title: "Hrimfaxi",
    amount: 1

})

store.products.push({
    price: 3000,
    title: "Krummi",
    amount: 1

})


// Firstly, empty the html-element containing the list
$('.list-of-products').empty();

// Loop through all of your products saved in the cart and add them to the list-of-products element
// If store.products is not an array of products this code will not do anything
if (store.products !== undefined) {
    for (product of store.products) {
        $('.list-of-products').append(`
        <div class="row">
          <div class="col">
        ${product.title}
        </div> <div class="col">
        
     ${product.amount}  </div>
      <div class="col">
     
${product.price} </div>
        </div>
        `);
    }
}
