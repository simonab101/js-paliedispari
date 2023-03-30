//Chiedo all'utente di inserire una parola
const parola = prompt('Inserisci una parola:');

//Creo una funzione;
function isPalindroma(str) {

  //Converto la stringa in lettere minuscole
  str = str.toLowerCase();

  //Inverto l'ordine delle lettere, con split mi tolgo le spaziature e con join mi creo la stringa
  strReverse = str.split('').reverse().join('');

  //Verico se str è uguale uguale a strReverse
  return str === strReverse;
}

//Creo ciclo per ciclare le parole inserite;
if (isPalindroma(parola)) {
  console.log('La parola inserita è palindroma!')
}else{
  console.log('La parola inserita non è palindroma!')
}





