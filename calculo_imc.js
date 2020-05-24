// Definindo o nome do documento
document.title = 'Cálculo IMC'; 

let name = prompt('Informe o seu nome:'); 
let altura = prompt('Informe a sua altura (em cm)'); 
let peso = prompt('Informe o seu peso (em kg)'); 
let resp; 

altura = parseFloat(altura); 
peso = parseFloat(peso); 

altura /= 100; 

// Calculando massa corporal
// M = peso / altura²
// sendo, peso em quilogramas e altura em metros
let massa = peso / (altura^2); 

if (isNaN(massa)) {
    
    document.write(
        'Valores informados estão incorretos. <br>'
        + '<small> Press F5 to retry. </small>'
    );

} else{
    
    if (massa < 16) {
        resp = 'Baixo peso muito grave'; 
    } else if ((massa >= 16) && (massa < 17)) {
        resp = 'Baixo peso grave'; 
    } else if ((massa >= 17) && (massa < 18.5)) {
        resp = 'Baixo peso'; 
    } else if ((massa >= 18.5) && (massa < 25)) {
        resp = 'Peso normal'; 
    } else if ((massa >= 25) && (massa < 30)) {
        resp = 'Sobrepeso'; 
    } else if ((massa >= 30) && (massa < 35)) {
        resp = 'Obesidade grau I'; 
    } else if ((massa >= 35) && (massa < 40)) {
        resp = 'Obedidade grau II'; 
    } else {
        resp = 'Obedidade grau III'; 
    }
    
    document.write(
        '<h1>' + name + ',</h1>'
        + ' você possui índice de massa corporal igual a ' 
        + '<strong>' + massa.toFixed(2) + '</strong>'
        + ', sendo classficado como: ' + '<strong>' + resp + '</strong>'
    ); 
}