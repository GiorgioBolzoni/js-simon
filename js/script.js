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


array numeriIndovinati[5, 9] numeriIndovinati.lenght 2

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

"use strict";

simonSays()

function simonSays() {

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
Memorizza i seguenti numeri!  
<br>
${numeriGenerati}
`
    const turnoUtente = document.getElementById('turnoUtente')

    const clock = setTimeout(timer, 30000);

    function timer() {
        numeriGeneratiDiv.classList.add('d-none');
        turnoUtente.classList.remove('d-none')
    };

    const numeriUtente = [];
    const btn = document.querySelector('button');

    btn.addEventListener('click', function () {
        let valoreInserito1;
        let valoreInserito2;
        let valoreInserito3;
        let valoreInserito4;
        let valoreInserito5;

        while (numeriUtente.length < numeriDaGenerare) {
            valoreInserito1 = parseInt(document.getElementById('data1').value);
            valoreInserito2 = parseInt(document.getElementById('data2').value);
            valoreInserito3 = parseInt(document.getElementById('data3').value);
            valoreInserito4 = parseInt(document.getElementById('data4').value);
            valoreInserito5 = parseInt(document.getElementById('data5').value);

            numeriUtente.push(valoreInserito1, valoreInserito2, valoreInserito3, valoreInserito4, valoreInserito5);
        };
        console.log(numeriUtente);

        let numeriIndovinati = [];

        if (numeriGenerati.includes(valoreInserito1)) numeriIndovinati.push(valoreInserito1);
        if (numeriGenerati.includes(valoreInserito2)) numeriIndovinati.push(valoreInserito2);
        if (numeriGenerati.includes(valoreInserito3)) numeriIndovinati.push(valoreInserito3);
        if (numeriGenerati.includes(valoreInserito4)) numeriIndovinati.push(valoreInserito4);
        if (numeriGenerati.includes(valoreInserito5)) numeriIndovinati.push(valoreInserito5);



        let score = numeriIndovinati.length;
        console.log(score);
        let alert = document.querySelector('.alert')
        alert.classList.remove('d-none')
        alert.innerHTML = `Hai indovinato ${score} numeri!!!`
        if (numeriIndovinati.length === 0) alert.classList.add('redAlert')
    });
}