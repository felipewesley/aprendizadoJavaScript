// Definindo o nome do documento
document.title = 'Eventos - Manipulando DOM'; 

let show = function(content) {
    content = content == undefined ? 'O conteúdo vai aqui...' : content; 
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

function validaInput(id, value) {
    let ref = 'only_'; 
    if (isNaN(parseInt(value))) {
        ref += 'leters'; 
    } else{
        ref += 'numbers'; 
    }
    document.getElementById(id).value = ''; 
    document.getElementById(ref).value = value; 
    // console.log(parseInt(value)); 
}

function clearInputs() {
    document.getElementById('only_leters').value = ''; 
    document.getElementById('only_numbers').value = ''; 
}

show(
    `<input type="text" 
        placeholder="Digite aqui" 
        id="input_data"
        style="
            border: 1px solid #FFFFFF; 
            border-radius: 7px; 
            width: 30vw; 
            height: 5vh;
        " autofocus 
        onkeyup="validaInput(this.id, this.value);">
    <hr>
        <small> if (input == letra) { Letras = input } </small> <br>
        <small> if (input == numero) { Números = input } </small> <br>
        <input type="button" value="Limpar entradas" style="padding: 7px; margin: 5px;" onclick="clearInputs();">
    <hr>
    Letras: <input type="text" id="only_leters" style="color: #FFFFFF;" disabled>
    Números: <input type="text" id="only_numbers" style="color: #FFFFFF;" disabled>
    `
); 
