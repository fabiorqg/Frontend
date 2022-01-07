function ValidateAge() {

    // 1. Declarar variáveis: Valor da textbox, mensagem

    let age, message;

    // 2. Ler da textbox e atribuir à variavel
    //windo.document.form.textbox

    age = document.getElementById("textAge").value; // 

    // 3. Avaliar o valor da variavel da idade e dar respectiva mensagem
        //isNaN("a")     --> true
        //isNaN("")      --> true
        //isNaN(true)    --> true
        //isNaN(30)      --> false
    if (isNaN(age) || age <= 18) {
        message = "idade incorreta";
    }
    else {
        message = "Idade válida";
    }
        
    
    // 4. Escrever no ecran a mensagem
    document.getElementById("pMessage").innerHTML = message;
    
    
}