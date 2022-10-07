import { Animal } from "../animal"


export class Cavalo extends Animal{

    override emitirSom(): void {
        super.emitirSom
        console.log("pocoto")
    }

    trotar(){
        console.log("Trotando")
    }

    
}