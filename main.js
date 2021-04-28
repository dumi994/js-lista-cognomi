// Cognomi già presenti
var listaCognomi = ['bianchi', 'verdi', 'rossi', 'gialli', 'neri']

// 1. chiedi all’utente il cognome
var cognomeUtente = prompt('Inserisci il tuo cognome');
console.log(cognomeUtente);

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
listaCognomi.push(cognomeUtente)
console.log(listaCognomi.sort());
// 3. stampa la lista ordinata alfabeticamente
document.getElementById('titolo').innerHTML = 'Benvenuto ' + cognomeUtente + ', sei stato aggiunto alla lista invitati';

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova