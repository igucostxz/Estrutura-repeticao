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
        
}