// Estruturas de repetição

// 01 - for

    // for(inicialização de uma variável; condição de continuação para o loop; expressão final)

    for(let i = 0; i < 10; i++) { // Primeiro declaro uma variável, que chame de i. logo depois uma condição, no caso, o "valor de i é menor que 10?". se for true, ele vai rodar o bloco de código, e no final, vai fazer o i++, ou seja, vai incrementar 1 ao valor. Isso vai acontecer até i chegar ao valor de 10...
        console.log('O i ainda não vale o suficiente');
    };

    console.log("Agora sim");

    for(let i = 10; i > 0; i--) {
        console.log('O i não desvalorizou o suficiente ainda');
    };

    console.log("Agora sim 2x");

    // ou:

    for(let value = 10; value > 0; value--) {
        if(value === 5){
            continue; // Fazer isso ele vai parar o loop, ignorar o 5, e seguir em diante...
        };

        console.log(value);
    };

    // break - para a execução do loop
    // continue - pula a execução do momento

// 02 - while - quando não sabemos o momento da parada, geralmente usamos while

    let age = 0;
    while(age < 18) { // lemos: "enquanto age for menor que 18, execute {}
        age++;
        console.log(age)
    };

    console.log('Você completou 18 anos!')

// 03 - for.. of
    let nome = 'Yuri';

    for(let char of nome) { // lemos= for(pegue um caractere do let nome e execute){imprimindo o caractere}. Após o primeiro loop, faça a mesma coisa, mas com o segundo caractere...
        console.log(char);
    };

    // Dá pra fazer isso com array também
    let names = ['Mayk', 'Rodrigo', 'Diego']
    for(let name of names) { // lemos= for(pegue o primeiro nome de dentro do array names e execute){imprima o primeiro nome}. O segundo loop é a mesma coisa, mas com o segundo item do array...
        console.log(name);
    };

// 04 - for... in
    // Usamos in para manipular objetos...

    let person = {
        nome: 'Thiago',
        age: 21,
        weight: 110,
    }

    for(let property in person){ // lemor for(pegue a primeira propriedade no objeto person e execute){qual a propriedade, qual o valor da propriedade}. O segundo loop é a mesma coisa, mas com a segunda prorpiedade dentro do objeto...
        console.log(property)
        console.log(person[property]);
    }