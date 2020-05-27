// Definindo o nome do documento
document.title = 'Eventos do teclado'; 

function auto(parm, id){

    if (parm.indexOf('@',parm.length-1) != -1 && (parm.slice(0,parm.length-2)).indexOf('@') == -1 ) {
        document.getElementById(id).value += 'mail.service.com.br'; 
    }
    if (parm == ''){
        document.getElementById('description').innerHTML = 'Digite o seu e-mail: '; 
    }

}

function criaEmail() {
    let username = document.getElementById('username').value; 
    let ano_nasc = document.getElementById('ano_nasc').value; 
    let dominio  = document.getElementById('dominio').value; 

    if (username == '' || ano_nasc == '') {
        alert('Impossivel gerar um e-mail a partir de valores vazios.'); 
    } else {
        document.getElementById('description').innerHTML = 'Seu novo e-mail gerado é: '; 
        document.getElementById('input_email').value = (username).toLowerCase() + ano_nasc.toString() + '@' + dominio; 
        alterarVisibilidade('btn_cls'); 

    }
}

function alterarVisibilidade(elementoId) {
    
    let display = document.getElementById(elementoId).style.display;
    
    if(display == "none"){
        document.getElementById(elementoId).style.display = 'block'; 
    } else {
        document.getElementById(elementoId).style.display = 'none'; 
    }
}

function clearInput(){
    alterarVisibilidade('btn_cls'); 
    document.getElementById('username').value = ''; 
    document.getElementById('ano_nasc').value = ''; 
    return document.getElementById('input_email').value = ''; 
}

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

show(
    `<u> Auto-preenchimento e atribuição de novo e-mail </u>
    <br><br>
    <center>
    <div style="max-width: 90%">
        <label id="description"> Digite o seu e-mail: </label>
        <input type="text" 
            id="input_email" 
            style="
                padding: 3px; 
                border-radius: 7px; 
                width: 50vw; 
                font-size: 1.5em; " 
        onkeyup="auto(this.value, this.id);" autofocus>
    </div>
    </center>
    <span id="btn_cls" style="display: none; position: absolute; left: 85vw; rigth: 40%;">
        <input type="button" style="height: 50px; border-radius: 7px;" value="RESET "onclick="clearInput();">
    </span>`
); 

show(
    `Ou monte seu próprio endereço de email: <br><br>
    Username: <input type="text" id="username" autocomplete="off"> 
    Ano de Nascimento: <input type="number" id="ano_nasc">
    Domínio: 
    <select id="dominio">
        <option value="mail.service.com" selected> mail.service.com </option>
        <option value="email.com"> email.com </option>
        <option value="email.com.br"> email.com.br </option>
        <option value="company.com.br"> company.com.br </option>
        <option value="contato.org.br"> contato.org.br </option>
    </select>
    <br><br>
    <input type="button" value="Criar e-mail" onclick="criaEmail()">
    `
); 
