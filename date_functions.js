// Definindo o nome do documento
document.title = 'Manipulando datas'; 

document.body.setAttribute('bgcolor','#000000'); 

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

let dia = prompt('Informe o dia do seu aniversário'); 
dia = parseInt(dia); 

let mes = prompt('Informe o mês do seu aniversário'); 
mes = parseInt(mes)-1; 

let ano = prompt('Informe o ano do seu último aniversário'); 
ano = parseInt(ano); 

if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
    
    let lastBirthday = new Date(ano, mes, dia); 

    let today = new Date(); 

    let dif = Math.abs(lastBirthday.getTime() - today.getTime()); 

    /**
     * 1 dia:       24 horas
     * 1 hora:      60 minutos
     * 1 minuto:    60 segundos
     * 1 segundo:   1000 milissegundos
     */
    let msbyday = 24 * 60 * 60 * 1000; 

    let result = Math.round(dif/msbyday); 

    if (result == 0) {
        
        show(` Algo de errado aconteceu! <u> Ainda não se passou um ano do seu último aniversário. </u>`); 

    } else if( lastBirthday.getDate() < today.getDate() 
            && lastBirthday.getMonth() <= today.getMonth()
            && lastBirthday.getFullYear() < today.getFullYear() ){

        show(
            ` Acredito que tenha informado uma data que não seja do seu <u> último aniversário. </u>
            <p> <small> Pressione F5 para tentar novamente :) </small> </p>`
            ); 

    } else if (result == 1){

        show(` Seu aniversário é hoje? Estou muito feliz! <u> Parabéns! </u> `); 

    } else if (result == 2) {
        
        show(` Seu aniversário foi ontem! Sinto não parabenizar-te antes :( `); 

    } else{
        show(` Já se passaram ${result} dias desde o seu último aniversário. `); 
    }
    
} else {
    show(
        ` Algum valor foi informado incorretamente. 
        <p> <small> Press F5 to retry. </small> </p>`
    ); 
}

//--------------------------------------------
/*
let d = new Date(2018,0,12); 
d.setDate(d.getDate()+2); 
d.setFullYear(d.getFullYear()-1); 

show(d.toDateString()); 
*/
//--------------------------------------------
/*
let data = new Date(); 

show('Hoje é ' + data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear()); 
show('E amanhã será dia ' + (data.getDate()+1))
show(data.toString()); 
*/