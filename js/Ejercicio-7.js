const n = parseInt(prompt(`Ingrese un numero`));
if (isNaN(n)) {
  alert(`No ingresaste un número`);
} else if (n <= 50) {
  for (let i = n; i >= 1; i--) {
    p = String(i).repeat(i);
    document.writeln(`${p} <br>`);
  }
} else {
  document.writeln("Ingrese un número valido");
}
