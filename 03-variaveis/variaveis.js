// VARIÁVEIS

/* 01 - TIPOS DE VARIÁVEIS

    Criar variáveis abrem espaços na memoria do meu PC
    * Nomes Simbólicos para receber um valor...
    * Atalhos de código
    * Identificadores / Identifiers
        * var       
        * let
        * const
*/

    // var
    var clima = "Quente" // valor definido primeiro
    clima = "Frio" // agora mudei o valor de clima

    console.log(clima) // vai mostrar "Frio"

    // let (bem parecido com o var)
    let turno = "Manhã" // valor definido primeiro
    clima = "Noite" // agora mudei o valor de clima

    console.log(turno) // vai mostrar "Frio"

    // const (não muda o valor da const dentro da aplicação)
    const job = "Bom"
    // const = "Ruim" não funciona

    console.log(job) // Vai imprimir Bom

    var fim = "Aqui termina a explicação de Tipos de variáveis"
    console.log(fim)

/* 02 - Dinâmica do JS 

    Eu não preciso declarar que tipo de dado que vou colocar na variável:
    var clima:String = "Frio que dói"

    O próprio JS entende isso...
*/

    var nome = "Yuri" // aqui ele já entendeu que é uma String
    var idade = 17 // aqui ele já entendeu que é Number
    var bonito = "true" // aqui ele já entendeu que é boolean (e acertou quando disse que é true...)

    // também dá pra mudar de tipo de dado na variável no meio da aplicação, isso faz o JS ser dinâmico, quem tipa é o valor...

    var nota = 0 // aqui ele era número
    nota = "Máxima" // aqui ele virou String

    let endDin = "Aqui termina a explicação da Dinâmica do JS"
    console.log(endDin)

/* 03 - Scope e var-
    Tudo dentro desse variaveis.js tá dentro de um scopo global
    Escopo determina a visibilidade de alguma variavel no JS
*/
    //BLOCK STATEMENT
    {
        console.log("Nós usamos block-staments (declaração de bloco), que são as chaves que contornam esses console.log");
        console.log("Tudo o que eu escrever entre essas chaves faz parte de um escopo global");
    }

    alert(`modelo`);
    {
        console.log(x);

        {
            var x = 1;
        }

        console.log(x);
    }

    console.log(`vou fazer alguns exemplos:`);

    alert(`exemplo 1:`); // hoisting, por que a var é global, ou seja, ela existe no scope global independente de estar dentro de um scopo local

    {
        // hoisting: por baixo dos panos o "var x" está no começo do documento, acima de tudo no scope global, mas sem um valor

        console.log(x); // o retorno daqui será indefinido, por causa do hoisting, ele vai perceber que existe uma var com nome x mas...

        {
            var x = 1; // essa variável só vai ter um valor apartir daqui (x = 1), ou seja:
        }

            //console.log(x);
        }

    alert(`exemplo 2:`)
    
    {
        console.log(x); // o retorno daqui ainda será indefinido

        {
            var x = 1; 
        }

        console.log(x); // mas o retorno daqui será o valor de var x que é 1
    }

/* 04 - Scope let e const (LET E CONST SÓ FUNCIONAM NO SCOPO EM QUE FOI CRIADO)*/

    alert(`modelo`);
    
    {
        console.log(y);

        {
            let y = 2;
        }

        console.log(y);
    }

    console.log(`vou fazer alguns exemplos com o let e const:`)
        
    alert(`exemplo 1 - let`);
    {
        console.log(y) // o retorno nesse caso vai ser "inexistente", porque o let se encontra dentro de uma scope local, então os valores que nela estão, não existem para o scope global. 
    
        {
            console.log(y); // como esse console foi escrito antes da atribuição de valor de y, ultilizando o let, o retorno será "que não foi possível acessar" esse valor. nesse caso ele reconhece que a variável existe, mas tendo em mente que o javascript lê o código de cima pra baixo, esse pedido veio antes da atribuição.
            let y = 2;
            console.log(y); // esse sim dára um retorno correto, está dentro do scope local e abaixo da atribuição. retorno = "2"
        }
    
        console.log(y); // novamente, não existe, tá fora do scope local...
    }

    alert(`exemplo 2 - let`); // nesse exemplo, vou mostrar como que podemos alterar o valor de um let no scope global independente de onde essa mudança esteja. lembrando que no caso dessas alterações, mesmo que aja 10 escopos locais dentro de escopos locais, o identificador y será modificado do mesmo modo.
    {
        console.log(y); // não existe, o pedido veio antes da atribuição da variável
        let y = 2; // agora a váriavel "y" vale "2"
    
        {
            y = 3; // com essa alteração o valor do pedido abaixo será atualizado. algo como...
        }
    
        console.log(y); // retorno: 3
    }

    // mas, por quê? o valor de let que eu setei no escopo global passa por dentro do escopo local. o "y = 3" que está dentro desse escopo, está procurando alguma variável que se chame "y" para modificar, ou seja, o dado entra nessa escope, e enfim, é modificado. após modificado o dado sai novamente, agora atualizado pela mudança feita dentro da scope local, valendo "3".

    alert(`exemplo 3 - let`); // agora a situação é diferente
    {
        let nome = "Yuri" // aqui temos uma váriavel chamada "Yuri", que está escrita no escopo global
        console.log(nome); // o retorno será: "Yuri"
    
        {
            let nome = "Yuri Dev"; // mas aqui temos uma outra váriavel, com o mesmo identificador "nome". e agora? vai dar erro?
            console.log(nome); // o retorno daqui será "Yuri Dev". sem nenhum erro. por quê?
        }
    }

    // não ocorreu nenhum erro aqui, apesar dos identificadores setados para essas variáveis estarem em escopos totalmente diferentes! a razão disso é que estou usando o "let" e ele não se mistura com o escopo global ao menos que eu queira fazer uma modificação em seu valor como no "exemplo 2 - let. incrível isso!!!"

    alert(`exemplo 4 - const`) // com o const é um tanto mais simples. não é possível modificar o valor e ele não mistura escopo global com escopo local, assim como o let. segue as mesmas regras do let, exceto pela mostrada no "exemplo 2".
    {
        const y = 3 // variável atribuída no escopo global
        console.log(y); // retorno: "3"
    
        {
            y = 4 // isso não vai dar certo, estou usando uma const. é impossível o valor dela ser modificado. não vai modificar nem a do escopo global e nem a do local.
            const y = 3; // variável atribuida no escopo local
            console.log(`y`) // retorno "3"
        }
    
        console.log(y); // por não poder ser modificada, o retorno também será "3"
    }

    console.log("Aqui termina a explicação de Scopo com let e const")

/* 05 - Nomeando variáveis
    No arquivo VARNAMES.md nessa mesma página
*/

console.log("Aqui termina a explicação de como nomear bem variáveis")

console.log("Aqui termina a explicação de Variáveis no JS")