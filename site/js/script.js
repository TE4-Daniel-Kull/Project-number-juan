var offers = false;
var news = false;

function ToggleSearch() {
    var element = document.querySelector(".searchDiv");
    element.classList.toggle("show");

    element = document.querySelector(".suggested");
    element.classList.toggle("showSuggested");

    element = document.querySelector(".advSearch");
    element.classList.toggle("advSearchPressed");
}

function ExpandOffers() {
    if(!offers) {
        offers = true;
        var element = document.querySelector(".suggested")
        element.classList.add("offers");
    }
}

function MinimizeOffers() {
    if(offers) {
        offers = false;
        var element = document.querySelector(".suggested")
        element.classList.remove("offers");
    }
}

function OpenNews() {
    if(!news) {
        MinimizeOffers();
        news = true;
        var element = document.querySelector(".homepage");
        element.classList.remove("show");
        element = document.querySelector(".news");
        element.classList.add("show");
    }
}

function CloseNews () {
    if(news) {
        news = false;
        var element = document.querySelector(".homepage");
        element.classList.add("show");
        element = document.querySelector(".news");
        element.classList.remove("show");
    }
}
