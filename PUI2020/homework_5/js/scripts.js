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

function updateoriginal() {
    document.getElementById('producttitle').innerHTML = "Original Cinnamon Roll";
}

function updatesugar() {
    document.getElementById('producttitle').innerHTML = "Sugar-Milk Original Cinnamon Roll";
}

function updatevanilla() {
    document.getElementById('producttitle').innerHTML = "Vanilla-Milk Original Cinnamon Roll";
}

function updatechocolate() {
    document.getElementById('producttitle').innerHTML = "Double Chocolate Original Cinnamon Roll";
}