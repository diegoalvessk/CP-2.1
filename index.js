let funcoes = require("./funcoes.js")
let litros = 0
let paradas = 0
let distancia = 0
let tipoGasolina = ""
distancia = prompt("Informe a distancia da viagem")

while(distancia<0){
    distancia = prompt("Informe a distancia da viagem. Diferente de 0.")
}

tipoGasolina = prompt("Informe o tipo de gasolina. 'gasolina' ou 'etanol' ")

while(tipoGasolina != "gasolina" || tipoGasolina != "etanol"){
    tipoGasolina = prompt("Informe o tipo de gasolina. 'gasolina' ou 'etanol' ")
}

distancia = Math.trunc(distancia)

litros = console.log(funcoes.litrosGasolina(distancia, tipoGasolina))

let passageiros = []
let contador = 0
let qntPassageiros = 0
let nomePassageiro
let tempoHoras = 0

qntPassageiros = prompt("Informe a quantidade de passageiros do carro.")
tempoHoras = prompt("Informe o tempo de horas da viagem.")

while(tempoHoras<0){
    tempoHoras = prompt("Informe o tempo de horas da viagem. Não pode ser negativo")
}

for (contador = 0; contador < qntPassageiros; contador++) {
    nomePassageiro = prompt("Informe o nome do passageiro número " + (contador + 1))
    crianca = prompt("Ele é criança? sim ou nao")

    while(crianca != "nao" || crianca != "sim"){
        crianca = prompt("Ele é criança? sim ou nao. Responda com 'sim' ou com 'nao'.")
    }

    if(crianca = "sim"){
        passageiros[contador] = "sim"
    }else{
        passageiros[contador] = "nao"
    }
}
let valorRefeicao

paradas = console.log(funcoes.paradas(passageiros, ))

valorRefeicao = console.log(funcoes.valorRefeicao(paradas, passageiros))


