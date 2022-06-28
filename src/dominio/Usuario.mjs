export default class Usuario {
    constructor(nombre, email, contrasenia, mayorEdad){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
        this.mayorEdad = mayorEdad;

    }
    toString(){
        "Nombre: "+this.nombre+ " Email: " +this.email;
    }
    
}
