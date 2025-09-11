const t = prompt(`Ingrese una frase`);
let p;

for (let i = t.length; i >= 0; i--) {
  document.writeln(`${t.charAt(i)}`);
}
