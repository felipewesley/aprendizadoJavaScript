// Definindo o nome do documento
document.title = 'Funções de String'; 

let name = prompt('Informe o seu nome: '); 

if (name != '') {
    document.write('<h1> Informações sobre o nome informado: </h1>'); 
    
    let nomeInverso = function (nome) {
        let inverseName = ''; 
        inverseName.trim(); 
        for (let index = nome.length-1 ; index >= 0 ; index--) {
            inverseName += nome[index];
        }
        return inverseName; 
    }

    document.write(
        `<div style='
            border: 2px solid #E0E0E0; 
            padding: 5px; 
            margin: 5px; 
        '>
            <ul>
                <li> Seu nome é ${ name[0].toUpperCase() + name.substring(1,name.length).toLowerCase() } </li>
                <li> ${name.toUpperCase()} tem ${ name.length } letras </li>
                <li> A primeira letra do seu nome é <b> ${ name[0].toUpperCase() } </b> </li>
                <li> Seu nome ao contrário fica: <strong> ${ nomeInverso(name).toUpperCase() } </strong>
            </ul>
        </div>`
    ); 

} else {
    document.write(
        '<h4> O nome informado é inválido. </h4>'
    ); 
}