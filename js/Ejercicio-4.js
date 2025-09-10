let cadena = parseInt("");
let numero;
let seguir;

do {
  numero = prompt(`Ingrese un numero`)
  if (cadena === ""){
    cadena = texto;
  }else{
    cadena = `${cadena} - ${texto}`;
  }
  seguir = confirm("¿Desea continuar escribiendo?")
}
while (seguir);
document.writeln(cadena);