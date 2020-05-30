// Definindo o nome do documento
document.title = 'Tabuada - Loops'; 

function quadro(tabuada){
    let quadro; 
    quadro = `
        <div style="
            border: 1px solid #000000; 
            border-radius: 7.5px; 
            padding: 7.5px; 
            margin: 5px; 
            width: 7vw; 
            min-width: 100px; 
            display: inline-flex; 
        "> `; 
        tabuada.forEach(element => {
            quadro += element + '<br>'
        }); 
        quadro += `</div>`;
    return (
        document.write(quadro)
    ); 
}

let tabuadaNum = function (num) {
    let arr = []; 
    for (let i = 1; i <= 10; i++) {
        arr.push(`${num} x ${i} = ${num*i}`); 
    }
    return quadro(arr); 
}

let loop = 1; 
while (loop <= 10) {
    tabuadaNum(loop); 
    loop++; 
}
