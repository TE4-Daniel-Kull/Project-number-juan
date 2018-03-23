var offers = false;
var news = false;

function toggleSearch() {
    var element = document.querySelector(".searchDiv");
    element.classList.toggle("show");

    element = document.querySelector(".suggested");
    element.classList.toggle("showSuggested");

    element = document.querySelector(".advSearch");
    element.classList.toggle("advSearchPressed");
}

function expandOffers() {
    if(!offers) {
        offers = true;
        var element = document.querySelector(".suggested")
        element.classList.add("offers");
    }
}

function minimizeOffers() {
    if(offers) {
        offers = false;
        var element = document.querySelector(".suggested")
        element.classList.remove("offers");
    }
}

function openNews() {
    if(!news) {
        minimizeOffers();
        news = true;
        var element = document.querySelector(".homepage");
        element.classList.remove("show");
        element = document.querySelector(".news");
        element.classList.add("show");
    }
}

function closeNews () {
    if(news) {
        news = false;
        var element = document.querySelector(".homepage");
        element.classList.add("show");
        element = document.querySelector(".news");
        element.classList.remove("show");
    }
}
