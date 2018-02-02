function ToggleSearch() {
    var element = document.querySelector(".searchDiv");
    element.classList.toggle("show");

    element = document.querySelector(".suggested");
    element.classList.toggle("showSuggested");
}

/*
.menu {
    display: none;
}
.show {
    display: block;
}
*/