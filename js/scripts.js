// dichiarazione variabili

const passengerAge = prompt("Qual'è la tua età?");
//come faccio a dire che può accettare solo numeri?
console.log('Età passeggero', passengerAge);

const travelDistance = prompt('Quanti chilometri devi percorrere?');
console.log('Distanza da percorrere', travelDistance, 'km');

// prezzo al chilometro
const pricePerKm = 0.21;
console.log('pricePerKm', pricePerKm, '€');

//prezzo base
let prezzoBase = travelDistance * pricePerKm;
console.log('prezzo base', prezzoBase, '€');

let prezzoFinale;
let sconto;


if (passengerAge < 18) {
    sconto = ((prezzoBase / 100) * 20);
    console.log('sconto', '20%', sconto);
    prezzoFinale = prezzoBase - sconto;
}
else if (passengerAge >= 65) {
    sconto = ((prezzoBase / 100) * 40);
    console.log('sconto', '40%', sconto);
    prezzoFinale = prezzoBase - sconto;
}

else {
    prezzoFinale = prezzoBase;
    console.log('Prezzo intero', prezzoFinale);
}

document.getElementById('prezzo-biglietto').innerHTML = '€' + prezzoFinale.toFixed(2);





