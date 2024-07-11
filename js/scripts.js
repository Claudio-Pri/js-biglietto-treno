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





//solo senza sconto
prezzoFinale = prezzoBase;

document.getElementById('prezzo-biglietto').innerHTML = '€' + prezzoFinale;





