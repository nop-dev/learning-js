// TIPOS DE DADOS

/*
1- String:
    String é uma cadeia de caracteres, forma textos.

    Usamos ou "" ou '' ou ``
    Se dentro do texto eu for usar "", usar aspas simples para envolver a String.
    Se dentro do texto eu for usar '', usar aspas duplas para envolver a String.

    E posso usar `` para usar tanto aspas simples ou duplas
    */

    console.log("Olá, usando aspas duplas"); // no lugar de "" poderia usar '' ou `` (para template strings)

    console.log(`Olá!
    "Posso usar aspas duplas"
    'Aspas simples'
    e textos multilinhas
    `); // Exemplo de como usar crase para envolver a strings

    // Crases também permite usar expressões de linguagens dentro da String
    console.log(`A idade do Yuri é ${9+8}`);

    console.log("Aqui acaba a explicação de strings");
/*

2 - Number
   11 // Numeros inteiros  positivos ou negativos
   12.5 // numeros reais  - float
   NaN // Not a number
   Infinity // Preciso explicar isso? (Infinity é raro, e não funciona com o I minúsculo)

   Sinais: (+) mais, (-) menos, (/) dividir, (*) multiplicar 
*/

    console.log(10 + 11);
    console.log(10 - 15.4);
    console.log(20 * 2);
    console.log(20 / 2);

    console.log("Aqui acaba a explicação de numbers");

/* 3 - Boolean
    Só tem 2 valores:

    Ou ele é true ou false...
*/

    console.log(true)

    console.log("Aqui acaba a explicação de boolean")

// 4 - Undefined vs null

    console.log(undefined) // undefined aparece caso eu não tenha setado um valor
    console.log(null) // null aparece se eu tiver citado um valor que não tem valor, algo que não tem nada dentro, nulo

    console.log("Aqui acaba a explicação de undefined e null")

/* 5 - Object 
        Assim como o meu teclado...
        Todo objeto tem Propriedades/Atributos (meu teclado é azul é uma propriedade/atributo)
        E funcionalidades/métodos (Meu teclado serve para escrever)

        Escrevemos:
        { propriedade: "valor" }
*/ 
        console.log({ // sempre separar cada propriedade com valor por uma vírgula
            name: "Yuri", // criei um objeto que tem uma propriedade de name, que tem o valor "Yuri"
            idade: 17, // mais uma propriedade com valor
            correr: function() { // dá para colocar funções dentro de uma propriedade do objeto
                console.log("Ele sabe correr")
            }
        })

        console.log("Aqui acaba a explicação de object")

/* 6 - Array
        Array ou Vetores 
        Array é uma lista

        Um agrupamento de dados...´

        ["Yuri", 17]
*/

        console.log([ // dá pra quebrar linha. O objeto e suas propriedades e valores são uma coisa só. Aqui é como se fosse uma fila, cada coisa é diferente, só está escrita juntos no array...
            "Macarrão",
            "Ovos",
            2,

        ])

        console.log("Aqui acaba a explicação de array")

        console.log("Aqui acaba a explicação de TIPOS DE DADOS")