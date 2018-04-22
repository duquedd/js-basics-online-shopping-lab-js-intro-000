var cart = {};

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj ={}
  obj[`itemName`]= item
  obj[`itemPrice`]= Math.floor(Math.random()*100)
  cart[cart.length]=obj
  return `${item} has been added to your cart.`
}

function viewCart() {
  var string = "In your cart, you have"
  if (cart.length !== 0){
    for (var i=0;i < cart.length; i++ ){
      if (cart.length === 1){ string= string +  ` ${cart[i][`itemName`]} at $${cart[i][`itemPrice`]}.`
    }else if (i === cart.length-1){
        string = string + ` and ${cart[i][`itemName`]} at $${cart[i][`itemPrice`]}.`
      }else {string = string + ` ${cart[i][`itemName`]} at $${cart[i][`itemPrice`]},`}
    }
    return string
  }else {return `Your shopping cart is empty.`}
}

function total() {
  var total = 0
  for (var i =0; i < cart.length; i++){
    total = total + cart[i]['itemPrice']
  }
  return total
}

function removeFromCart(item) {

  for(var i=0; i< cart.length; i++){
    if (cart[i]['itemName']===item){
      delete cart[i]
      return cart
    }else{ return `That item is not in your cart.`}
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
