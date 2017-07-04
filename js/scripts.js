// scripts.js
/* Wyskakujące okna prompt */
var a, b;
a = prompt('Podaj bok a');
b = prompt('Podaj bok b');
var value = (a * a) + (2 * a * b) - (b * b);
if (isNaN(a) || isNaN(b)) {
    alert("Wartość nie jest liczbą");
} else {
    switch (value < 0) {
    case true:
        console.log('Wynik jest ujemny.');
        break;
    case false:
        console.log('Wynik jest dodatni.');
        break;
    }
}