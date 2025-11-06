const form = document.querySelector("form");
// console.log("form");

const datiInput = document.getElementById("anagrafica");
// console.log("datiInput");
const kmInput = document.getElementById("percorrenza");
// console.log("kmInput");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    const datiUtente = datiInput.value;
    const kmViaggio = kmInput.value;
    console.log("Nome e cognome:", datiUtente);
    console.log("Km da percorrere:", kmViaggio);

});





   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
