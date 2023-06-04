function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById("fname");
    let lastname = document.getElementById("lname");
    let message = document.getElementById("subject");

    let nameLabel = document.getElementById("nameLabel");
    let lastnameLabel = document.getElementById("lastnameLabel");
    let messageLabel = document.getElementById("messageLabel");

    if (name.value.length <= 2) {
        nameLabel.innerHTML = "Your name is required";
        nameLabel.style.color = "red";
    }
    if (lastname.value.length <= 2) {
        lastnameLabel.innerHTML = "A lastname is required";
        lastnameLabel.style.color = "red";
    }
    if (message.value.length < 10) {
        messageLabel.innerHTML = "You message must be 10 letters or longer";
        messageLabel.style.color = "red";
    }
    console.log("Form successfully submitted");
}

function openMobile() {
    menu = document.getElementsByClassName("mobileMenu")[0].style.display = "block";
}

function closeMenumobile() {
    menu = document.getElementsByClassName("mobileMenu")[0].style.display = "none";
}