let pag = "débito"

switch (pag) {
    case "débito":
        console.log("recebe 10% de desconto")
        break;
    case "Dinheiro e Pix":
        console.log("Recebe 15% de desconto")
        break;
    case "2x":
        console.log("Normal sem Juros")
        break;
    case "mais de 2x":
        console.log("Juros de 10%")

    default:
        console.log("Vou verificar com")
        break;
}