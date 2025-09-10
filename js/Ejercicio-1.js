const edad = parseInt(prompt("Ingrese tu edad"));

console.log(edad);
if (isNaN(edad)) {
  document.writeln(`La edad no es valida`);
} else {
  if (edad >= 18) {
    document.writeln("Ya puedes conducir");
  } else {
    document.writeln("Falta unos años para poder conducir");
  }
}
