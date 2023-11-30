// TREINO!

    // Declaração de variáveis
    var nome

    // Atribuição de valores
    nome = "Yuri"
    
    // que tipo de dado foi colocadona var
    console.log(typeof nome)

    let age, isHuman 
    
    age = 17
    isHuman = true

    console.log(nome, age, isHuman)

    console.log(`Aqui acaba a explicação de Declaração de Variáveis e Atribuição de valores...`)


    // escrita de textos + variáveis
    // concatenação
    console.log('Concatenando: O ' + nome + ' tem ' + age + ' anos')

    // interpolando com template literals / template strings
    console.log(`Interpolando: O ${nome} tem ${age} anos`)

    console.log(`Aqui acaba a explicação de concatenação e interpolação...`)

    // Object
    const person = {
        nome: 'Yuri',
        age: 30,
        weight: 80,
        isAdmin: true
    }

    // como puxar uma coisa específica dentro do object
    console.log(person.nome)
    // colocar o nome do objeto, um ponto (.) e a informação que eu quero
    console.log(`Aqui acaba a explicação de Object`)

    // Array
    let yuri = [
        "Yuri",
        16,
    ]
    
    // Paras conseguir um dado específico dentro de um Array, usamos a posição do do item no Array
    console.log(`O nome dele é ${yuri[0]}`)

    // Também posso criar um objeto dentro de um array
    let john = [
        "John",
        20,
        {
            peso: "80kg",
            altura: "1,75m"
        }
    ]

    // E consigo puxar esses dados assim:
    console.log(`O nome dele é ${john[0]} e tem esse peso: ${john[2].peso}`)

    console.log(`Aqui acaba a explicação de Array...`)
    
    var peso = 80
    console.log(typeof peso)

    // let nome = Tiago;
    // let idd = 22;
    // let stars = 4.5;
    // let isSubscribed = true; 

    let student = {
        nick: "Tiago",
        idd: 22,
        stars: 4.5,
        isSubscribed: true 
    }

    console.log(student)

    console.log(`O nome do aluno é ${student.nick}, tem ${student.idd}, avaliado em ${student.stars} estrelas.`)

    let students = []
    
    console.log(students)

    // console.log(students[0])

    const mateus = {
        nome: "Mateus",
        idd: 10,
        stars: 5
    }

    students = [
        mateus,
        student
    ]