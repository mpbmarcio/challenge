let amigos = [];
let ul = document.getElementById('listaAmigos');
let result = document.getElementById('resultado');
let nome = document.getElementById("amigo");

function adicionarAmigo() {
    if (!validarNome(nome.value)) {
        alert('Por favor, insira um nome.');
    } else {    
        amigos.push(nome.value);
        exibirListaNomes(amigos);
        limparCampo(nome);
    };
};

function validarNome(nome) {
    if (nome == '') {
        return false;
    } else {
        return true;
    };
};

function exibirListaNomes(lista) {    
    ul.innerHTML = ''; 

    for (let i = 0; i < lista.length; i++) {
        li = document.createElement('li');        
        li.innerHTML = lista[i];
        ul.appendChild(li);
    };
};

function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoEscolhido = Math.floor(Math.random() * amigos.length);    
        result.innerHTML = 'O amigo secreto sorteado é: ' + amigos[amigoEscolhido];
    } else
        alert('Por favor, insira alguns amigos.');
};

function reiniciarSorteio() {
    amigos = [];
    ul.innerHTML = '';
    result.innerHTML = '';
    limparCampo(nome);
}

function limparCampo(campo) {
    campo.value = '';
    campo.focus();
};
