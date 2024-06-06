var bigSize = document.querySelector(".bigSize");
var smallSize = document.querySelector(".smallSize"); 
var par =document.querySelector("div");
function biggerSize(){
    par.classList.add("font"); 
}
function smallerSize() {
    par.classList.remove("font");
}
bigSize.onclick = biggerSize;
smallSize.onclick = smallerSize;
