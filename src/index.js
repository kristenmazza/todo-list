import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello todo list!";
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
