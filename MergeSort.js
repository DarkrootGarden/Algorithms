function MergeSort(lista){
    if (lista.length > 1){

        // Pegando o meio do array, e partindo em dois: esquerda e direita
        var meio = Math.floor(lista.length/2);
        var esquerda = lista.slice(0, meio);
        var direita = lista.slice(meio);

        // Juntando os dois de forma ordenada
        return merge(
            MergeSort(esquerda), MergeSort(direita)
            );
    } else {
        return lista;
    }
}

function merge(esquerda, direita){
    var resultado, IndiceEsq, IndiceDir;
    resultado = [];
    IndiceEsq = IndiceDir = 0;

    while(IndiceEsq < esquerda.length && IndiceDir < direita.length){
        if (esquerda[IndiceEsq] < direita[IndiceDir]){
            resultado.push(esquerda[IndiceEsq]);
            IndiceEsq++;
        } else {
            resultado.push(direita[IndiceDir]);
            IndiceDir++;
        }
    }

    return resultado
        .concat(esquerda.slice(IndiceEsq))
        .concat(direita.slice(IndiceDir));
}

function preencher(vetor, numero){
    for (var i=0; i<numero; i++){
        vetor.push(Math.floor(Math.random()*numero));
    }
}


lista = [];

preencher(lista, 20);

console.log("Números gerados aleatóriamente: " + lista);
console.log("Ordenados: " + MergeSort(lista));