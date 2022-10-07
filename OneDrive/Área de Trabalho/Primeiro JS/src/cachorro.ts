import { Animal } from "../animal"


export class Cachorro extends Animal{
    
    override emitirSom(): void {
        super.emitirSom
        console.log("auauau")
    }

    correr(){
        console.log("Correndo")
    }

   
}