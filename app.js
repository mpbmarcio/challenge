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

};

function sortearAmigo() {

};

function reiniciarSorteio() {

}

function limparCampo(campo) {
    campo.value = '';
    campo.focus();
};
