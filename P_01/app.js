let textarea= document.getElementById("textarea");
let Maxcounter = document.getElementById("Maxcounter");
let Remaincounter=document.getElementById("Remaincounter");
let remain=50;
textarea.addEventListener("keyup",()=>{
    update();
})
function update(event){
    Maxcounter.innerHTML=textarea.value.length;
    Remaincounter.innerHTML=remain-textarea.value.length;
}
