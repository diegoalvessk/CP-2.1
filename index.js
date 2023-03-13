let funcoes = require("./funcoes.js")
let litros = 0
let paradas = 0

litros = console.log(funcoes.litrosGasolina(10000, "gasolina"))

let passageiros = []
let contador = 0
let qntPassageiros = 0
let nomePassageiro
qntPassageiros = prompt("Informe a quantidade de passageiros do carro.")

for (contador = 0; contador < qntPassageiros; contador++) {
    nomePassageiro = prompt("Informe o nome do passageiro número " + (contador + 1))
    crianca = prompt("Ele é criança?")

    if(crianca = "sim"){
        passageiros[contador] = "sim"
    }else{
        passageiros[contador] = "nao"
    }
}

paradas = console.log(funcoes.paradas(passageiros, 24))

let valorRefeicao = console.log(funcoes.valorRefeicao(paradas, passageiros))


