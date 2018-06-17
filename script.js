var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.getElementById("random");

function randomizeButton() {
    color1.value = randomizeColor();
    color2.value = randomizeColor();
    changeBackground();
}

randomizeButton();

function randomizeColor() {
    return randomColor = "#000000".replace(/0/g, function() {
        return (~~(Math.random()*16)).toString(16);
    });
}

 function changeBackground() {
    body.style.background = "linear-gradient(to right, " +
    color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}
  

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

randomize.addEventListener("click", randomizeButton);

////Sección 11, clase 107
//
//1. Write code so that the colour inputs match the background generated on the first page load.