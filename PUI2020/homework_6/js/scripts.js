// cart update
function updateCart() {
    var itemCount = localStorage.getItem('itemCount');
    if (itemCount == null) {
        itemCount = 0
    }
    var cart = "Cart (" + itemCount + ")";
    document.getElementById('cart').innerHTML = cart;
}

function addToCart() {
    var itemCount = localStorage.getItem('itemCount');
    itemCount = parseInt(itemCount) + 1;
    localStorage.setItem('itemCount', itemCount);
    updateCart();
}

// details image update
function update12() {
    document.getElementById('products-image').setAttribute("src", "images/original.jpg");
}

function update1() {
    document.getElementById('products-image').setAttribute("src", "images/one.jpg");
}

function update3() {
    document.getElementById('products-image').setAttribute("src", "images/three.jpg");
}

function update6() {
    document.getElementById('products-image').setAttribute("src", "images/six.jpg");
}

// details title update
function updateOriginal() {
    document.getElementById('producttitle').innerHTML = "Original Cinnamon Roll";
}

function updateSugar() {
    document.getElementById('producttitle').innerHTML = "Sugar-Milk Original Cinnamon Roll";
}

function updateVanilla() {
    document.getElementById('producttitle').innerHTML = "Vanilla-Milk Original Cinnamon Roll";
}

function updateChocolate() {
    document.getElementById('producttitle').innerHTML = "Double Chocolate Original Cinnamon Roll";
}

// add to cart
function addToCart() {
    product = document.getElementById('producttitle').innerHTML;
    quantities = Array.from(document.getElementsByName('quantity'));
    quantity = '12-rolls';
    for (i = 0; i < quantities.length; i++) {
        if (quantities[i].checked) {
            quantity = quantities[i].value;
        }
    }
    glazings = Array.from(document.getElementsByName('glazing'));
    glazing = "None";
    for (i = 0; i < glazings.length; i++) {
        if (glazings[i].checked) {
            glazing = glazings[i].value;
        }
    }
    item = product + "," + quantity + "," + glazing;
    var cart = localStorage.getItem("cart");
    if (cart == null) {
        localStorage.setItem("cart", item);
    }
    localStorage.setItem("cart", cart + ";" + item);

    var count = localStorage.getItem("itemCount");
    if (count == null) {
        localStorage.setItem("itemCount", 1);
    } else {
        localStorage.setItem("itemCount", parseInt(count) + 1);
    }
    updateCart();
}

