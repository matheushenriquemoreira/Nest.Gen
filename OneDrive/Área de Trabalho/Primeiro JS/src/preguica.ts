import { Animal } from "../animal"


export class Preguica extends Animal{

    override emitirSom(): void {
        super.emitirSom
        console.log("rooooooooo")
    }

    subir(){
        console.log("subindo na árvore")
    }

  
}