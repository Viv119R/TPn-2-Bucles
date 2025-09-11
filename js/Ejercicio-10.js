const filas = parseInt(prompt(`Ingrese el numero de filas`));
const columnas = parseInt(prompt(`Ingrese el numero de columnas`));
let total = filas * columnas;
document.writeln(`<table class="table table-striped-columns"><tbody>`);
for (let f = 1; f <= filas; f++) {
  document.writeln(`
        <tr>`);
  for (let c = 1; c <= columnas; c++) {
    document.writeln(`<td>${total--}</td>`);
  }
  document.writeln(`</tr>`);
}
document.writeln(`</tbody></table>`);