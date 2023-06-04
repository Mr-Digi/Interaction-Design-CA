function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById("fname");
    let lastname = document.getElementById("lname");
    let message = document.getElementById("subject");
    let email = document.getElementById("email");

    let nameLabel = document.getElementById("nameLabel");
    let lastnameLabel = document.getElementById("lastnameLabel");
    let messageLabel = document.getElementById("messageLabel");
    let emailLabel = document.getElementById("emailLabel");
    let errorAmount = 0;

    if (name.value.length <= 2) {
        nameLabel.innerHTML = "Your name is required";
        errorAmount++;
        nameLabel.style.color = "red";
    } else {
        nameLabel.innerHTML = "First Name*";
        nameLabel.style.color = "black";
    }
    if (lastname.value.length <= 2) {
        lastnameLabel.innerHTML = "A lastname is required";
        errorAmount ++;
        lastnameLabel.style.color = "red";
    } else {
        lastnameLabel.innerHTML = "Last Name*";
        lastnameLabel.style.color = "black";
    }
    if (!email.value.includes("@")) {
        emailLabel.innerHTML = "Please enter a valid email";
        errorAmount++;
        emailLabel.style.color = "red";
    } else {
        emailLabel.innerHTML = "Email*";
        emailLabel.style.color = "black";
    }
    if (message.value.length < 10) {
        messageLabel.innerHTML = "You message must be 10 letters or longer";
        errorAmount++;
        messageLabel.style.color = "red";
    } else {
        messageLabel.innerHTML = "Message*";
        messageLabel.style.color = "black";
    }
    if (errorAmount <= 0) window.location.replace("contactSuccess.html");
}

function openMobile() {
    menu = document.getElementsByClassName("mobileMenu")[0].style.display = "block";
}

function closeMenumobile() {
    menu = document.getElementsByClassName("mobileMenu")[0].style.display = "none";
}