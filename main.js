let flagUsa = document.querySelector(".flag-usa");
let flagGeo = document.querySelector(".flag-geo");
let select = document.querySelector(".selectlanguage");

select.addEventListener("click", function(){
    if(select.value=="GEO - GE"){
        flagGeo.style.display="block";
        flagUsa.style.display="none";
    }else { 
         flagGeo.style.display="none";
        flagUsa.style.display="block";}
      
    

})


let search = document.querySelector(".search");

let input = document.querySelector(".input");
let img = document.querySelector(".img-search");
let hasPlaceholder = false;

img.addEventListener("click", function(){ 
    
    input.classList.toggle("style")
    if(hasPlaceholder==true){
         input.removeAttribute("placeholder");
    hasPlaceholder = false;
} else{
    input.setAttribute("placeholder", "search");
    hasPlaceholder = true;
}
    
})

