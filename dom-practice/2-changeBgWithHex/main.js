// onload handler
window.onload = function () {
  main();
};

// main function to change the color
function main() {
  const btn = document.getElementById("changeColorButton");
  const root = document.getElementById("root");
  const outputColor = document.getElementById("output-color");

  btn.addEventListener("click", function () {
    const colorCode = generateHexColor();
    root.style.backgroundColor = colorCode;
    outputColor.value = colorCode;
  });
}

// generate hex color
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
