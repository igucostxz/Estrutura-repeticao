function somaImpares() {
    let soma = 0;
    for (let i = 1; i <= 500; i ++) {
        if (i % 2 !== 0 && i % 3 === 0) {
            soma += i;
        }
        console.log("Valor de i atualmente"); 
        console.log("acumulado de soma: " + soma);
    }
        alert("A soma dos números ímpares de 1 a 500 é: " + soma);
}

function menorEMaiorAltura() {
        const quantidadedealturas = 15;
        let alturas = [ 1.70, 1.65, 1.80, 1.55, 1.90, 1.75, 1.60, 1.85, 1.95, 1.50, 1.72, 1.68, 1.78, 1.82, 1.88];

        let menorAltura = alturas[0];
        let maiorAltura = alturas[0];

        for (let altura of alturas) {
            if (altura < menorAltura) {
                menorAltura = altura;
            }
            if (altura > maiorAltura) {
                maiorAltura = altura    ;
            }
        }

        console.log("Menor altura: " + menorAltura);
        console.log("Maior altura: " + maiorAltura);
        alert(`
            Quantidade de alturas percorridas: ${quantidadedealturas}
            Menor altura: ${menorAltura}
            Maior altura: ${maiorAltura}
        `)
} 

function mediaAritmetica() {
    let soma = 0;
    let positivos = 0;
    let negativos = 0;
    let quantidadeValores = 0;
    let valor = 10;
        
    while (valor > -8) {
        soma += valor;
        quantidadeValores++
       
        if (valor > 0) {
            positivos++
        } else {
            negativos++
        }
        valor -= 1; //Fator que faz ele virar negativo ao final da interação
    }

    const media = soma / quantidadeValores;
    const percentualPositivos = (positivos * 100) / quantidadeValores;
    const percentualNegativos = negativos / quantidadeValores * 100;

    alert(`
        Quantidade: ${quantidadeValores}
        Positivos: ${positivos}
        Negativos: ${negativos}
        Soma: ${soma}
        Percentual de Positivos: ${percentualPositivos.toFixed(2)}%
        Percentual de Negativos: ${percentualNegativos.toFixed(2)}%
    `)
}