//makes sure document is ready, then adds all event listeners
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//getting classes of inputs to compare them later
var spans = document.getElementsByClassName("changing-span")
var usernames = document.getElementsByClassName("change-user-name")
var emails = document.getElementsByClassName("change-user-email")
var countries = document.getElementsByClassName("change-user-country")
var cities = document.getElementsByClassName("change-user-city")
var addresses = document.getElementsByClassName("change-user-address")
var passwords = document.getElementsByClassName("change-user-password")

//adds all event listeners
function ready() {
    //adds listener to the save button
    var saveBtn = document.getElementById("profile-save-btn")
    saveBtn.addEventListener('click', makeChanges)
    // usernames[0].addEventListener("keyup", null)
}

function makeChanges() {
    //getting all the values of the text inputs
    var name1 = usernames[0].value;
    var name2 = usernames[1].value;
    var email1 = emails[0].value;
    var email2 = emails[1].value;
    var country1 = countries[0].value;
    var country2 = countries[1].value;
    var city1 = cities[0].value;
    var city2 = cities[1].value;
    var address1 = addresses[0].value;
    var address2 = addresses[1].value;
    var password1 = passwords[0].value;
    var password2 = passwords[1].value;

    //making sure all the inputs are similar to each other and not null
    if (name1 == name2 && name1 != "") {
        spans[0].innerHTML = "Your new username is " + name1
        console.log(name1)
        console.log(name2)
    }
    else if (name1 != name2 && name1 != "") {
        spans[0].innerHTML = "Sorry, the inputs do not match"
    }

    if (email1 == email2 && email1 != "") {
        spans[1].innerHTML = "Your new username is " + email1
    }
    else if (email1 != email2 && email1 != "") {
        spans[1].innerHTML = "Sorry, the inputs do not match"
    }

    if (country1 == country2 && country1 != "") {
        spans[2].innerHTML = "Your new username is " + country1
    }
    else if (country1 != country2 && country1 != "") {
        spans[2].innerHTML = "Sorry, the inputs do not match"
    }

    if (city1 == city2 && city1 != "") {
        spans[3].innerHTML = "Your new username is " + city1
    }
    else if (city1 != city2 && city1 != "") {
        spans[3].innerHTML = "Sorry, the inputs do not match"
    }

    if (address1 == address2 && address1 != "") {
        spans[4].innerHTML = "Your new username is " + address1
    }
    else if (address1 != address2 && address1 != "") {
        spans[4].innerHTML = "Sorry, the inputs do not match"
    }

    if (password1 == password2 && password1 != "") {
        spans[5].innerHTML = "Password has been successfully changed"
    }
    else if (password1 != password2 && password1 != "") {
        spans[5].innerHTML = "Sorry, the inputs do not match"
    }

    alert("Information has been saved!")
}