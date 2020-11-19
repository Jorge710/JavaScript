export const PI = Math.PI;

export let usuario = "Jorge";

const password = "qwerty";
//export default password;

const hello = () => console.log("Hola");

export default function saludar(){
    console.log("Hola módulos +ES6");
}

export class Saludar{
    constructor(){
        console.log("Hola clases +ES6");
    }
}