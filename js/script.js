// Chiedere all'utente quanti km vuole percorrere e l'eta
// Essere cortese e chiedere il nome
const userName = prompt("Benvenuto! Come ti chiami");
console.log(userName);

// Chiedere il numero di km che vuole percorrere
const rangeKm = parseInt(prompt("Quanti Km vuoi vuoi percorrere?"));
console.log(rangeKm);
// Chiedere l'eta per applicare lo sconto dovuto
const userAge = parseInt(prompt("Dicci quanti anni hai e in base a ciò applicheremo un tipo di sconto"));
console.log(userAge);

// Calcolare il prezzo totale del biglietto
const ticketPrice = rangeKm * 0.21;
console.log(ticketPrice);


