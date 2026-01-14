"use strict";

/* ============================================

        LOGIKA APLIKACJI - część testowalna
               
   ============================================ */


// FR.1

// Zwraca tablicę count unikalnych liczb całkowitych z domkniętego zakresu [min, max]. 
function generateRandomNumbers(min, max, count){

    const temp = [];

    while(temp.length < count){

        const rnd = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Poprawione: dodaj liczbę TYLKO jeśli nie została jeszcze wylosowana
        if(!temp.includes(rnd)){
            temp.push(rnd);
        }

    }

    return temp;
}


// FR.2

// Zwraca liczbę elementów z userNumbers, które występują w randomNumbers. 
function countMatches(userNumbers, randomNumbers) {
  
    let matches = 0;

    for(let i = 0; i < userNumbers.length; i++){
        
        if(randomNumbers.includes(userNumbers[i])){
            matches++;
        }

    }

    // Poprawione: zwracaj faktyczną liczbę trafień
    return matches;
}


// FR.3

// Zwraca string HTML prezentujący wylosowane liczby oraz komunikat o liczbie trafień. 
function buildResultHtml(randomNumbers, matches) {

    let resultHTML = `
    
        <p class="resultTable">
            Wylosowane liczby: ${randomNumbers.join(", ")}.
        </p>

    `;

    if(matches === 0){
        resultHTML += `<p>Brak trafień</p>`;
    }else{
        resultHTML += `<p>Liczba trafień: ${matches}</p>`;
    }

    return resultHTML;
  
}

export { generateRandomNumbers, countMatches, buildResultHtml };
