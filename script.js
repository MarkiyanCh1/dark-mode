const input = document.querySelector(".input");
const body = document.querySelector("body");

input.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (input.checked) {
    body.style.backgroundImage = "url('images/dark-bg.jpg')";
  } else {
    body.style.backgroundImage = "url('images/light-bg.jpg')";
  }
}

input.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}
