const form = document.querySelector("form");
// console.log("form");
const section = document.querySelector("section");

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
    const numCp = Math.floor(Math.random() * 100000) + 1;
    const numCar = Math.floor(Math.random() * 10) + 1;
    const kmBase = 0.21
    const kmPrezzo = parseInt(kmViaggio) * kmBase;
    let sconto = "";

    if (etaUtente <= 18) {
        sconto = 0.2;
    } else if (etaUtente >= 65) {
        sconto = 0.4;
    }
    const prezzoFinale = kmPrezzo * (1 - sconto);
    const risultato = `${prezzoFinale.toFixed(2)}€`;
    console.log(risultato);

    section.innerHTML = `<div class="row d-flex justify-content-center bg-light rounded">
                    <h2 class="bg-success rounded py-2">IL TUO BIGLIETTO</h2>
                    <div class="col-4">

                        <h4>NOME PASSEGGERO</h4>
                        <span class="nome">${datiUtente}</span>
                    </div>
                    <div class="col-2">
                        <h5>Offerta</h5>
                        <span class="tipoBigl">${etaUtente}</span>
                    </div>
                    <div class="col-2">
                        <h5>Carrozza</h5>
                        <span class="nCarrozza">${numCar}</span>
                    </div>
                    <div class="col-2">
                        <h5>Codice CP</h5>
                        <span class="codCp">${numCp}</span>
                    </div>
                    <div class="col-2">
                        <h5>Costo Biglietto</h5>
                        <span class="costoBigl">${risultato}</span>
                    </div>
                    <div class="col-12 bg-danger rounded py-1 display-6"><strong>Buon Viaggio!</strong></div>
                </div>`
section.classList.remove("d-none");
});

form.addEventListener("reset", function() {
        section.classList.add("d-none");
        section.innerHTML = "";
});


































