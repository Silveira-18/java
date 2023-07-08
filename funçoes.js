function imc(peso, altura) {
    const resultado = peso / (altura * altura);

    if (resultado <= 18.5) {
        return("Magra");
    }
    else if (resultado >= 18.5 && resultado <= 24.9) {
        return("Normal");


    }
    else if (resultado >= 25 && resultado <= 29.9) {
        return("Sobrepeso");
    }
    else if (resultado >= 30 && resultado <= 34.9) {
        return("Obesidade grau |");
    }
    else if (resultado >= 35 && resultado <= 39.9) {
        return("Obesidade grau ||");
    }
    else {
        return("Obesidade grau |||");
    }
}
console.log(imc(85, 1.86));
console.log(imc(100, 1.50));
console.log(imc(30, 1.25));