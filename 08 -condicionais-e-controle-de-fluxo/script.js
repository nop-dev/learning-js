// Control flow

// 01 - if e else
    let temperature = 37.4;
    
    if(temperature >= 37.5){
        console.log("Febre Alta")
    } else if(temperature < 37.5 && temperature >= 37) {
        console.log("Febre moderada")
    } 
    else {
        console.log("Tranquilo")
    }

// 02 - switch 
    let expression = ''

    switch (expression) { // puxa a expressão para o switch
    case 'a': // confere se o valor da expressão é o correto
        console.log('a')
        break // para a execução do switch apenas se verdadeiro
    case 'b':
        console.log('b')
        break
    default: // caso nenhum valor seja o correto, realizará a 
                        //instrução dentro de si.
        console.log('default')
        break
    }

    // Um exemplo:

    function calculate(number1, operator, number2) {
        let result = 0;
    
        switch (operator) {
            case '+':
                result = number1 + number2
                break
            case '-':
                result = number1 - number2 
                break
            case '*':
                result = number1 * number2
                break
            case '/':
                result = number1 / number2 
                break
            default:
                console.log('não implementado')
                break
        }
    
        return result
    }
    
    console.log(calculate(4, '+', 8));

// 03 - Throw e Try/Catch

    // Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

    // Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

    function sayMyName(name = '') {
        if (name === '') {
            throw 'Nome é obrigatório'
        }

        console.log(name)
    }
    // Nesse caso, se o nome vier vazio, será disparada uma mensagem.

    // Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

    try {
        sayMyName()
    } catch(e) {
        console.log(e)
    }

    console.log('após ao try/catch')
    // O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.