const titulo = document.getElementById("nome");
const nomes =["Vinicius Santos  ", "devsantos  "];

let nomeAnimacao = 0;
let caracteres = 0;
let nomeAtual = '';
let caracteresAtual = '';

const type = () => {

    if(nomeAnimacao === nomes.length){
        nomeAnimacao = 0
    }

    nomeAtual = nomes[nomeAnimacao]
    caracteresAtual = nomeAtual.slice(0, caracteres++)
    titulo.textContent = caracteresAtual

    if (caracteresAtual.length === nomeAtual.length){
        nomeAnimacao++
        caracteres = 0;
    }

}

setInterval(type, 450);