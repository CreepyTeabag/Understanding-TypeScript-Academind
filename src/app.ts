const button = document.querySelector("button");

function add2(n1: number, n2: number) {
  if (n1 + n2 > 0) return n1 + n2;
}

function clickHandler(message: string) {
  console.log("Clicked! ", message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
