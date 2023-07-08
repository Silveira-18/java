function calcularimposto(salario){
    let aliquota;
    if(salario >=0 && salario <= 1100.00){
        return aliquota = 0.05;
    }
    else if(salario >= 1100.01 && salario <= 2500.00){
        return aliquota = 0.1;
    }
    else{
        return aliquota = 0.15;
    }
    
}
const valorsalario = 1100;
const valorbenificio = 250;
const valordesconto = calcularimposto(valorsalario) * valorsalario;
const valortotal = valorsalario - valordesconto + valorbenificio

console.log(valortotal)

