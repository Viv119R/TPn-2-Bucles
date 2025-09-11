const frase = prompt(`Ingrese una frase`).toLowerCase();
for (let i = 0; i < frase.length; i++) {
  document.writeln(`${frase.charAt(i)}`);
  if (i>=0 && i<frase.length-1){
    document.writeln(`-`);
  }
}