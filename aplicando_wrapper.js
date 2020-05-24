// Definindo o nome do documento
document.title = 'Utilizando wrapper e callback'; 

/**
 * Aplicando técnicas de wrapper, utilizando funções de callback
 * 
 * Mas o que é um wrapper? 
 * 
 * Um wrapper é uma função destinada a chamar uma ou 
 * mais funções, às vezes diretamente por conveniência, 
 * e às vezes adaptá-las para fazer uma tarefa 
 * ligeiramente diferente no processo.
 */

function exibirArtigo(condition, idArtigo, callbackSucesso, callbackErro) {
    if (condition) {
        callbackSucesso(
            `Artigo num. ${idArtigo}`,
            'Aqui vai a descricao do artigo. '
        ); 
    } else{
        callbackErro('Artigo solicitado não foi encontrado.'); 
    }
}

let callbackSucesso = function (titulo, descricao) {
    document.write(
        `<div style='
            border: 1px solid green; 
            padding: 7px; 
            margin: 5px;'
        >
            <h1> ${titulo} </h1>
            <hr>
            <p> ${descricao} </p>
        </div>`
    ); 
}

let callbackErro = function (descricaoErro) {
    document.write(
        `<span style='
            border: 1px solid red; 
            padding: 5px; 
            margin: 5px;'
        >
            <b> Desculpe, um erro ocorreu: </b> ${descricaoErro} 
        </span>`
    )
}

// Fazendo a chamada da funcao principal com wrapper
exibirArtigo(true, 8, callbackSucesso, callbackErro); 