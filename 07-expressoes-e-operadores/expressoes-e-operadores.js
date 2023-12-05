// 01 - O que são expressões e operadores? 
    // Qualquer linha de código que resolve alguma coisa no JS é uma expressão...

    let number; // Expressão

    number = 1;
    // Operadores
    console.log(number + 1); // Operador binário, dois valores nos parênteses()
    console.log(++number); // Operador Unário. O ++ é um operador. typeof também é um operador unário.

// 02 - new (usamos new algumacoisa para criar um objeto do tipo que escolhermos)
    let nome = new String('Nop');
    let age = new Number(17);
    let date = new Date("2023-12-04");

    console.log(nome, age, date);

// 03 - typeof e delete
    console.log(typeof nome);

    const person = { 
        nome: "Jack",
        age : 8
    };

    delete person.age; // Usamos delete para apagar alguma coisa do objeto
    console.log(person);

// 04 - Operadores Aritméticos

    // Multiplicação: sinal *
    console.log(2 * 4);

    //Divisão: sinal /
    console.log(8 / 4);

    // Soma: sinal +
    console.log(4 + 4);

    // Subtração: sinal -
    console.log(10 - 2);

    // resto da divisão: sinal %
    let remainder;
    remainder = 11 % 9;
    console.log(remainder);

    // incremento: sinal ++ 
    let increment = 0;

    console.log(++increment);
    console.log(increment);

    // decremento: sinal -- 
    let decrement = 0;
    decrement--;
    console.log(decrement);

    // exponencial: sinal ** 
    console.log(2 ** 3);

// 05 - Grouping operator

    // na Matemática exise a regra de qual sinal é mais relevante
    console.log(1 + 8 * 2); // Aqui ele vai fazer o 8 * 2 primeiro

    // Pra driblar isso...
    console.log((2 + 3) * 5);

// 06 - Operadores de comparação igual a e diferente de

    // == igual a

    // != diferente de

    console.log(2 == 3); // false
    console.log("A" == "A"); // true

    console.log(2 != 3); // true
    console.log(3 != 3); // false

// 07 - Operadores de comparação estritamente igual e estritamente diferente

    let one = 1;
    let two = 2;

    // === estritamente igual a 
    // Os dois primeiros sinais de igual servem pra mesma coisa do anterior, e o terceiro sinal de igual serve pra ver se o tipo do dado também é igual)
    console.log(one === "1"); // false
    console.log(one === 1); // true

    // !== estritamente diferente de (A mesma ideia do anterior, mas mostrando a diferença)
    console.log(two !== "2"); // true
    console.log(two !== 2) // false

// 08 - Operadores de comparação maior e menor (igual)
    
    // Maior que
    console.log(two > one); //true

    // Maior igual a
    console.log(one >= 1); // true porque one é igual a 1
    console.log(two >= 1); // true porque two é maior que 1
    
    // Menor que
    console.log(one < two); // true

    // Menor igual a
    console.log(one <= 1); // true porque one é igual a 1
    console.log(one <= 2); // true porque one é menor do que 2

// 09 - Operadores de atribuição

    // Operadores de atribuição (Assignment)
    let x;

    // assignment normal:
    x = 1;

    // addition assignment (adição):
    x += 2;

    // subtraction assignment (subtração):
    x -= 1;

    // multiplication assignment (multiplacação):
    x *= 2;

    // division assignment (divisão):
    x /= 2;

    // exponetiation assignment (exponenciação):
    x **= 2;

    // remainder assignment (resto de divisão):
    x %= 2;

    console.log(x)

// 10 - Operadores lógicos (Responde um booleano)
    let pao = true;
    let queijo = true;

    // AND &&
    console.log(pao && queijo); // true, tem pão e queijo    

    // OR || 
    pao = false;
    queijo - true;

    console.log(pao || queijo); // true, tendo um dos dois tá bom. Se não tivesse nenhum dos dois seria false

    // NOT !
    console.log(!pao); // true, Ele era falso, mas eu neguei ele. Agora ele é true

// 11 - Operador condicional ternário.
    // Funciona da seguinte forma: condição ? valor1 : valor2

    // Café da manhã top
    pao = false;
    queijo = false;

    const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim';

    console.log(niceBreakfast); // café ruim porque não tem nenhum dos dois

    // Maior de 18
    age = 16;

    const canDrive = age >= 18 ? "Can drive" : "Can't drive";
    console.log(canDrive); // "Can't drive", porque a age é menor que 18

// 12 - strings concatenation (a união de dois dados)
    let hot = 'hot';
    console.log(hot + 'dog' + 's'); // hotdogs

// 13 - Falsy e Truthy

    /*
        Todos os valores abaixo seriam representados como false em um boolean.
            false
        0
        -0
        ""
        null
        undefined
        NaN
    */

    console.log( NaN ? 'verdadeiro' : 'falso' )

    // já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

    /* 
        Todos os valores abaixo seriam representados como false em um boolean.
            true
        {}
        []
        1
        3.23
        "0"
        "false"
        -1
        Infinity
        -Infinity
    */

    console.log( Infinity ? 'verdadeiro' : 'falso' )

// 14 - Precedência de operadores (Sinais mais impotantes)

    /* De cima para baixo, do mais importante ao menos importante.

    * grouping                      ( )
    * negação e incremento          ! ++ --
    * multiplicação e divisão       * /
    * adição e subtração            + -
    * relacional                    < <= > >=
    * igualdade                     == != === !==
    * AND                           && 
    * OR                            ||
    * condicional                   ?:
    * assignment (atribuição)       = += -= *= %= 
    */