'use strict';

// Funzioni

//Funzione che crea un elemento con un evento click al suo interno
function creaElemento(tagElemento, nomeClasse, difficolta, i,listaBombe){
    const elemento = document.createElement(tagElemento);
    elemento.classList.add(nomeClasse);
    elemento.classList.add(difficolta);
    elemento.innerText = i;
    elemento.addEventListener(
        'click',
        function(){
        }
    )
    return elemento;
}

// Funzione che appende elementi al DOM
function appendiElemento(elementoCreato, appendino){
    appendino.append(elementoCreato);
}

// Funzione che controlla la difficolta scelta e restituisce una classe specifica
function selezioneDifficolta(difficolta){
    let classeDifficolta = '';
    switch(difficolta){
        case '81':
            classeDifficolta = 'cella-9';
            break;
        case '49':
            classeDifficolta = 'cella-7';
            break;
        default: 
            classeDifficolta = 'cella-10';
    };
    return classeDifficolta;
}

// Funzione che controlla la difficolta scelta e restituisce un numero di celle massime
function numeroCelle(difficolta){
    let maxCelle = 0;
    switch(difficolta){
        case '81': 
            maxCelle = 81;
            break;
        case '49':
            maxCelle = 49;
            break;
        default:
            maxCelle = 100;
    }; 
    return maxCelle;
}

// Funzione che tramite un ciclo crea una tipologia e numero di elementi in base a dei criteri
function cicloCrea(classeDifficolta,maxCelle,appendino,listaBombe){
    for(let i = 1; i <= maxCelle ; i++){
        const elemento = creaElemento('div','cella', classeDifficolta,i,listaBombe);
        appendiElemento(elemento,appendino);
    }
}

// Funzione che genera un array di numeri randomi che non si ripetono
function generaBomba(max, min){
    let listaBombe = [];
    while(listaBombe.length < 16){
        const numRandom = Math.floor(Math.random()*(max - min +1 )) + min;  
        if(!listaBombe.includes(numRandom)){
            listaBombe[listaBombe.length] = numRandom;
        }  
    }
    return listaBombe;
}
// --------

// Main
// Assegnazione a due variabili elementi del DOM
const tavoloGioco = document.querySelector('.tavolo');
const gioca = document.querySelector('.btn');


// Evento che genera un una tabella al click del bottone gioca
gioca.addEventListener(
    'click',
    function(){
        // Svuotamento del DOM
        tavoloGioco.innerHTML= '';
        // Presa del valore della difficolta 
        const difficolta = document.getElementById('difficolta').value;

        // Controllo della difficolta scelta e assegnazione in delle variabili 
        const classeDifficolta = selezioneDifficolta(difficolta);
        const maxCelle = numeroCelle(difficolta);
        
        // Chiamata alla funzione che genera 16 numeri randomici
        const listaBombe = generaBomba(maxCelle,1);
        // Stampa dell'array di bombe
        console.log(listaBombe);

        // chiamata alla funzione per il ciclo che crea le celle
        cicloCrea(classeDifficolta,maxCelle,tavoloGioco,listaBombe);
    }
)



// --------