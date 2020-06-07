// Scrie un program, care la click pe butonul start, va începe un
// countdown folosind valoarea introdusă în input în secunde,
// începutul countdown-ului. La click pe butonul stop, countdown-ul
// trebuie să se oprească și progressul să indice 0.
// În timpul progress-ului, el trebuie să fie afișat în pagină
// cu indicatoare pentru minute și secunde.

// 1. Scriem HTML-ul
// 2. Adăugăm id-uri pe input și butoane
// 3. Adăugăm event listner pe butoane
// 4. Citim valoarea din input, transformăm în număr și ștergem valoarea din input
// 5. Începem inteval-ul și îl oprimim
// 6. Implementăm countdown-ul cu condiția de 0 secunde rămase
// 7. Transformăm numărul total de secunde în minute și secunde rămase
// 8. Dăm id-uri la span-uri, le selectăm și schimbăm text-ul din interior
// 9. Creăm text-ul pentru minute și secunde(m și s)
// 10. Dacă numărul e mai mic ca 10, creăm strin-ul cu 0 în față
// 11. La stop, facem reset la span-uri cu valori de 0

let intervalId;
let numar;

window.startClick = function (){
  numar=Number(initInput.value);
  initInput.value="";
  intervalId=setInterval (function () {
console.log(numar);
    if (numar <= 0){
      clearInterval(intervalId)
    }
    else {
      numar=numar-1;
      afisareMin (numar);
      afisareSec (numar);
    } 
  }, 1000);
}
window.stopClick = function (){
  initInput.value="";
  clearInterval(intervalId)
  console.log(stop);
}

function afisareMin (numar){
  let min = Math.floor(numar/60); 
  if (min<10) {
    document.getElementById("min").innerHTML="0" + min + "m";
  }
  else {
    document.getElementById("min").innerHTML= min + "m";
  }
}
function afisareSec (numar){
  let sec = numar % 60;
  if (sec < 10 ) {
    document.getElementById("sec").innerHTML="0" + sec + "s";
  }
  else {
    document.getElementById("sec").innerHTML= sec + "s";
  }
}