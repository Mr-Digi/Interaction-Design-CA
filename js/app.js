const contentElement = document.getElementsByClassName("content")[0];

const cart = [
    
];

function onload() {
    let list = document.getElementById("jacketList");
    list.remove();
    list = document.createElement("div");
    list.setAttribute("id", "jacketList");

    var key = "ck_43a862fd9e91493600da06f09a81e8bc05414252";
    var secret = "cs_8181a9be3fd8795bd757e3ec790723d7aada9951";
    const url = "https://netlify.mrdigi.tv/wp-json/wc/v3/products?consumer_key="+ key + "&consumer_secret=" + secret;
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(function(data) {
        for (let k = 0; k < data.length; k++) {
            console.log(data[k]);
            let container = document.createElement("div");
            container.setAttribute("class", "productContainer");

            let image = document.createElement("img");
            image.setAttribute("id", "productImage");
            image.setAttribute("src", data[k].images[0].src);
            container.appendChild(image);

            let name = document.createElement("p");
            name.setAttribute("id", "productName");
            name.innerHTML = data[k].name;
            container.appendChild(name);

            let description = document.createElement("p");
            description.setAttribute("id", "productDesc");
            description.innerHTML = data[k].description;
            container.appendChild(description);

            let addBtn = document.createElement("button");
            addBtn.setAttribute("id", "productPrice");
            addBtn.setAttribute("onclick", "addToCart(this.value)");
            addBtn.setAttribute("value", `${data[k].name}#`+`${data[k].price}#`+`${data[k].description}#`+`${data[k].images[0].src}`);
            addBtn.innerHTML = "Add to cart";
            container.appendChild(addBtn);
            list.appendChild(container);
            contentElement.appendChild(list);
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

onload();

function addToCart(value) {
    const cartElement = document.getElementById("cart");
    let cartAmount = document.getElementById("cartAmount");
    value = value.split("#");
    let amountInCart = 0;
    let thisItem = {
        name: value[0],
        imageURL: value[3],
        description: value[2],
        price: value[1]    
    };
    if (cartAmount) {
        amountInCart = Number(cartAmount.innerHTML);
        cartAmount.innerHTML = amountInCart+1;
    } else {
        cartAmount = document.createElement("p");
        cartAmount.setAttribute("id", "cartAmount");
        cartAmount.innerHTML = 1;
        cartElement.appendChild(cartAmount);
    }
    
    cart.push(thisItem);
}
function showCart() {
    console.log(cart);
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
        productImage.setAttribute("src", `${cart[i].imageURL}`);
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
        totalPrice += Number(cart[i].price);

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
    var key = "ck_43a862fd9e91493600da06f09a81e8bc05414252";
    var secret = "cs_8181a9be3fd8795bd757e3ec790723d7aada9951";
    const url = "https://netlify.mrdigi.tv/wp-json/wc/v3/products?consumer_key="+ key + "&consumer_secret=" + secret;
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(function(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].tags[0] + " | " + value);
            if (data[i].tags[0] != value) continue;
            let container = document.createElement("div");
            container.setAttribute("class", "productContainer");

            let image = document.createElement("img");
            image.setAttribute("id", "productImage");
            image.setAttribute("src", `${data[i].images[0].src}`);
            container.appendChild(image);

            let name = document.createElement("p");
            name.setAttribute("id", "productName");
            name.innerHTML = data[i].name;
            container.appendChild(name);

            let description = document.createElement("p");
            description.setAttribute("id", "productDesc");
            description.innerHTML = data[i].description;
            container.appendChild(description);

            let addBtn = document.createElement("button");
            addBtn.setAttribute("id", "productPrice");
            addBtn.setAttribute("onclick", "addToCart(this.value)");
            addBtn.setAttribute("value", `${data[k].name}#`+`${data[k].price}#`+`${data[k].description}#`+`${data[k].images[0].src}`);
            addBtn.innerHTML = "Add to cart";
            container.appendChild(addBtn);
            list.appendChild(container);
            contentElement.appendChild(list);
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}