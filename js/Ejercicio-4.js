let s = "";
let n;
let c;

do {
  n = parseInt(prompt(`Ingrese un numero`));
  if (isNaN(n)) {
    alert(`No ingresaste un número`);
  } else if (s === "") {
    s = n;
  } else {
    s = s + n;
  }
  c = confirm("¿Desea continuar escribiendo?");
} while (c);
document.writeln(s);