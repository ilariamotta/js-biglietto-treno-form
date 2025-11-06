const form = document.querySelector("form");
// console.log("form");

const datiInput = document.getElementById("anagrafica");
// console.log("datiInput");
const kmInput = document.getElementById("percorrenza");
// console.log("kmInput");
const etaInput = document.getElementById("fasciaeta");
// console.log("etaInput");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const datiUtente = datiInput.value;
    const kmViaggio = kmInput.value;
    const etaUtente = etaInput.value;
    console.log(etaUtente);
    const kmBase = 0.21
    const kmPrezzo = parseInt(kmViaggio) * kmBase;
    let sconto = "";

    if (etaUtente <= 18) {
        sconto = 0.2;
    } else if (etaUtente >= 65) {
        sconto = 0.4;
    }
    const prezzoFinale = kmPrezzo * (1 - sconto);
    const risultato = `Il prezzo del biglietto è di ${prezzoFinale.toFixed(2)}€`;
    console.log(risultato);
});
































