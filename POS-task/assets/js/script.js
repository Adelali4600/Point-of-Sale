// Constant Component for My Code.
const products = {
    Pizzas: {
        image: ["../../Images/pizza.png"],
        items: [{
            name: "Pizza 1",
            price: 140,
            img: "../../Images/pizza.png",
            qty: 1,
        },
        {
            name: "Pizza 2",
            price: 120,
            img: "../../Images/pizza.png",
            qty: 1,
        },
        {
            name: "Pizza 3",
            price: 160,
            img: "../../Images/pizza.png",
            qty: 1,
        },
        {
            name: "Pizza 4",
            price: 150,
            img: "../../Images/pizza.png",
            qty: 1,
        }]
    },
    Burgers: {
        image: ["../../Images/burger.png"],
        items: [{
            name: "Burger 1",
            price: 20,
            img: "../../Images/burger.png",
            qty: 1,
        },
        {
            name: "Burger 2",
            price: 10,
            img: "../../Images/burger.png",
            qty: 1,
        },
        {
            name: "Burger 3",
            price: 30,
            img: "../../Images/burger.png",
            qty: 1,
        },
        {
            name: "Burger 4",
            price: 25,
            img: "../../Images/burger.png",
            qty: 1,
        },
        ]
    },
    "Cold Drinks": {
        image: ["../../Images/cold-drink.png"],
        items: [{
            name: "Cola",
            price: 3.99,
            img: "../../Images/cold-drink.png",
            qty: 1,
        },
        {
            name: "Sprite",
            price: 4.99,
            img: "../../Images/cold-drink.png",
            qty: 1,
        },
        {
            name: "Fanta",
            price: 5.99,
            img: "../../Images/cold-drink.png",
            qty: 1,
        },
        {
            name: "Lemon Sprite",
            price: 3.99,
            img: "../../Images/cold-drink.png",
            qty: 1,
        },
        ],
    },
    Desserts: {
        image: ["../../Images/dessert.png"],
        items: [{
            name: "Shecolate",
            price: 10,
            img: "../../Images/dessert.png",
            qty: 1,
        },
        {
            name: "Cack ",
            price: 12,
            img: "../../Images/dessert.png",
            qty: 1,
        },
        {
            name: "Logante",
            price: 16,
            img: "../../Images/dessert.png",
            qty: 1,
        },
        {
            name: "Ohana",
            price: 15,
            img: "../../Images/dessert.png",
            qty: 1,
        },
        ]
    },
    Woks: {
        image: ["../../Images/wok.png"],
        items: [{
            name: "Wok Hot",
            price: 44,
            img: "../../Images/wok.png",
            qty: 1,
        },
        {
            name: "Wok Salad",
            price: 40,
            img: "../../Images/wok.png",
            qty: 1,
        },
        {
            name: "Wok Egg",
            price: 42,
            img: "../../Images/wok.png",
            qty: 1,
        },
        {
            name: "Wok ODA",
            price: 45,
            img: "../../Images/wok.png",
            qty: 1,
        },
        ]
    },
    Pastas: {
        image: ["../../Images/Pasta.png"],
        items: [{
            name: "Pasta Lodo",
            price: 40,
            img: "../../Images/Pasta.png",
            qty: 1,
        },
        {
            name: "Pasta Spagette",
            price: 45,
            img: "../../Images/Pasta.png",
            qty: 1,
        },
        {
            name: "Pasta Meal",
            price: 42,
            img: "../../Images/Pasta.png",
            qty: 1,
        },
        {
            name: "Pasta Ball Meal",
            price: 43,
            img: "../../Images/Pasta.png",
            qty: 1,
        },
        ]
    }
};
const cats = Object.keys(products);
const body = document.querySelector("body");
const nav = document.querySelector("#nav");
const containerCat = document.querySelector("#containerCat");
const catsDiv = document.querySelector("#productCat");
const titleSpan = document.querySelector("#containerCat header h1");
const cartDiv = document.querySelector("#cartContainer");
const containerLog = document.querySelector('.containerlog');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');


// Product of Categories.
function renderCats() {
    titleSpan.innerHTML = "Categories";
    titleSpan.classList.remove("d-none");
    catsDiv.innerHTML = "";
    cats.forEach((el, index) => {
        catsDiv.innerHTML += `
        <div class="card border-danger"
        style="width: 15rem; height: 300px; background-color: #f8f9fa;">
        <img src="${products[el].image[0]}" class="card-img"
        alt="Image of ${el}">
        <button class="btn text-light m-auto p-1" onclick="renderItems('${el}', ${index})">${el}</button>
        </div>`;
    });
}

