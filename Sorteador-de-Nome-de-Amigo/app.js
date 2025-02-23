//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let titulo = document.querySelector("h1");
    titulo.innerHTML="Jogo do Amigo Secreto";

let paragrafo = document.querySelector("h2");
    paragrafo.innerHTML = "Digite o nome de um amigo"

let listaDeAmigos = [];

function adicionarAmigo(){
    let nomeDeAmigo = document.querySelector("input").value; //captura valor do nome

    if (validarEntrada(nomeDeAmigo)) {
        if (listaDeAmigos.includes(nomeDeAmigo)) {
            alert("Esse amigo já foi incluído na lista!");
            console.log(`O amigo '${nomeDeAmigo}' já está na lista.`);
        } else {
            listaDeAmigos.push(nomeDeAmigo);
            console.log(`Amigo adicionado: ${nomeDeAmigo}`);
            atualizarListaVisual(); // Atualiza a lista visual apenas se for adicionado
        }
        limparCampo();
    }
}

function validarEntrada(nomeDeAmigo){ //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    if(nomeDeAmigo == ""){
        alert("Por favor, insira um nome.");
        return false; // Impede que o nome vazio seja adicionado
    } else{
        console.log("nome de amigo inserido");
        return true;
    }
}

function limparCampo(){
    let input = document.querySelector("input");
    input.value = "";
}

// Atualizar a lista de amigos na tela
function atualizarListaVisual() {
    let listaElement = document.getElementById("listaAmigos"); // Seleciona o elemento <ul> da lista de amigos
    listaElement.innerHTML = ""; // Limpa o conteúdo atual da lista para evitar duplicação

    listaDeAmigos.forEach((amigo) => { // Percorre cada nome da lista de amigos
        let item = document.createElement("li"); // Cria um novo elemento <li> para cada amigo
        item.textContent = amigo; // Define o texto do <li> como o nome do amigo
        listaElement.appendChild(item); // Adiciona o <li> à lista no HTML
    });
}

function sortearAmigo(){
    let amigoEscolhido = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    console. log(`O amigo sorteado é ${amigoEscolhido}!`);
    // Exibe o resultado na tela
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>O amigo sorteado é ${amigoEscolhido}!</li>`;
}

