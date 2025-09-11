let d;
let n;
let c;

do {
  n = parseInt(prompt(`Ingrese un numero`));
  if (isNaN(n)) {
    alert(`No ingresaste un número`);
    c = confirm("¿Desea continuar escribiendo?");
  } else {
    d = n % 23;
  }
} while (c);
if (d == 0) {
    document.writeln("T")
}else if (d == 1){
    document.writeln("R")
}else if (d == 2){
    document.writeln("W")
}else if (d == 3){
    document.writeln("A")
}else if (d == 4){
    document.writeln("G")
}else if (d == 5){
    document.writeln("M")
}else if (d == 6){
    document.writeln("R")
}else if (d == 7){
    document.writeln("F")
}else if (d == 8){
    document.writeln("P")
}else if (d == 9){
    document.writeln("D")
}else if (d == 10){
    document.writeln("X")
}else if (d == 11){
    document.writeln("B")
}else if (d == 12){
    document.writeln("N")
}else if (d == 13){
    document.writeln("J")
}else if (d == 14){
    document.writeln("Z")
}else if (d == 15){
    document.writeln("S")
}else if (d == 16){
    document.writeln("Q")
}else if (d == 17){
    document.writeln("V")
}else if (d == 18){
    document.writeln("H")
}else if (d == 19){
    document.writeln("L")
}else if (d == 20){
    document.writeln("C")
}else if (d == 21){
    document.writeln("K")
}else if (d == 22){
    document.writeln("E")
}