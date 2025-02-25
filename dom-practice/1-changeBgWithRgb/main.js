// onload handler
window.onload = function () {
  main();
};

function main() {
  const btn = document.getElementById("changeColorButton");
  const root = document.getElementById("root");

  btn.addEventListener("click", function () {
    const color = generateRgbColor();
    root.style.backgroundColor = color;
  });
}

function generateRgbColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
