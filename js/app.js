// ==========================
// JKB LIQUORS APP.JS
// ==========================


// Display products
function displayProducts() {


    const container = document.getElementById("products");


    // Stop if page does not contain products section
    if (!container) {
        return;
    }


    container.innerHTML = "";


    products.forEach(product => {


        container.innerHTML += `


        <div class="card">


            <img src="${product.image}" 
            alt="${product.name}">


            <h3>
                ${product.name}
            </h3>


            <p>
                Category:
                ${product.category}
            </p>


            <h2>
                R${product.price.toFixed(2)}
            </h2>


            <p>
                Available:
                ${product.stock}
            </p>


            <button onclick="addCart(${product.id})">

                Add To Cart

            </button>


        </div>


        `;


    });


}






// ==========================
// CART SYSTEM
// ==========================


function addCart(id) {


    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];



    let product =
    products.find(
        product => product.id === id
    );



    if (!product) {

        console.log("Product not found");

        return;

    }




    // Check if product already exists

    let existingProduct =
    cart.find(
        item => item.id === id
    );



    if(existingProduct){


        existingProduct.quantity += 1;


    }

    else{


        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            category: product.category,

            quantity:1

        });


    }




    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );



    updateCartCount();



    alert(
        product.name + " added to cart"
    );


}






// ==========================
// CART NUMBER DISPLAY
// ==========================


function updateCartCount(){


    const cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];



    const cartCount =
    document.getElementById(
        "cart-count"
    );



    if(cartCount){


        let total = cart.reduce(
            (sum,item)=>
            sum + item.quantity,
            0
        );



        cartCount.innerText = total;


    }


}






// ==========================
// AGE VERIFICATION
// ==========================


function confirmAge(){


    localStorage.setItem(
        "ageVerified",
        "true"
    );


    document.getElementById(
        "age-popup"
    ).style.display="none";


}



function leaveSite(){


    window.location.href =
    "https://www.google.com";


}





// ==========================
// START APP
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{


    displayProducts();


    updateCartCount();


});