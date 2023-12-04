/* 01 - Prototype (Aquilo que foi criado antes)

    O protótipo encapsula o que eu digitar em um objeto que vai herdar atributos do protótipo.
    Quando fazemos um objeto no JS ele herda uma série de protótipos, atributos que já vem junto com ele. Exemplo:

    Colocando isso no console:
    "Yuri".__proto__

    Ele puxa vários dados que já vieram de um protótipo.

    .length vem do __proto__
    Essas funcionalidades que tem um .algumacoisa vem do proto 

    O JS prototipa várias coisas pra facilitar o manipulamento de dados...
   */

/* 02 - Type conversion coersion

    Alteração de um tipo de dado pra outro.
    */

    console.log('9' + 5); // Aqui a resposta vai ser 95 porque como de um lado tem uma string e do outro um número ele concatena em vez de somar. Ele força o 5 a se tornar uma string também...

    console.log(Number('9') + 5); // Agora vai dar certo, usando Number() converti uma string em um número...

// 03 - String em número, número em String
    
    let string = "123";
    console.log(Number(string));

    let number = 321;
    console.log(String(number));

// 04 - Contando caracteres
    let word = "Lasanha";
    console.log(word.length);

    // Number não recebe .length mas...
    let lenNumber = 10101010;
    console.log(String(lenNumber).length);

// 05 - Casas decimais (Trocar o ponto por vírgula e acertar as casas decimais)
    let decNumber = 238.3942023423;
    console.log(decNumber.toFixed(3).replace(".", ",")); // toFixed é chamado de método
    // A linha acima vai retornar 238.394 como string. O retorno de toFixed() é uma String

// 06 - Letras maiúsculas em minúsculas e minúsculas em maiúsculas
    let wordUp = "estudando js";
    console.log(wordUp.toUpperCase());

    let wordLow = "ESTUDANDO JS";
    console.log(wordLow.toLowerCase());

// 07 - String em Array, Array em String
    let text = "Running over the same old ground"; // Criei o Texto
    let myArray = text.split(" "); // O Split recebe dentro do parenteses o que vai ser o divisor/separador. Nesse caso " ", espaços em branco...
    console.log(myArray);

    let myTextArray = [ // Aqui vou fazer o caminho contrário. Criei um Array com palavras...
        "What",
        "have",
        "we",
        "found...",
        "Same",
        "old",
        "fears"
    ];
    let ArrayToTextAgain = myTextArray.join(" "); // Usando join juntamos tudo em um texto denovo. O que o join recebe nos parênteses é o q ele vaii colcar entre cada item do Array
    console.log(ArrayToTextAgain); // Retorno: "What have we found... Same old fears"

// 08 - Encontrando uma palavra específica
    console.log(ArrayToTextAgain.includes("Wish")); // Esse método includes vai ver se tem o que eu pedir e falar verdadeiro ou falso (nesse caso, falso). Icludes é case sesitive, então se pedirmos uma palavra com letra maiúscula, e ela estiver escrita com letra minúscula, ele retorna falso.

// 09 - Criando array com construtor
    let construtorArray = new Array('A', 'B', 'C');
    console.log(construtorArray);

// 10 - Elementos do Array
    console.log(construtorArray.length); // .length também funciona para arrays 

// 11 - Caracteres do String para Array
    let toArrayWord = "Macarrão"
    console.log(Array.from(toArrayWord)) // Usando Array.from() tranformei cada caractere em um item do array

// 12 - Manipulando Array 
    let techs =  ["HTML", "CSS", "JS"] 

    // Adicionando um item no fim do Array
    techs.push("Tailwind CSS")

    // Adicionando um item no começo de um array
    techs.unshift("node.js")

    // Remover do fim
    techs.pop() // só isso aqui já serve pra tirar o último

    // Remover do começo
    techs.shift()

    // Pegar somente alguns elementos do Array
    console.log(techs.slice(1,3)) // Selecionar a posição do primeiro item que quero, e do último. (Isso não modifica o array. Tudo acima modifica, aqui só mostra o que eu quero)

    // Remover um elemento de dentro de um array
    techs.splice(1, 1) // Aqui dentro informo qual a posição inicial que vou querer, e em seguida quantos itens apartir daquela posição eu quero apagar. No caso, vou apagar o "CSS"

    // Encontrar a posição de um item no Array
    let index = techs.indexOf("HTML") // Com esse comando, ele busca pra mim o item que eu quero. eu consigo ter facilmente a posição de algo pra...
    techs.splice(index, 1) // Usar aqui...

    console.log(techs)