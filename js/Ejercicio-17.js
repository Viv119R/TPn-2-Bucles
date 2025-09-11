const frase = prompt(`Ingrese una frase`);

for (let i = 0; i < frase.length; i++) {
    console.log(frase.charAt(i));
  if (
    frase.charAt(i) == `a` ||
    frase.charAt(i) == `e` ||
    frase.charAt(i) == `i` ||
    frase.charAt(i) == `o` ||
    frase.charAt(i) == `u`
  ) {
    document.writeln(`La vocal ${frase.charAt(i)} esta en la posición ${i+1}`);
    break;
  }
}