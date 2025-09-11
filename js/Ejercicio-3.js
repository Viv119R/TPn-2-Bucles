let cadena = "";
let texto;
let seguir;

do {
  texto = prompt(`Ingrese unas palabras`)
  if (cadena === ""){
    cadena = texto;
  }else{
    cadena = `${cadena} - ${texto}`;
  }
  seguir = confirm("¿Desea continuar escribiendo?")
}
while (seguir);
document.writeln(cadena);