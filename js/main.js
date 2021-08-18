let mainImage = document.getElementById("img-main");
let circle = document.getElementById("circle");

document.getElementById("img-one").onclick = function () {
  mainImage.setAttribute(
    "src",
    "images/frappuccino-drink-chocolate-starbucks-matcha-white.png"
  );
  circle.style.backgroundColor = "var(--main-color)";
};
document.getElementById("img-two").onclick = function () {
  mainImage.setAttribute("src", "images/tea-coffee-drink-starbucks-latte.png");
  circle.style.backgroundColor = "rgb(235, 116, 149)";
};
document.getElementById("img-three").onclick = function () {
  mainImage.setAttribute(
    "src",
    "images/coffee-frappuccino-drink-latte-starbucks-unicorn.png"
  );
  circle.style.backgroundColor = "rgb(215, 82, 177)";
};
