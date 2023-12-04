// Aqui vou deixar guardado a explicação que meu amigo me deu, de uma forma mais direta, sobre a uúltima aula do módulo de funções, sobre keywords e expressões. Mais específicamente "new" e "this"...

class Person {
    constructor (age) {
      this.age = age; //this se refere ao atributo age de Person, sem this se refe ao parâmetro age no constructor
    }
  }
  
  let person = new Person(10); //Criando um novo objeto do tipo Person em uma nova (new) posição da memória (posição 100, por exemplo)
  console.log(person.age); //Imprime: 10
  
  let personExample = person; //Por ser objeto e não ter pedido uma nova posição (está sem new), recebe o valor da posição de memória de person (posição 100), que foi o que pediu para receber.
  personExample.age = 5; //Altera o valor da propriedade age na posição de memória que está responsável (posição 100)
  console.log(person.age); //Imprime: 5
  console.log(personExample.age); //Imprime: 5