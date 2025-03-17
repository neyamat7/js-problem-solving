let URL = "https://openapi.programming-hero.com/api/peddy/pets";
const buttons = document.querySelectorAll("button");

const getCat = async () => {
  console.log("getting data");
  let response = await fetch(URL);
  let data = await response.json();
  displayData(data.pets);
};

getCat();

for (const btn of buttons) {
  btn.addEventListener("click", function (e) {
    displayCategory(e.target.id);
  });
}
let allCatData;
function displayData(data) {
  allCatData = data;
  console.log(data);
}

function displayCategory(id) {
  const cats = allCatData.filter((cat) => cat.category === id);
  console.log(cats);
}
