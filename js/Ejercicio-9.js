for (let i = 1; i <= 500; i++) {
  document.writeln(i);
  switch (true) {
    case i % 4 === 0:
      document.writeln(`(Es multiplo de cuatro)`);
      break;
    case i % 5 === 0:
      document.writeln(`<br> ----------------------------------------------`);
      break;

    case i % 9 === 0:
      document.writeln(`(Es multiplo de nueve)`);
      break;
    default:
      break;
  }
  document.writeln(`<br>`);
}
