const frase = prompt(`Ingrese una frase`);
let i = 0;
let vocales = 0;
do {
  if (
    frase.charAt(i) == `a` ||
    frase.charAt(i) == `e` ||
    frase.charAt(i) == `i` ||
    frase.charAt(i) == `o` ||
    frase.charAt(i) == `u`
  ) {
    vocales++
  }
  i++;
} while (i <= frase.length); {
    document.writeln(vocales);
}