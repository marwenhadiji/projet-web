var T = [17, 38, 10, 25, 72];

T.sort();
console.log(T); 

T.push(12);
console.log(T); 

T.reverse();
console.log(T); // Output: [12, 72, 38, 25, 17, 10]

// Affichez l'indice de l'élément 17
var indice17 = T.indexOf(17);
console.log(indice17); // Output: 4

// Enlevez l'élément 38 et affichez le tableau
T.splice(T.indexOf(38), 1);
console.log(T); // Output: [12, 72, 25, 17, 10]

// Affichez le sous-tableau du 2e au 3e élément
var sousTableau1 = T.slice(1, 3);
console.log(sousTableau1); // Output: [72, 25]

// Affichez le sous-tableau du début au 2e élément
var sousTableau2 = T.slice(0, 2);
console.log(sousTableau2); // Output: [12, 72]

// Affichez le sous-tableau du 3e élément à la fin de la liste
var sousTableau3 = T.slice(2);
console.log(sousTableau3); // Output: [25, 17, 10]