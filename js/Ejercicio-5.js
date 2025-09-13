let d;
let n;
let c;

do {
  n = parseInt(prompt(`Ingrese un dni`));
  if (isNaN(n)) {
    alert(`No ingresaste un número`);
    c = confirm("¿Desea continuar escribiendo?");
  } else if (d >= 0 && d <= 99999999) {
    alert(`No ingresaste un número valido, ingrese un numero entre 0 y 99999999`);
    c = confirm("¿Desea continuar escribiendo?");
  } else {
    d = n % 23;
  }
} while (c);
switch (d) {
  case 0:
    document.writeln("T");
    break;
  case 1:
    document.writeln("R");
    break;
  case 2:
    document.writeln("W");
    break;
  case 3:
    document.writeln("A");
    break;
  case 4:
    document.writeln("G");
    break;
  case 5:
    document.writeln("M");
    break;
  case 6:
    document.writeln("R");
    break;
  case 7:
    document.writeln("F");
    break;
  case 8:
    document.writeln("P");
    break;
  case 9:
    document.writeln("D");
    break;
  case 10:
    document.writeln("X");
    break;
  case 11:
    document.writeln("B");
    break;
  case 12:
    document.writeln("N");
    break;
  case 13:
    document.writeln("J");
    break;
  case 14:
    document.writeln("Z");
    break;
  case 15:
    document.writeln("S");
    break;
  case 16:
    document.writeln("Q");
    break;
  case 17:
    document.writeln("V");
    break;
  case 18:
    document.writeln("H");
    break;
  case 19:
    document.writeln("L");
    break;
  case 20:
    document.writeln("C");
    break;
  case 21:
    document.writeln("K");
    break;
  case 22:
    document.writeln("E");
    break;
  default:
    document.writeln("El dni no corresponde a nuestra base de datos");
    break;
}