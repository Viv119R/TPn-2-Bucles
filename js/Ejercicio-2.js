const nota = parseInt(prompt("Ingrese tu nota"));

if (isNaN(nota)) {
  alert(`Introduce un número valido`);
} else if (nota >= 0 && nota <= 10) {
  if (nota >= 0 && nota <= 2) {
    alert("Muy deficiente");
  } else if (nota >= 3 && nota <= 4) {
    alert("Insuficiente");
  } else if (nota >= 5 && nota <= 6) {
    alert("Sufuciente");
  } else if (nota == 7) {
    alert("Bien");
  } else if (nota >= 8 && nota <= 9) {
    alert("Notable");
  } else if (nota >= 10) {
    alert("Sobresaliente");
  }
} else {
  alert("Número erróneo");
}

//Estructura switch
