// 01 -Declaração da função...
    //function declaration/statement
    function frases() {
        console.log("E essas boas novas do reino serão pregadas em toda a terra habitada");
        console.log("Em testemunho a todas as nações");
        console.log("E então virá o fim...");
    };

    // executar a função, qnt vzs eu quiser
    frases();
    frases();
    frases();

    console.log("Aqui termina a explicação da aula 1");

// 02 - Argumentos e parâmetros
    // função anônima
    // o number1 e number2 são parâmetros, esse parâmetros só existem dentro do escopo do const sum
    const sum = function(number1, number2) {
        total = number1 + number2; // evitar usar um nome assim sem let (de preferência), let ou const, pq já que esse valor consegue sair desse escopo, pode dar bugs na minha aplicação, caso eu use a palavra total novamente depois...
        return total; // toda função retorna algo... quando eu não coocar um return ela vai mandar um undefined

        // se eu coloco "var total" até a variável que antes atravessava escopos não vai mais funcionar. Var, Let e Const dentro de um escopo de função, só existem nesse escopo
    };

    sum(2, 8); // argumentos...
    sum(4, 2);

    // Tambem posso passar variávei como argumentos...
    let numero1 = 20;
    let numero2 = 30;
    sum(numero1, numero2); // Aqui ele vai retornar 50, normalmente.

    // Mas agora:
    console.log(total) // Aqui o total ainda não existe... (linha 39 continuação)

    console.log(`O número 1 é ${numero1}`)
    console.log(`O numero 2 é ${numero2}`)
    console.log(`A soma desses 2 números é ${sum(numero1, numero2)}`) // O resultado aqui só é possível por causa do return da linha 21...

    console.log(total) // Aqui o total já existe, após a execução da linha acima, o total (linha 20 e 21) que antes só tava no escopo da função, agora faz parte do escopo global. O total só funciona aqui porque eu não coloque ela envolvida em um var, let ou const

    console.log("Aqui termina a explicação da aula 2")

// 03 - Function Scope
    let middleName = "Sousa" // O let vai passar por dentro do escopo da função abaixo. Esse middleName, no escopo global tem um significado

    function createName(middleName) { // esse middleName desse escopo tem outro significado. Como eu coloquei middleName no meio dos parenteses ele se torna um novo objeto. Mas se eu não colocar ele entre os parenteses (), deixar vazio, ele vai sobrescrever o let da linha 46 mesmo...
        middleName = "Rodrigues"
        return middleName
    }

    console.log(createName(middleName)) // Aqui ele vai retornar o que foi mudado dentro do escopo da função
    console.log(middleName) // Aqui ele vai retornar o let da linha 46

    // Outro exemplo

    let think // Deixei o think sem valor definido

    function createThink() {
        think = "Agir" // Aqui defini um valor pro think
        return think // aqui pedi para ele retornar esse valor de think. Se eu n colocar um return aqui, as linhas 65 e 66 retornariam undefined
    }

    console.log(think) // Aqui ele ainda vai voltar um valor indefinido, por causa da linha 58, que deixei sem um valor
    console.log(createThink()) // Aqui ele puxa o que eu sobreescrevi na função, dando o valor de "Agir" para "think"

    // Esse console.log acima puxa a linha 61 pro escopo global, é como se ao rodar a linha 66 ele criasse um think = "Agir" na linha 67

    console.log(think) // Aqui ele realmente vai mostrar o que eu defini na linha 61, pq a linha 66 fez com q o valor de "think" fosse puxado pro escopo global.

    console.log("Aqui termina a explicação da aula 3")

// 04 - function hoisting

    /* o Hoisting de funções puras funciona tipo assim, ele faz o hoisting da função inteira pro topo da aplicação
     function sayMyName() {
        console.log("Yuri")
    } */

    sayMyName() // Aqui ele vai retornar a linha 78, meu nome. 

    function sayMyName() {
        console.log("Yuri")
    }

    // É diferente se eu colocar essa função como sendo um tipo de variável. Exemplo: 
    
    // sayMyMiddleName() Nesse caso ele vai retornar erro, aqui seguimos as regras de escopo do let, não da function

    let sayMyMiddleName = function() {
        console.log("Sousa")
    }

    // quando fizer uma função em forma de expressão ela não sofre hoisting

    console.log("Aqui termina a explicação da aula 4")

// 05 - arrow function: Uma forma mais moderna de declarar funções em expressões (usando var, let e const)

    let sayMyAge = (age) => { // esses () são uma função anônima, que dá pra passar os argumentos nela, e a setinha faz com que eu possa abrir o bloco e colocar o que eu quiser
        console.log(age)
    }

    sayMyAge(17) // tudo certinho, assim como fiz nas linha 26 e 27

    console.log("Aqui termina a explicação da aula 5")

// 06 - callback function
    // simplesmente uma função que passa outra função. Exemplo:

    function sayMyLevel(level, structure) {
        console.log(level, structure)
    }

    sayMyLevel( // Passando argumentos
        20,
        () => { // Passando um dos argumentos como uma função. Apenas criei isso aqui fora, e mandei pra dentro da função da linha 112
            name: 'Yuri'
            age: '17'
        }
        )

// 07 - Function constructor()

        function Person(nome) {
            this.nome = nome
        }

        const yuri = new Person("Yuri") // "new" serve para criar um objeto em um novo espaço de memória 
        console.log(yuri)

        const exemplo = yuri
        exemplo.nome = "Thiago" // Por não ter o "new", ele usou o mesmo espaço de memória que "yuri"
        console.log(yuri.nome) // Tanto o "exemplo", como o "yuri" estão ocupando o mesmo espaço, então a linha 134 sobrescreveu a linha 130. Vai retornar "Thiago"
        console.log(exemplo.nome) // Vai retornar "Thiago" também