// Items
function renderItems(el) {
    titleSpan.innerHTML = `Categories <span class="text-warning">/ ${el}</span>`;
    catsDiv.innerHTML = "";
    let items = products[el].items;
    items.forEach(item => {
        catsDiv.innerHTML += `
        <div class="card border-danger">
        <img src="${item.img}" class="card-img" alt="Image of ${item.name}">
        <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Price: <span class="text-danger">${item.price}</span>$</p>
        <button type="button" class="btn m-auto p-0.2" onclick="addToCart('${el}', ${products[el].items.indexOf(item)})">Add To Cart</button>
        <button type="button" class="btn m-auto p-1 bg-danger" onclick="backToProducts()">Back</button>
        </div>
        </div>
            `;
    });
}

let cart = [];

function addToCart(el, index) {
    let item = products[el].items[index];
    let cartItemIndex = cart.findIndex(cartItem => cartItem.name === item.name && cartItem.price === item.price);
    if (cartItemIndex === 0) {
        if (cart[cartItemIndex].qty === undefined) {
            cart[cartItemIndex].qty = 1;
        }
        cart[cartItemIndex].qty += 1;
    } else {
        cart.push({ ...item, qty: item.qty || 1 });
    }
    renderCart();
}

// CartDiv 
function renderCart() {
    cartDiv.classList.contains("d-none")
        ? (cartDiv.classList.remove("d-none"),
            containerCat.classList.replace("col-9", "col-6"))
        : null;
    cartDiv.innerHTML = "";
    cart.length === 0
        ? (cartDiv.innerHTML = `<h3 class="text-center text-danger">Cart is empty</h3>`)
        : cart.forEach((item, i) => {
            cartDiv.innerHTML += `
        <div class="cartCards border-8 border-danger border-radius-10 d-flex flex-row align-items-center p-2"
        style="background-color: #f8f9fa;">
        <img src="${item.img}" alt="Image of ${item.name}" 
        class="card-img-left m-3" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
        <div class="flex-fill">
        <h5 class="card-title text-danger mb-1">${item.name}</h5>
        <p class="mb-1 text-dark">Price: <span class="text-danger">${item.price}</span>$</p>
        <div class="d-flex align-items-center gap-2">
        <span class="text-dark">Quantity:</span>
        <span class="badge bg-danger text-light">${item.qty}</span>
        </div>
        </div>
        <div class="d-flex align-items-center gap-2">
        <span class="text-danger">Total:</span>
        <span class="badge bg-danger text-light">${item.price * item.qty}</span>
        </div>
        <button class="btn btn-danger ms-3" onclick="deleteFromCart(${i})">Delete</button>
        </div>
        `;
        });
    cartDiv.innerHTML += `
    <div class="containerOfTotal d-flex flex-column">
    <div class="total-cards d-block p-3">
    <h5 class="text-danger">Total Items: <span class="badge bg-danger text-light">${cart.reduce((acc, item) => acc + item.qty, 0)}</span></h5>
    <h5 class="text-danger">Total Price: <span class="badge bg-danger text-light">${cart.reduce((acc, item) => acc + item.price * item.qty, 0)}</span></h5>
    </div>
    <div class="d-flex justify-content-end mt-2 d-block col-12">
    <button class="btn btn-secondary btn-sm " onclick="clearCart()">Clear All</button>
    <button class="btn btn-primary btn-sm ms-2" onclick="submitTransaction()">Submit</button>
    <button class="btn btn-primary btn-sm ms-2" onclick="backToItems()">Back</button>
        </div>
        </div>`;
};

function backToProducts() {
    cartDiv.classList.add("d-none");
    containerCat.classList.replace("col-6", "col-9");
    renderCats();
}

function backToItems() {
    cartDiv.classList.add("d-none");
    containerCat.classList.replace("col-6", "col-9");
}

function deleteFromCart(index, numToDelete = 1) {
    if (index < 0 || index >= cart.length) return;
    if (cart[index].qty > numToDelete) {
        cart[index].qty -= numToDelete;
    } else {
        cart.splice(index, 1);
    }
    renderCart();
}

function clearCart() {
    cart = [];
    renderCart();
}
