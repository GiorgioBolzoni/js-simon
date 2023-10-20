/*
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri,

il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const min = 1;
const max = 100;
const numeriDaGenerare = 5;

const numeriGenerati = [];

while(numeriGenerati.lenght < numeriDaGenerare){
    se il numero non è già presente nell'array ce lo pusho dentro
}

setTimeout(miaFunzione, 30000);

miaFunzione....

    array dei numeriUtente[]

numeriGenerati[3, 5, 8, 9, 89]
numeriUtente[5, 2, 7, 9]


array numeriIndovinati[5, 2] numeriIndovinati.lenght 2

ciclo sui numeriUtente e per ogni numero controllo se è incluso nell'array dei numeri generati


Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
Bonus :100: :
Realizzare l'esercizio con grafica e senza utilizzo di prompt ma con casella/e  di input
N.B. :avviso:
Attenzione che usando Google Chrome, il prompt può dare problemi con la visualizzazione dei numeri in pagina sui tempi di refresh del dom, lasciando i numeri visibili mentre il prompt è aperto.
Per ovviare a questo problema si può impostare 2 timeout differenti a distanza di 1 secondo: il primo nasconde i numeri dal dom (dopo 30 secondi) e il secondo chiede i numeri all'utente (dopo 31 secondi)
*/

// let number;
const min = 1;
const max = 100;
const numeriDaGenerare = 5;

const numeriGenerati = [];
// console.log(numeriGenerati)

while (numeriGenerati.length < numeriDaGenerare) {
    const number = getRndInteger(1, 100);

    if (!numeriGenerati.includes(number)) {
        numeriGenerati.push(number);
    }
    // console.log(number);

}
console.log(numeriGenerati);
let numeriGeneratiDiv = document.querySelector('.numeriGeneratiDiv')
numeriGeneratiDiv.innerHTML = `
${numeriGenerati}
`
const turnoUtente = document.getElementById('turnoUtente')

const clock = setTimeout(timer, 3000);

function timer() {
    numeriGeneratiDiv.classList.add('d-none');
    turnoUtente.classList.remove('d-none')
};

const numeriUtente = [];
prompt
