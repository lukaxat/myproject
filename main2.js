let data;
await fetch("https://covid-api.mmediagroup.fr/v1/cases")
  .then((Response) => Response.json())
  .then((json) => {
    data = json;
  });
let item;
console.log(data);
let select = document.querySelector("select");
let search = document.querySelector(".search");
let div2 = document.querySelector(".div2");
let para = document.querySelector(".para");
for (item in data) {
  let option = document.createElement("option");
  select.appendChild(option);
  option.innerHTML = item;
}

search.addEventListener("click", function () {
  para.innerHTML = `confirmed value: ${
    data[select.value].All.confirmed
  }<br> deaths:${data[select.value].All.deaths}<br> population:${
    data[select.value].All.population
  }<br>  recovered:${data[select.value].All.recovered}`;
});
