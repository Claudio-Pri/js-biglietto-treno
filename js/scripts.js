// dichiarazione variabili

const passengerAge = prompt("Qual'è la tua età?");
//come faccio a dire che può accettare solo numeri?
console.log('Età passeggero', passengerAge);

const travelDistance = prompt('Quanti chilometri devi percorrere?');
console.log('Distanza da percorrere', travelDistance, 'km');

// prezzo al chilometro
const pricePerKm = 0.21;

//prezzo base
let prezzoBase = travelDistance * pricePerKm;
let prezzoFinale;
let sconto;


