const contentElement = document.getElementsByClassName("content")[0];

const cart = [
    
];

function onload() {
    let list = document.getElementById("jacketList");
    list.remove();
    list = document.createElement("div");
    list.setAttribute("id", "jacketList");
    for (let i = 0; i < featured.length; i++) {
        let container = document.createElement("div");
        container.setAttribute("class", "productContainer");

        let image = document.createElement("img");
        image.setAttribute("id", "productImage");
        image.setAttribute("src", `images/${featured[i].imageName}.png`);
        container.appendChild(image);

        let name = document.createElement("p");
        name.setAttribute("id", "productName");
        name.innerHTML = featured[i].name;
        container.appendChild(name);

        let description = document.createElement("p");
        description.setAttribute("id", "productDesc");
        description.innerHTML = featured[i].description;
        container.appendChild(description);

        let addBtn = document.createElement("button");
        addBtn.setAttribute("id", "productPrice");
        addBtn.setAttribute("onclick", "addToCart(this.value)");
        addBtn.setAttribute("value", `${i}`);
        addBtn.innerHTML = "Add to cart";
        container.appendChild(addBtn);
        list.appendChild(container);
        contentElement.appendChild(list);
    }
}

onload();

function addToCart(value) {
    const cartElement = document.getElementById("cart");
    let cartAmount = document.getElementById("cartAmount");
    let amountInCart = 0;
    if (cartAmount) {
        amountInCart = Number(cartAmount.innerHTML);
        cartAmount.innerHTML = amountInCart+1;
    } else {
        cartAmount = document.createElement("p");
        cartAmount.setAttribute("id", "cartAmount");
        cartAmount.innerHTML = 1;
        cartElement.appendChild(cartAmount);
    }
    
    cart.push(featured[value]);
}

function opencart() {
    if (cart.length <= 0) {
        return;
    }
    let overlay = document.getElementById("cartOverlay");
    let cartContent = document.getElementsByClassName("cartContent")[0];
    cartContent.remove();
    cartContent = document.createElement("div");
    cartContent.setAttribute("class", "cartContent");
    overlay.appendChild(cartContent);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        let container = document.createElement("div");
        container.setAttribute("class", "cartContainer");

        let productImage = document.createElement("img");
        productImage.setAttribute("id", "cartImage");
        productImage.setAttribute("src", `images/${cart[i].imageName}.png`);
        container.appendChild(productImage);

        let holderDiv = document.createElement("div");

        let productName = document.createElement("p");
        productName.setAttribute("id", "cartName");
        productName.innerHTML = cart[i].name;
        holderDiv.appendChild(productName);

        let productDesc = document.createElement("p");
        productDesc.setAttribute("id", "cartDesc");
        productDesc.innerHTML = cart[i].description;
        holderDiv.appendChild(productDesc);

        let productPrice = document.createElement("p");
        productPrice.setAttribute("id", "cartprice");
        productPrice.innerHTML = "Cost $" + cart[i].price;
        holderDiv.appendChild(productPrice);

        totalPrice = Number(cart[i].price+totalPrice);

        container.appendChild(holderDiv);
        cartContent.appendChild(container);
    }

    let total = document.createElement("div");
    total.setAttribute("class", "cartTotal");
    let totalText = document.createElement("p");
    totalText.innerHTML = "Total: $" + totalPrice;
    let checkoutBtn = document.createElement("button");
    checkoutBtn.setAttribute("id", "checkout");
    let btnLink = document.createElement("a");
    btnLink.setAttribute("href", "checkout.html");
    checkoutBtn.innerHTML = "Checkout";
    total.appendChild(totalText);
    btnLink.appendChild(checkoutBtn);
    total.appendChild(btnLink);
    cartContent.appendChild(total);

    document.getElementById("cartOverlay").style.display = "block";
}

function closecart() {
    document.getElementById("cartOverlay").style.display = "none";
}

function openMobile() {
    menu = document.getElementsByClassName("mobileMenu")[0].style.display = "block";
}

function closeMenumobile() {
    menu = document.getElementsByClassName("mobileMenu")[0].style.display = "none";
}

function getJackets(value) {
    let list = document.getElementById("jacketList");
    list.remove();
    list = document.createElement("div");
    list.setAttribute("id", "jacketList");
    for (let i = 0; i < featured.length; i++) {
        if (featured[i].sex != value) continue;
        let container = document.createElement("div");
        container.setAttribute("class", "productContainer");

        let image = document.createElement("img");
        image.setAttribute("id", "productImage");
        image.setAttribute("src", `images/${featured[i].imageName}.png`);
        container.appendChild(image);

        let name = document.createElement("p");
        name.setAttribute("id", "productName");
        name.innerHTML = featured[i].name;
        container.appendChild(name);

        let description = document.createElement("p");
        description.setAttribute("id", "productDesc");
        description.innerHTML = featured[i].description;
        container.appendChild(description);

        let addBtn = document.createElement("button");
        addBtn.setAttribute("id", "productPrice");
        addBtn.setAttribute("onclick", "addToCart(this.value)");
        addBtn.setAttribute("value", `${i}`);
        addBtn.innerHTML = "Add to cart";
        container.appendChild(addBtn);
        list.appendChild(container);
        contentElement.appendChild(list);
    }
}