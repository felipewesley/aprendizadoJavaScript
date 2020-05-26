// Definindo o nome do documento
document.title = 'Cálculos aritméticos'; 

let show = function(content) {
    return (
        document.write(
            `<div style="
                border: 1px solid white; 
                border-radius: 7.5px; 
                padding: 7px; 
                margin: 10px; 
                text-align: center; 
                background: #000000; 
                color: #FFFFFF; 
            ">
            <h2> ${content} </h2>
            </div>`
            )
        ); 
}

let n1 = prompt('Informe o primeiro valor'); 
n1 = parseFloat(n1); 

let op = prompt('Informe uma operação básica a ser realizada'); 

let validador = true; 

if ( op != 'soma' && 
     op != 'subtracao' && op != 'subtração' && op != 'subtraçao' && op != 'subtracão' &&
     op != 'multiplicacao' && op != 'multiplicação' && op != 'multiplicaçao' && op != 'multiplicacão' &&
     op != 'divisao' && op != 'divisão'
) {
    validador = false;     
}
while (!validador) {
        alert('Operação informada inválida!'); 
        op = prompt('Informe uma operação básica a ser realizada'); 
        if ( op == 'soma' || 
            op == 'subtracao' || op == 'subtração' || op == 'subtraçao' || op == 'subtracão' ||
            op == 'multiplicacao' || op == 'multiplicação' || op == 'multiplicaçao' || op == 'multiplicacão' ||
            op == 'divisao' || op == 'divisão'
        ) {
            validador = true; 
        }
}

let n2 = prompt('Informe o segundo valor'); 
n2 = parseFloat(n2); 

function validarOperacao(operacao) {
    let op = (operacao == 'soma') ? 1 : false; 
    if (!op) {
        op = (operacao == 'subtracao' || operacao == 'subtração' || operacao == 'subtraçao' || operacao == 'subtracão') ? 2 : false; 
        if (!op) {
            op = (operacao == 'multiplicacao' || operacao == 'multiplicação' || operacao == 'multiplicaçao' || operacao == 'multiplicacão') ? 3 : false; 
            if (!op) {
                // op = (op == 'divisao' || op == 'divisão') ? 4 : false; 
                op = 4; 
            }
        }
    }
    return op; 
}

function realizarCalculo(n1, n2, operation) {
    if (operation == 4 && (n1 == 0 || n2 == 0)) {
        return null; 
    }
    // let result = 0; 
    switch (operation) {
        case 1:
            return ({
                "operation": "+", 
                "result": n1 + n2
            }); 
            // return (n1 + n2); 
        case 2: 
            return ({
                "operation": "-", 
                "result": n1 - n2
            }); 
            // return (n1 - n2); 
        case 3: 
            return ({
                "operation": "x", 
                "result": n1 * n2
            }); 
            // return (n1 * n2); 
        case 4: 
            return ({
                "operation": "/", 
                "result": (n1 / n2).toFixed(2)
            }); 
            // return ((n1 / n2).toFixed(2)); 
    }
    // return result; 
}

let resultado = realizarCalculo(n1,n2,validarOperacao(op)); 

if (resultado != null && !isNaN(resultado.result)) {
    show(
        `Operação realizada: ${op} <br>
        Cálculo: ${n1} ${ resultado.operation } ${n2} = ${ resultado.result } <br>
        Resultado obtido: ${ resultado.result }
        `
    ); 
} else {
    show(`Impossível realizar ${op} entre os valores informados.`); 
}

// console.log(`A operacao realizada é ${op} : cod. ${validarOperacao(op)}`); 
// console.log(`O resultado obtido é ${resultado.result}`); 
