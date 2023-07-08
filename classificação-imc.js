let peso = 90;
let altura = 2.0;

let imc = peso /(altura * altura);

console.log(imc)

if (imc <= 18.5){
    console.log("Magra");
}
else if( imc >= 18.5 && imc <= 24.9){
    console.log("Normal");

    
}
else if( imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso");
}
else if( imc >= 30 && imc <= 34.9){
    console.log("Obesidade grau |")
}
else if( imc >= 35 && imc <= 39.9){
    console.log("Obesidade grau ||")
}
else{
    console.log("Obesidade grau |||")
}