// cart display items
function displayCart() {
    const oneImageBlock = '<div class="col"> \
    <div class="cart" id="image"> \
        <img class="cartimage" src="images/one.jpg" id="products-image"> \
    </div>';

    const threeImageBlock = '<div class="col"> \
    <div class="cart" id="image"> \
        <img class="cartimage" src="images/three.jpg" id="products-image"> \
    </div>';

    const sixImageBlock = '<div class="col"> \
    <div class="cart" id="image"> \
        <img class="cartimage" src="images/six.jpg" id="products-image"> \
    </div>';

    const twelveImageBlock = '<div class="col"> \
    <div class="cart" id="image"> \
        <img class="cartimage" src="images/original.jpg" id="products-image"> \
    </div>';

    const originalCinnamonRollBlock = '</div> \
    <div class="col"> \
    <div class="cart" id="settings"> \
    <h2 id="producttitle">Original Cinnamon Roll</h2>';

    const oneRollBlock = '<p>$1.00</p> \
    <label for="Quantity">Quantity:</label> \
    <select name="12 rolls" id="rolls" onchange="updateCartImage()"> \
        <option value="1" selected>1 roll</option> \
        <option value="3">3 rolls</option> \
        <option value="6">6 rolls</option> \
        <option value="12">12 rolls</option> \
    </select> \
    </br>';

    const threeRollBlock = '<p>$3.00</p> \
    <label for="Quantity">Quantity:</label> \
    <select name="12 rolls" id="rolls" onchange="updateCartImage()"> \
        <option value="1">1 roll</option> \
        <option value="3" selected>3 rolls</option> \
        <option value="6">6 rolls</option> \
        <option value="12">12 rolls</option> \
    </select> \
    </br>';

    const sixRollBlock = '<p>$6.00</p> \
    <label for="Quantity">Quantity:</label> \
    <select name="12 rolls" id="rolls" onchange="updateCartImage()"> \
        <option value="1">1 roll</option> \
        <option value="3">3 rolls</option> \
        <option value="6" selected>6 rolls</option> \
        <option value="12">12 rolls</option> \
    </select> \
    </br>';

    const twelveRollBlock = '<p>$12.00</p> \
    <label for="Quantity">Quantity:</label> \
    <select name="12 rolls" id="rolls" onchange="updateCartImage()"> \
        <option value="1">1 roll</option> \
        <option value="3">3 rolls</option> \
        <option value="6">6 rolls</option> \
        <option value="12" selected>12 rolls</option> \
    </select> \
    </br>';

    const noneBlock = '<label for="Glazing">Glazing:</label> \
    <select name="None" id="glazing" onchange="updateCartName()"> \
        <option value="none" selected>None</option> \
        <option value="Sugar-Milk">Sugar-Milk</option> \
        <option value="Vanilla-Milk">Vanilla-Milk</option> \
        <option value="Double-Chocolate">Double-Chocolate</option> \
    </select>';

    const sugarMilkBlock = '<label for="Glazing">Glazing:</label> \
    <select name="None" id="glazing" onchange="updateCartName()"> \
        <option value="none">None</option> \
        <option value="Sugar-Milk" selected>Sugar-Milk</option> \
        <option value="Vanilla-Milk">Vanilla-Milk</option> \
        <option value="Double-Chocolate">Double-Chocolate</option> \
    </select>';

    const vanillaMilkBlock = '<label for="Glazing">Glazing:</label> \
    <select name="None" id="glazing" onchange="updateCartName()"> \
        <option value="none">None</option> \
        <option value="Sugar-Milk">Sugar-Milk</option> \
        <option value="Vanilla-Milk" selected>Vanilla-Milk</option> \
        <option value="Double-Chocolate">Double-Chocolate</option> \
    </select>';

    const doubleChocolateBlock = '<label for="Glazing">Glazing:</label> \
    <select name="None" id="glazing" onchange="updateCartName()"> \
        <option value="none">None</option> \
        <option value="Sugar-Milk">Sugar-Milk</option> \
        <option value="Vanilla-Milk">Vanilla-Milk</option> \
        <option value="Double-Chocolate" selected>Double-Chocolate</option> \
    </select>';

    const buttonStart = '<button class= "button" type="button" onclick="deleteFromCart(';

    const buttonEnd = ')">Remove from Cart</button>';

    var cart = localStorage.getItem("cart");
    cart = cart.split(";");
    for (i = 0; i < cart.length; i++) {
        var item = cart[i].split(",");
        if (item.length == 3) {
            var row = "";
            if (item[1].includes("1-roll")) {
                row += oneImageBlock;
                row += originalCinnamonRollBlock;
                row += oneRollBlock;
            }
            else if (item[1].includes("3-rolls")) {
                row += threeImageBlock;
                row += originalCinnamonRollBlock;
                row += threeRollBlock;
            }
            else if (item[1].includes("6-rolls")) {
                row += sixImageBlock;
                row += originalCinnamonRollBlock;
                row += sixRollBlock;
            } 
            else {
                row += twelveImageBlock;
                row += originalCinnamonRollBlock;
                row += twelveRollBlock;
            }
            if (item[2].includes("none")) {
                row += noneBlock;
            }
            else if (item[2].includes('Sugar-Milk')) {
                row += sugarMilkBlock;
            }
            else if (item[2].includes('Vanilla-Milk')) {
                row += vanillaMilkBlock;
            } else {
                row += doubleChocolateBlock;
            }
            row += buttonStart;
            row += i.toString();
            row += buttonEnd;
            var rowHTML = document.createElement('div');
            console.log(rowHTML);
            rowHTML.setAttribute('class', 'row');
            rowHTML.innerHTML = row.trim();
            var containers = document.getElementsByClassName('containers').item(0);
            containers.appendChild(rowHTML);
        }
    }
    updateCart();
    updatePrice();
}

// delete items from cart
function deleteFromCart(i) {
    var count = parseInt(localStorage.getItem("itemCount"));
    localStorage.setItem("itemCount", count - 1);
    var cart = localStorage.getItem("cart");
    cart = cart.split(";");
    cart.splice(i, 1);
    cart = cart.join(";");
    localStorage.setItem("cart", cart);
    location.reload();
}

// uodate price in cart
function updatePrice() {
    var cart = localStorage.getItem("cart");
    cart = cart.split(";");
    var price = 0;
    for (i = 0; i < cart.length; i++) {
        var item = cart[i].split(",");
        if (item.length == 3) {
            var row = "";
            if (item[1].includes("1-roll")) {
                price += 1
            }
            else if (item[1].includes("3-rolls")) {
                price += 3
            }
            else if (item[1].includes("6-rolls")) {
                price += 6
            } 
            else {
                price += 12
            }
        }
    }
    price = "Subtotal: $" + String(price) + ".00";
    document.getElementById("price").innerHTML = price;
}