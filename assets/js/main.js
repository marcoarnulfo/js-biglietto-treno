
//Il programma dovrà chiedere all'utente:

 //il numero di chilometri che vuole percorrere

    const kmDaPercorrere = Number (prompt("Quanti km vuoi percorrere? =)")) ;
    console.log(kmDaPercorrere);

 //e l'età del passeggero.

    const anniPasseggero = Number (prompt("Bene! Ora dimmi quanti anni hai =)")) ;
    console.log(anniPasseggero);

 //Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

 //il prezzo del biglietto è definito in base ai km (0.21 € al km)

    const euro = "€" ;
    const basePrice = 0.21 ;
    const priceNoDiscount = (basePrice * kmDaPercorrere).toFixed(2) ;
    console.log(priceNoDiscount + euro);

 //va applicato uno sconto del 20% per i minorenni

   //  const prezzoMinorenne = (priceNoDiscount / 100 * 20).toFixed(2) ;
   // console.log(prezzoMinorenne + euro);

 //va applicato uno sconto del 40% per gli over 65.

   // const prezzoOver = (priceNoDiscount / 100 * 40).toFixed(2) ;
   // console.log(prezzoOver + euro);

if (anniPasseggero < 18) {

    const prezzoMinorenne = ( priceNoDiscount / 100 * 20).toFixed(2) ;

    //console.log(prezzoMinorenne + euro);
    document.getElementById("price").innerHTML = prezzoMinorenne + euro;

} else if (anniPasseggero > 65) {

    const prezzoOver = (priceNoDiscount / 100 * 40).toFixed(2) ;
    //console.log(prezzoOver + euro);
    document.getElementById("price").innerHTML = prezzoOver + euro;
} else{
    document.getElementById("price").innerHTML = priceNoDiscount + euro;
}
