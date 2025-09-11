const nombre1 = prompt(`Ingresa el primer nombre`);
const edad1 = parseInt(prompt(`Ingresa la edad de la primera persona`));
const nombre2 = prompt(`Ingresa el segundo nombre`);
const edad2 = parseInt(prompt(`Ingresa edad de la segunda persona`));
const nombre3 = prompt(`Ingresa el tercer nombre`);
const edad3 = parseInt(prompt(`Ingresa edad de la tercera persona`));

console.log(`Persona 1: ${nombre1} - edad ${edad1}`, `Persona 2: ${nombre2} - edad ${edad2}`, `Persona 3: ${nombre3} - edad ${edad3}`);
const mayor = Math.max(edad1, edad2, edad3);
console.log(Math.max(edad1, edad2, edad3));

if (mayor === edad1){
    document.writeln(`El mayor es ${nombre1} y tiene ${edad1}`);
}else if (mayor === edad2){
    document.writeln(`El mayor es ${nombre2} y tiene ${edad2}`);
}else{
    document.writeln(`El mayor es ${nombre3} y tiene ${edad3}`);
}