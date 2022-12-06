/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

  let ex1FirstNumber;
  let ex1SecondNumber;
  ex1FirstNumber=12;
  ex1SecondNumber=11;
  console.log("esercizio 1");

  if(ex1FirstNumber===ex1SecondNumber){
    console.log("i due numeri sono uguali");
  } else if(ex1FirstNumber>ex1SecondNumber){
    console.log("il numero piu grande è : ",ex1FirstNumber);
  }else{
    console.log("il numero piu grande è : ",ex1SecondNumber);
  }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
  let ex2number;
  ex2number=5;
  console.log("esercizio 2");
  
  if(ex2number!==5)
  console.log("not equal");
  else
  console.log("equal to 5");


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/let ex3number;
  ex3number=-15;
  console.log("esercizio 3");
  if(ex3number%5===0){
    console.log("divisibile per 5");
  }else{
    console.log("non divisibile per 5");
  }


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let ex4firstNumber;
let ex4secondNumber;
ex4firstNumber=8;
ex4secondNumber=16;
console.log("esercizio 4");
if(ex4firstNumber===8 || ex4secondNumber==8)
{
  console.log("uno di essi è 8");
} 
if(ex4firstNumber+ex4secondNumber===8 || ex4firstNumber-ex4secondNumber===8 || ex4secondNumber-ex4firstNumber===8 ){
  console.log("la loro somma o sottrazione è 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
  let totalShoppingCart;
  totalShoppingCart=45;
  console.log("esercizio 5");
  if(50>=totalShoppingCart){
    totalShoppingCart=totalShoppingCart+10;
  }
  console.log("l'ammontare per il checkout è",totalShoppingCart);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
  console.log("esercizio 6");
  totalShoppingCart=totalShoppingCart-(totalShoppingCart*20/100);
  console.log("per il blackfriday il costo toale del carello è", totalShoppingCart);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log("esercizio 7");
let ex7firstNumber;
let ex7secondNumber;
let ex7thirdNumber;
let majorNumber;
let mediuNumber;
let minumNumber


ex7firstNumber=-20;
ex7secondNumber=-15;
ex7thirdNumber=-4;

if(ex7firstNumber>=ex7secondNumber){
  if(ex7secondNumber>=ex7thirdNumber){
    majorNumber=ex7firstNumber;
    mediuNumber=ex7secondNumber;
    minumNumber=ex7thirdNumber;
  }else if(ex7firstNumber>=ex7thirdNumber){
    majorNumber=ex7firstNumber;
    mediuNumber=ex7thirdNumber;
    minumNumber=ex7secondNumber;
  }
}
else{
  if(ex7secondNumber>=ex7thirdNumber){
    if(ex7firstNumber>=ex7thirdNumber){
      majorNumber=ex7secondNumber;
      mediuNumber=ex7firstNumber;
      minumNumber=ex7thirdNumber;
    }else {
      mejornumber=ex7thirdNumber;
      mediuNumber=ex7secondNumber;
      minumNumber=ex7firstNumber;
    }
  }else{
    majorNumber=ex7thirdNumber;
    mediuNumber=ex7secondNumber;
    minumNumber=ex7firstNumber;
  }
}


console.log(majorNumber,mediuNumber,minumNumber);


//da finire dopo

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

  let ex8number;
  ex8number=5;
  console.log("esercizio 8");
  if(typeof ex8number === "number")
  console.log("è un numero");
  else
  console.log("non è un numero");




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let ex9number;
ex9number=9;
console.log("esercizio 9");
if(ex9number%2===0)
console.log("è pari");
else
console.log("è dispari");


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */

  let val = 7 
  console.log("esercizio 10");
  if (val < 10) {
    if (val < 5) {
      console.log("Meno di 5")
    }
      else{
      console.log("Meno di 10");
     
    }
   } else {
      console.log("Uguale a 10 o maggiore");
    }




/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
console.log("esercizio 11");
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
}
console.log(me);



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
console.log("esercizio 12");
delete me.city;
console.log(me.city);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log("esercizio 13");
const removeLast= me.skills.pop();
console.log(removeLast);
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("esercizio 14");
const arrayex4= [];
arrayex4.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arrayex4);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("esercizio 15");
arrayex4[9]=100;
console.log(arrayex4[9]);
