const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productPrice = urlParams.get('price');
const productImage = urlParams.get('image');
const productDescription = urlParams.get('description');

let container = document.createElement("div");
container.setAttribute("class", "productContainer");

let list = document.getElementById("productList");
list.remove();
list = document.createElement("div");
list.setAttribute("id", "productList");

let image = document.createElement("img");
image.setAttribute("id", "productImagePage");
image.setAttribute("src", productImage);
container.appendChild(image);

let name = document.createElement("p");
name.setAttribute("id", "productName");
name.innerHTML = productName;
container.appendChild(name);

let description = document.createElement("p");
description.setAttribute("id", "productDesc");
description.innerHTML = productDescription;
container.appendChild(description);

let price = document.createElement("p");
price.setAttribute("id", "productDesc");
price.innerHTML = productPrice;
container.appendChild(price);

let addBtn = document.createElement("button");
addBtn.setAttribute("id", "productPrice");
addBtn.setAttribute("onclick", "addToCart(this.value)");
addBtn.setAttribute("value", `${productName}#`+`${productPrice}#`+`${productDescription}#`+`${productImage}`);
addBtn.innerHTML = "Add to cart";
container.appendChild(addBtn);
list.appendChild(container);
contentElement.appendChild(list);