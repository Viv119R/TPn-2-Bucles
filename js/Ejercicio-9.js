for (let i = 1; i <= 500; i++){
    document.writeln(i);
    if (i%4==0){
        document.writeln("(Es multiplo de cuatro)");
    }else if (i%5==0){
        document.writeln(`<br> ----------------------------------------------`);
    }else if (i%9==0){
        document.writeln(`(Es multiplo de nueve)`);
    }
    else {  
    }
    document.writeln(`<br>`);
}