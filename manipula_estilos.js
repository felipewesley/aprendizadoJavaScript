// Definindo o nome do documento
document.title = 'Manipulando estilo DOM'; 
document.body.style.background = 'black'; 

let show = function(content, theme) {
    theme = theme == undefined || theme == 'dark' ? 'dark' : 'lite'; 
    content = content == undefined ? 'O conteúdo vai aqui...' : content; 
    
    let f_color = '#FFFFFF'; 
    let bg_color = '#000000'; 

    if (theme == 'lite') {
        f_color = '#000000'; 
        bg_color = '#FFFFFF'; 
    }
    
    return (
        document.write(
            `<div style="
                border: 1px solid ${f_color}; 
                border-radius: 7.5px; 
                padding: 7px; 
                margin: 10px; 
                text-align: center; 
                background: ${bg_color}; 
                color: ${f_color}; 
            ">
            <h2> ${content} </h2>
            </div>`
            )
        ); 
}

function setStyleAlert(classButton, idButton) {
    classButton = classButton.slice(4); 

    let origin = 'btn_' + document.getElementById('div_alert').className; 
    let border_color; 
    let text_color; 
    let bg_color; 
    
    switch (classButton) {
        case 'primary':
            border_color    = 'blue'; 
            text_color      = 'blue'; 
            bg_color        = '#B0E0E6'; 
            break;

        case 'success':
            border_color    = 'green'; 
            text_color      = '#008F05'; 
            bg_color        = '#BDFFBF'; 
            break;

        case 'warning':
            border_color    = '#FFD700'; 
            text_color      = '#696969'; 
            bg_color        = '#FFFC9E'; 
            break;

        case 'danger':
            border_color    = 'red'; 
            text_color      = '#D10000'; 
            bg_color        = '#FFB8B8'; 
            break;
    }
    document.getElementById('div_alert').style.borderColor = border_color; 
    document.getElementById('div_alert').style.color = text_color; 
    document.getElementById('div_alert').style.background = bg_color; 
    document.getElementById(idButton).className = origin; 
    document.getElementById('div_alert').className = classButton; 
    document.getElementById('tipo_alert').innerHTML = classButton; 
    document.getElementById(idButton+'description').innerHTML = origin.slice(4); 

    console.clear(); 
    console.log('button clicked is ' + classButton); 
}

function setCor() {
    let cor = document.getElementById('input_cor').value; 
    document.getElementById('cod_cor').value = cor.toUpperCase(); 
}

function setVisible(elementoId) {
    
    let display = document.getElementById(elementoId).style.display;
    
    if(display == "none"){
        document.getElementById(elementoId).style.display = 'inline'; 
    } else {
        document.getElementById(elementoId).style.display = 'none'; 
    }
}

show(`<style>
        button {border: 1px solid; border-radius: 7.5px; 
            padding: 10px; margin: 7px; color: #FFFFFF; 
            background: transparent; font-size: 1.2em; 
            transition: 0.3s ease-out;
        }
        a {text-decoration: none}
        a:hover {cursor: pointer}
        button:hover {cursor: pointer; transition: 0.3s ease-out;}
        .btn_primary {border-color: blue; color: blue; }
        .btn_primary:hover {color: #FFFFFF; background: blue; }
        .btn_success {border-color: green; color: green; }
        .btn_success:hover {color: #FFFFFF; background: green; }
        .btn_warning {border-color: yellow; color: yellow; }
        .btn_warning:hover {color: #696969; background: yellow; }
        .btn_danger {border-color: red; color: red; }
        .btn_danger:hover {color: #FFFFFF; background: red; }
    </style>
    <h2> Manipulando estilo dos elementos com JavaScript </h2>`, 'lite'
); 

show(
    ` Escolha um <a onclick="setVisible('testing');">alert</a> para emitir 
    <span style="border: 2px solid #FFFFFF; border-radius: 5px; padding: 5px; display: none;" id="testing">
        Teste de cores: 
        <input type="color" id="input_cor" value="#1E2CF6"> 
        <input type="text" id="cod_cor" style="width: 5vw;" readonly> 
        <input type="button" onclick="setCor();" value="view">
    </span>
    <hr>
    <button onclick="setStyleAlert(this.className, this.id);" class="btn_success" id="b1"> Alert <span id="b1description"> success </span> </button>
    <button onclick="setStyleAlert(this.className, this.id);" class="btn_warning" id="b2"> Alert <span id="b2description"> warning </span> </button>
    <button onclick="setStyleAlert(this.className, this.id);" class="btn_danger" id="b3"> Alert <span id="b3description"> danger </span> </button>    
    `
); 

show(
    `<center>
    <div id="div_alert" class="primary" style="
        width: 50vw; 
        heigth: 10vw; 
        border: 2px solid; 
        border-radius: 7.5px; 
        padding: 5px;
        border-color: blue; 
        background: #B0E0E6; 
        color: blue; 
        transition: 1s ease-out;
    ">
        Este é um alert do tipo <span id="tipo_alert">primary</span>
    </div></center>`
); 