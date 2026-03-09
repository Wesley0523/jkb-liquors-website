class Cart{

constructor(){
this.items=[]
}

add(product){

this.items.push(product)

UI.updateCartCount(this.items.length)

}

}

class Store{

static getProducts(){

return liquors

}

}

class UI{

static displayProducts(){

const products=Store.getProducts()

const container=document.getElementById("products")

container.innerHTML=""

products.forEach(product=>{

const card=`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>R${product.price}</p>

<button onclick="cart.add('${product.name}')">Add to Cart</button>

</div>

`

container.innerHTML+=card

})

}

static updateCartCount(count){

document.getElementById("cart-count").innerText=count

}

}

const cart=new Cart()

document.addEventListener("DOMContentLoaded",UI.displayProducts)