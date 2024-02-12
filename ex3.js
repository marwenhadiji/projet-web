var chaines = "abc";
var lettres = "de";

var resultat = [x + y for (x of chaines) for (y of lettres)];

console.log(resultat);