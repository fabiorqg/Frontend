/* Ao arrancar coloca o cursor no primeiro campo*/

function LoadForm() {
    document.formPessoa.inputNome.focus();
}

function ValidateNome() {
    let nome = document.getElementById('inputNome');
    if (nome.value == '') {
        nome.focus();
        nome.style.color = 'red';
        return false;

    }
    else {
        nome.style.color = 'black';
        return true;
    }

}


function CalcularIdade() {
    // dataUser guarda a data escolhida no calendário
    let dataUser = new Date(document.formPessoa.inputData.value);

    // getFullYear retira da data completa o ano e guarda em "ano"
    let ano = dataUser.getFullYear();

    // getFullYear retira da data atual o ano e guarda em "_dataAtual"
    let _dataAtual = new Date().getFullYear();

    // idade guarda o valor do cálculo
    let idade = _dataAtual - ano;
    
    
    if (dataUser == null || dataUser == '') {
        document.getElementById("idadeMessage").innerHTML = "Campo obrigatório";
        return false;
    } else {
        return document.getElementById("idadeMessage").innerHTML = idade + " ano(s)";
    }
}


function ValidateEmail() {
    // let emailCampo = document.getElementById('inputEmail')

    let email = document.getElementById('inputEmail')
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(email.value)) {
        email.focus();
        email.style.color = 'red';
        return false;
    }
    else {
        email.style.color = 'black';
        return true
    }
}

function ValidateTelefone() {
    let telefone = document.getElementById('inputTelefone')

    let regexTelefone = /^\d{9}$/;
    //let regexTelefone = /^5555/;

    if (!regexTelefone.test(telefone.value)) {
        email.focus();
        email.style.color = 'red';
        return false;
    }
    else {
        email.style.color = 'black';
        return true
    }
}

function ValidateNIF() {
    let nif = document.getElementById('inputNIF')

    let regexNIF = /^\d{9}$/;

    if (!regexNIF.test(nif.value)) {
        email.focus();
        email.style.color = 'red';
        return false;
    }
    else {
        email.style.color = 'black';
        return true
    }
}

/*function ValidateForm() {

    let message;
    let nome = document.getElementById('inputNome');
    if (nome =="") {
        message = "Preencha todos os campos";
    }
    else {
        message = "Formulário completo!";
    }
    
    document.getElementById("pMessage").innerHTML = message;
}*/

    function Limpar() {
        document.getElementById("formPessoa").reset();
        document.getElementById("pMessage").innerHTML = "";
    }