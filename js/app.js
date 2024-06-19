let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

function comprar(){
    //pegar o tipo de ingresso selecionado
    
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    //pegar a quantidade de ingressos

    let quantidade = parseInt(document.getElementById('qtd').value);

    //subtrair a quantidade de ingressos comprados do total disponível.
    if (tipoIngresso=='inferior'){
        comprarInferior(quantidade);
        document.getElementById('qtd').value = ""
    }else if (tipoIngresso=='superior'){
        comprarSuperior(quantidade);
        document.getElementById('qtd').value = ""
    }else if(tipoIngresso=='pista'){
        comprarPista(quantidade);
        document.getElementById('qtd').value = ""
    }
}

function comprarInferior(quantidade) {
    if (qtdInferior<quantidade){
        //Caso a quantidade comprada seja maior do que a disponivel, colocar uma mensagem.
        alert("Quantidades indisponível de ingressos!");
    } else {
        alert("Compra realizada com sucesso!");
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = `${qtdInferior}`;
    }
}

function comprarSuperior(quantidade){
    if (qtdSuperior<quantidade){
        alert("Quantidades indisponível de ingressos!");
    } else {
        alert("Compra realizada com sucesso!");
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = `${qtdSuperior}`;
    }
}

function comprarPista(quantidade){
    if (qtdPista<quantidade){
        alert("Quantidade indisponível de ingressos!");
    } else {
        alert("Compra realizada com sucesso!");
        qtdPista=qtdPista-quantidade
        document.getElementById('qtd-pista').textContent = `${qtdPista}`;
    }
}