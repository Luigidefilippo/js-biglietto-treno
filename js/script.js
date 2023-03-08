// Chiedere all'utente quanti km vuole percorrere e l'eta
// Essere cortese e chiedere il nome
const userName = prompt("Benvenuto! Come ti chiami");
console.log(userName);
document.getElementById("userName").innerHTML = userName;

// Chiedere il numero di km che vuole percorrere
const rangeKm = parseInt(prompt("Quanti Km vuoi vuoi percorrere?"));
console.log(rangeKm);
document.getElementById("rangeKm").innerHTML = rangeKm;
// Chiedere l'eta per applicare lo sconto dovuto
const userAge = parseInt(prompt("Dicci quanti anni hai e in base a ciò applicheremo un tipo di sconto"));
console.log(userAge);
document.getElementById("userAge").innerHTML = userAge;

// Calcolare il prezzo totale del biglietto
const ticketPrice = rangeKm * 0.21;
console.log(ticketPrice);
document.getElementById("ticketPrice").innerHTML = ticketPrice;

// Possibilità di applicare un determinato sconto se
// 1) l'utente ha meno di 18 anni e avrà uno sconto del 20%
// 2)Se l'utente avrà un'eta superiore ai 65 anni avrà il 40% di sconto
// applicare una condizione if esle
 let discount = 0;
 if(userAge < 18){
    discount = 0.2;
 }else if ( userAge >= 65){
    discount = 0.4;
 }
 const totalPrice = ticketPrice - (ticketPrice * discount);
 console.log(`${userName}, il prezzo totale del tuo biglietto scontato  del treno è ${totalPrice.toFixed(2)} euro.`);
 document.getElementById("totalPrice").innerHTML = totalPrice;