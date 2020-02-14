function imprimirVetor(vetor, tamanho){
        for (i=0; i<tamanho; i++){
        console.log(vetor[i]);
    }
}

function preencherVetor(vetor, tamanho){
    vetor.shift();
    for (i=0; i<tamanho; i++){
        vetor[i] = Math.round(Math.random()*tamanho);
    }
}

function bubbleSort(numero, tamanho){
    while (ordenado == false){
        for (i=0; i<=tamanho-1; i++){
            if (numero[i] < numero[i + 1]){
                contador += 1;
            } else {
                var aux = numero[i];
                numero[i] = numero[i + 1];
                numero[i + 1] = aux;
            }
        }

        if (contador == tamanho-1){
            ordenado = true;
        } else {
            contador = 0;
        }
        whiLoop += 1;
    }
}

var ordenado, numero, contador, tamanhoVetor, whiLoop;
whiLoop = 0;
ordenado = false;
numero = [];
contador;
tamanhoVetor = 1000000;

console.log("Desordenado")
preencherVetor(numero, tamanhoVetor);
imprimirVetor(numero, tamanhoVetor);

console.log("Ordenado");
bubbleSort(numero, tamanhoVetor);
imprimirVetor(numero, tamanhoVetor);

console.log("O número de Loops foi " + whiLoop);
