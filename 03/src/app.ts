const button = document.querySelector("button");

function add(num1: number, num2: number) {
  if (num1 + num2 > 0) {
    return num1 + num2;
  }
}

function clickHandler(message: string) {
  console.log("clicked", message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(this, "test"));
}
