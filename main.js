let flagUsa = document.querySelector(".flag-usa");
let flagGeo = document.querySelector(".flag-geo");
let select = document.querySelector(".selectlanguage");

select.addEventListener("click", function () {
  if (select.value == "GEO - GE") {
    flagGeo.style.display = "block";
    flagUsa.style.display = "none";
  } else {
    flagGeo.style.display = "none";
    flagUsa.style.display = "block";
  }
});

let search = document.querySelector(".search");

let input = document.querySelector(".input");
let img = document.querySelector(".img-search");
let hasPlaceholder = false;

img.addEventListener("click", function () {
  input.classList.toggle("style");
  if (hasPlaceholder == true) {
    input.removeAttribute("placeholder");
    hasPlaceholder = false;
  } else {
    input.setAttribute("placeholder", "search");
    hasPlaceholder = true;
  }
});

// let changeImg = document.querySelector(".changeImg");
// let slideimg = [
//   `download123.webp`,
//   `download.webp`,
//   `photo-1524242109383-e349707a106b.png`,
// ];
// let i =0;

// function winn(){
//     if(i<= 0){i = slideimg.length;
//     i--;
//     return setImg();
// }
// }
// function ukan(){

// }

// function setImg(){
//     return changeImg.setAttribute(`src`, `slideimg/` + slideimg[i]);
// }
// let button1 = document.querySelector(".btn1");
// let button2 = document.querySelector(".btn2");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let secondsection = document.querySelector(".secondsection");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop >= 100) {
    secondsection.style.left = "0%";
  }
});

let register = document.querySelector(".registr");
let singUp = document.querySelector(".singUp");
register.addEventListener("click", () => {
  singUp.classList.toggle("toggle");
});

let bigger = document.querySelector(".bigger");
let smaller = document.querySelector(".smaller");

bigger.addEventListener("click", () => {
  if (bigger.style.transform != "scale(1.3)") {
    bigger.style.transform = "scale(1.3)";
    smaller.style.transform = "scale(1)";
  } else {
    bigger.style.transform = "scale(1)";
  }
});

smaller.addEventListener("click", () => {
  if (smaller.style.transform != "scale(1.3)") {
    smaller.style.transform = "scale(1.3)";
    bigger.style.transform = "scale(1)";
  } else {
    smaller.style.transform = "scale(1)";
  }
});

let data = [
  {
    text: "Search the employee directory?",
    text2: "sdadasdhasdhkasjhfasjkfhaskfas",
  },
  {
    text: "Find the corporate calendar?",
    text2: "sdadasdhasdhkasjhfasjkfhaskfas",
  },
  {
    text: "See my benefits?",
    text2: "sdadasdhasdhkasjhfasjkfhaskfas",
  },
  {
    text: "Get my computer fixed?",
    text2: "sdadasdhasdhkasjhfasjkfhaskfas",
  },
  {
    text: "Visit the learning center?",
    text2: "sdadasdhasdhkasjhfasjkfhaskfas",
  },
  {
    text: "View my vacation days?",
    text2: "sdadasdhasdhkasjhfasjkfhaskfas",
  },
];

let arrow = document.querySelector(".arrow");
for (let i = 0; i < 6; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  arrow.appendChild(box);
let pAndAr = document.createElement("div");
box.appendChild(pAndAr);
pAndAr.classList.add("pAndAr");
  let pTag = document.createElement("p");
  pTag.innerHTML = data[i].text
  pTag.classList.add("pTag");
  pAndAr.appendChild(pTag);
  let butn = document.createElement("button");
  butn.classList.add("butn");
  butn.innerHTML = ">";
  pAndAr.appendChild(butn);
  let pteg = document.createElement("p");
  pteg.classList.add("pteg");
  box.appendChild(pteg);
  pteg.innerHTML = data[i].text2;

  butn.addEventListener("click", function () {
  pteg.classList.toggle("pteg1")
  });

}



