// onload handler
window.onload = function () {
  main();
};

const copyBtn = document.getElementById("copyBtn");

// main function to change the color
function main() {
  const btn = document.getElementById("changeColorButton");
  const root = document.getElementById("root");
  const outputColor = document.getElementById("output-color");

  btn.addEventListener("click", function () {
    const colorCode = generateHexColor();
    root.style.backgroundColor = colorCode;
    outputColor.value = colorCode;
    showToastMsg(`${colorCode} copied!`);
  });
  copyBtn.addEventListener("click", function () {
    window.navigator.clipboard.writeText(outputColor.value);
  });
  showToastMsg(`${outputColor.value} copied!`);
}

// generate hex color
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function showToastMsg(msg) {
  const taostDiv = document.getElementById("toast");
  copyBtn.addEventListener("click", function () {
    taostDiv.classList.remove("ani");
    taostDiv.classList.add("animate-fade-in-scale");
    taostDiv.innerHTML = `<span>
    ${msg}
    </span>`;
  });

  taostDiv.addEventListener("click", function () {
    taostDiv.classList.remove("animate-fade-in-scale");
    taostDiv.classList.add("animate-fade-out-scale");
    taostDiv.classList.add("ani");
  });
}
