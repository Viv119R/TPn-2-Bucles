const n = parseInt(prompt(`Ingrese un numero`));
if (isNaN(n)) {
  alert(`No ingresaste un número`);
} else if (n <= 50) {
  let p = "";
  for (let i = 1; i <= n; i++) {
    p += i;
    document.writeln(`${p} <br>`);
  }
} else {
  document.writeln("Ingrese un número valido");
}
