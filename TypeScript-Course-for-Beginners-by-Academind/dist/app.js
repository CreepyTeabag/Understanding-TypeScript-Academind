"use strict";
const button = document.querySelector("button");
function add2(n1, n2) {
    if (n1 + n2 > 0)
        return n1 + n2;
}
function clickHandler(message) {
    console.log("Clicked! ", message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
