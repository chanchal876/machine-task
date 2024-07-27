// Define the products and their stock
const products = {
  1: {name: "chips", stock: 5},
  2: {name: "soda", stock: 4},
  3: {name: "candy", stock: 3}
}

//select elements
let productList = document.querySelector(".product-list")
let input = document.querySelector("input")
let message = document.querySelector("#message")

// Function to display products

function displayProducts(){
  productList.innerHTML = '';
  for (let [key, value] of Object.entries(products)){
    productList.innerHTML += `<p> ${key}: ${value.name} - ${value.stock} in a stock </p>`
  }
}


// Function to despensed Product

function dispenseProduct(){
  let userInput = input.value

  if (userInput < 1 || userInput > Object.keys(products).length) {
    message.innerText = "Invalid selection. Please choose a valid product number.";
  }

  const selectedProduct = products[userInput]
  if (products[userInput].stock > 0 ){
    selectedProduct.stock --;
    message.innerText = `dispensed: ${selectedProduct.name} Remaining stock: ${selectedProduct.stock}`
  }
  else{
    message.innerText = `sorry ${selectedProduct.name} is out of stock`
  }

  //updated stock
  displayProducts() 
}


//initial display of products
displayProducts()



  