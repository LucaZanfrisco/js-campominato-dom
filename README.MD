# Consegna


Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
-
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Superbonus 1
-
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.

Superbonus 2
-
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

---

# Svolgimento

- Definiamo un array bomba
- Creo una funzione che genera un numero randomico in base ai criteri di difficolta scelti
- Inserisco nell'array vuoto 16 numeri
- Creo una funzione che controlli se nell'array sia presente o meno il numero generato
- Definiamo un evento al click di ogni cella 
- Compariamo l'array delle bombe con il numero presente nella cella, se il numero combacia l'utente avrà pestato una bomba e la casella di colorera di rosso
- Se la cella cliccata non corrisponde ad una bomba si colorera di blu e si aggiungerà 1 al contatore del punteggio
- Il gioco deve terminare nel caso in cui o si clicca su di una bomba o se l'utente raggiunge il punteggio massimo

## SuperBonus 1

- Implementare un evento che al click su di una cella bomba annulla il click di tutte le celle

## SuperBonus 2

- Controllare gli elementi bomba con le celle e assegnare ad ogni elemento bomba una classe 