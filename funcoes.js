function litrosGasolina(distancia, tipoCombustivel){
    let litros 

    if(tipoCombustivel = "gasolina"){
        litros = distancia / 16000
        litros = Math.trunc(litros)
        return litros
    }

    if(tipoCombustivel = "etanol"){
        litros = distancia / 11000
        litros = Math.trunc(litros)
        return litros
    }
}

function paradas(passageiros, horasViagem){
    let crianca = 0
    let adulto = 0
    let paradas = 0
    for (let index = 0; index < passageiros.length; index++) {
        if(passageiros[index] == "sim"){
            crianca++
        }  

        if(passageiros[index] == "nao"){
            adulto++
        }  
    }

    if(crianca == 0){
        paradas = (horasViagem * 60) / 90
        paradas = Math.trunc(paradas)
        return paradas
    }

    if(crianca > 0 && crianca < adulto){
        paradas = (horasViagem * 60) / 60
        paradas = Math.trunc(paradas)
        return paradas
    }
    
    if(crianca > 0 && crianca > adulto){
        paradas = (horasViagem * 60) / 40
        paradas = Math.trunc(paradas)
        return paradas
    }
}

function valorRefeicao(paradas, passageiros) {
    let valorTotal = 0
    let contador = 0

    for (let index = 0; index < paradas; index++) {
        
        if(index = 0){
           for (let index2 = 0; index2 < passageiros.length; index2++) {
                if(passageiros[index2] == "sim"){
                    valorTotal = valorTotal + 40
                }else{
                    valorTotal = valorTotal + 50
                }
           }
        }

        if(contador != 2){
            for (let index2 = 0; index2 < passageiros.length; index2++) {
                if(passageiros[index2] == "sim"){
                    valorTotal = valorTotal + 20
                }else{
                    valorTotal = valorTotal + 30
                }
           }
            contador++
        }

        if(contador == 2){
            
            for (let index2 = 0; index2 < passageiros.length; index2++) {
                if(passageiros[index2] == "sim"){
                    valorTotal = valorTotal + 40
                }else{
                    valorTotal = valorTotal + 50
                }
           }
            contador = 0
        }

    }

    return valorTotal
}


module.exports = {litrosGasolina, paradas, valorRefeicao}