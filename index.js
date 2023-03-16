let funcoes = require("./funcoes.js")
let litros = 0
let paradas = 0
let distancia = 0
let tipoGasolina = ""
distancia = console.log("Informe a distancia da viagem")
distancia = -200

while(distancia<0){
    distancia = console.log("Informe a distancia da viagem. Diferente de 0.")
    distancia = 20000
}

tipoGasolina = console.log("Informe o tipo de gasolina. 'gasolina' ou 'etanol' ")

tipoGasolina = "nao"

while(tipoGasolina != "gasolina" || tipoGasolina != "etanol"){
    tipoGasolina = console.log("Informe o tipo de gasolina. 'gasolina' ou 'etanol' ")
    tipoGasolina = "gasolina"
}

distancia = Math.trunc(distancia)

litros = console.log(funcoes.litrosGasolina(distancia, tipoGasolina))

let passageiros = []
let contador = 0
let qntPassageiros = 0
let nomePassageiro
let tempoHoras = 0

qntPassageiros = console.log("Informe a quantidade de passageiros do carro.")
qntPassageiros = 5
tempoHoras = console.log("Informe o tempo de horas da viagem.")
tempoHoras =  -2

while(tempoHoras<0){
    tempoHoras = console.log("Informe o tempo de horas da viagem. Não pode ser negativo")
    tempoHoras = 30
}

for (contador = 0; contador < qntPassageiros; contador++) {
    nomePassageiro = console.log("Informe o nome do passageiro número " + (contador + 1))
    nomePassageiro = "diego"
    crianca = console.log("Ele é criança? sim ou nao")
    crianca =  "n"

    while(crianca != "nao" || crianca != "sim"){
        crianca = console.log("Ele é criança? sim ou nao. Responda com 'sim' ou com 'nao'.")
        crianca = "sim"
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


