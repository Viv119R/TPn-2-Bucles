const n = parseInt(prompt(`Ingrese un numero`));
let p = "";
if (isNaN(n)) {
  alert(`No ingresaste un número`);
} else if (n <= 50) {
  for (let i = 1; i <= n; i++) {
    p += i;
    document.writeln(`${p} <br>`);
  }
} else {
  document.writeln("Ingrese un número valido");
}
