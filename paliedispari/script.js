//Chiedo all'utente di inserire un numero pari o dispari 
const sceltaUtente = prompt('Scegli pari o dispari:').toLowerCase;

//Chiedo all'utente di inserire un numero compreso tra 1 e 5
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5:'));

//Creo la variabile e aggiungo la funzione per il numero generato Random dal computer
function getRandomNumber(){
  return Math.floor(Math.random()* 5) + 1; 
}

const numeroRandom = getRandomNumber();
console.log(`Il tuo numero è ${numeroUtente} , il mio è ${numeroRandom}`);

//Faccio la somma del numero inserito dall'utente e il numero scelto dal computer e diviso la somma per 2 per vedere se è pari o dispari

//Opzione1
const somma = numeroUtente + numeroRandom;
const isPari = somma % 2 === 0;


//Determino il vincitore

let winner;

if((sceltaUtente === 'pari' && isPari) || (sceltaUtente === 'dispari' && !isPari)) {
  winner = 'Utente';
} else {
  winner = 'Computer';
}
console.log(`Il vincitore è ${winner}`)

