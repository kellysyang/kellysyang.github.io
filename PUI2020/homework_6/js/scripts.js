function updateCart() {
    var itemCount = localStorage.getItem('itemCount');

    if (itemCount == null) {
        itemCount = 0
    }
    var cart = "Cart (" + itemCount + ")";

    document.getElementById('cart').innerHTML = cart;
}

updateCart();

function addToCart() {
    var itemCount = localStorage.getItem('itemCount');
    itemCount = parseInt(itemCount) + 1;

    localStorage.setItem('itemCount', itemCount);

    updateCart();
}

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

function updateCartImage() {
    item = document.getElementById('rolls').value;
    
    if (item == "1") {
        update1();
    }
    else if (item == "3") {
        update3();
    }
    else if (item == "6") {
        update6();
    }
    else if (item == "12") {
        update12();
    }
}

function updateCartName() {
    item = document.getElementById('glazing').value;

    if (item == "None") {
        updateOriginal();
    }
    else if (item == "Sugar-Milk") {
        updateSugar();
    }
    else if (item == "Vanilla-Milk") {
        updateVanilla();
    }
    else if (item == "Double-Chocolate") {
        updateChocolate();
    }
}