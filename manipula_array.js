// Definindo o nome do documento
document.title = 'Manipulação de Array'; 

let show = function(content, theme) {
    theme = theme == undefined || theme != 'lite' ? 'dark' : 'lite'; 
    content = content == undefined ? 'O conteúdo vai aqui...' : content; 
    
    let f_color = '#FFFFFF'; 
    let bg_color = '#000000'; 

    if (theme == 'lite') { f_color = '#000000'; bg_color = '#FFFFFF'; }
    
    return (
        document.write(`<div style="border: 1px solid ${f_color}; border-radius: 7.5px; 
                padding: 7px; margin: 10px; text-align: center; background: ${bg_color}; 
                color: ${f_color}; "><h2> ${content} </h2></div>`)); 
}

let objetos = Array('cadeira', 'impressora', 'garfo'); 

function adicionarObj() {
    let obj = document.getElementById('inp_text').value; 
    if (obj.trim() != '') {
        if (objetos.indexOf(obj) == -1){
            objetos.push(obj); 
            console.log(objetos); 
        } else {
            alert('Este objeto já existe na lista.'); 
        }
    } else {
        alert('Informe um valor válido para ser inserido'); 
    }
    return (
        document.getElementById('inp_text').value = ''
    ); 
}

function ordenarObj() {
    alert('A lista foi ordenada alfabeticamente'); 
    return console.log(objetos.sort()); 
}

show(
    `Objeto: <input type="text" id="inp_text" onkeyup="this.value=this.value.toLowerCase();" autofocus>
    <button onclick="adicionarObj();"> Adicionar </button>
    <button onclick="ordenarObj();"> Ordenar </button>
    `, 'lite'
); 



console.log(objetos); 