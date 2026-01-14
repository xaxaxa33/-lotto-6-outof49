"use strict";

import {generateRandomNumbers, countMatches, buildResultHtml} from "./utilities.js"

    /* ============================================

            WIDOK APLIKACJI - obsługa DOM
                
   ============================================ */



// FR.4

//Czyści widok wyników. 
function onFormReset(){

   const resultDiv = document.getElementById("result");
   resultDiv.innerHTML = "";

}



// FR.5


// Renderuje wynik  
function displayResult(randomNumbers, matches){

    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = buildResultHtml(randomNumbers, matches);

}

// FR.6


// Odczytuje wartości
function getUserInput() {
    return [
        parseInt(document.getElementById("num1").value),
        parseInt(document.getElementById("num2").value),
        parseInt(document.getElementById("num3").value),
        parseInt(document.getElementById("num4").value),
        parseInt(document.getElementById("num5").value),
        parseInt(document.getElementById("num6").value)
    ];
}

// FR.7

// Obsługuje wysłanie formularza bez przeładowania strony.
function onFormSubmit(e) {
  
    e.preventDefault();

    const min = 1;
    const max = 49;
    const count = 6;
    const userNumbers = getUserInput();
    const randomNumbers = generateRandomNumbers(min, max, count);
    const matches = countMatches(userNumbers, randomNumbers);
    

      displayResult(randomNumbers, matches);
}


//  Aplikacja reaguje globalnie na zdarzenia reset i submit na dokumencie. 


document.addEventListener("reset", onFormReset);

document.addEventListener("submit", onFormSubmit);

