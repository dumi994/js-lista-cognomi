// Cognomi già presenti
var listaCognomi = ['bianchi', 'verdi', 'rossi', 'gialli', 'neri']

// 1. chiedi all’utente il cognome
var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
listaCognomi.push(cognomeUtente)
// 3. stampa la lista ordinata alfabeticamente
listaCognomi.sort();
for (var i = 0; i < listaCognomi.length; i++){
    var nuovaLista = listaCognomi[i];
    console.log(nuovaLista);
    var content = document.getElementById('listaCognomi').innerHTML;
    document.getElementById('titolo').innerHTML = "Benvenuto " + cognomeUtente + ' sei stato aggiunto correttamente alla lista'
    document.getElementById('listaCognomi').innerHTML = content + '<li>' + nuovaLista + '</li>';
}

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var posizione = listaCognomi.indexOf(cognomeUtente); // posizione nell'array
var posizione = listaCognomi.indexOf(cognomeUtente) + 1; //posizione umana
console.log(posizione);

document.getElementById('posizione').innerHTML = 'Il tuo cognome si trova in posizione ' + posizione;