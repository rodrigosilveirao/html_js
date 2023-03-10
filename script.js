    const form = document.getElementById('form');
    const numberA = document.getElementById('numberA');
    const numberB = document.getElementById('numberB');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        if (parseInt(numberB.value) > parseInt(numberA.value)) {
            // exibir mensagem positiva
            alert("Formulário válido!");
        } else {
            // exibir mensagem negativa
            alert("Número B deve ser maior que número A!");
        }
    });


/*o parseInt() serve para converter as strings dos campos de texto em números, 
para que possam ser comparados com o operador >. 
Já o if verifica se a condição dentro dos parênteses é verdadeira ou falsa
e executa o bloco de código correspondente.*/
