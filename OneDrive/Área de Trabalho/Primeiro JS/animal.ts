export class Animal{

    nome: string
    idade: number

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }

    protected emitirSom(){
        console.log("O animal está: ")
    }

    mostrarDados(){
        console.log(`O nome do animal é ${this.nome}, ele tem ${this.idade} anos.`)
    }
}