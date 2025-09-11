const t = prompt(`Ingrese una frase`);

for (let i = t.length; i >= 0; i--) {
  document.writeln(`${t.charAt(i)}`);
}
