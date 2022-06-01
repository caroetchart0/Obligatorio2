class Sistema {
    constructor(){
        this.listaNFT = [];
        this.listaUsuarios = [];
    }
    agregarNFT(NFT){
        this.listaNFT.push(NFT);
    }
    agregarUsuario(usuario){
        this.listaUsuarios.push(usuario);
    }
    darUsuarios(){
        return this.listaUsuarios;
    }
    darNFT(){
        return this.listaNFT;
    }

}

class NFT {
    constructor(red,imagen,precio, comision, nombre, descripcion, regalia){
        this.red = red;
        this.imagen = imagen;
        this.precio = precio;
        this.comision = comision;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.regalia = regalia;
    }
}

class Usuario {
    constructor(nombre, email, contrasenia, mayorEdad){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
        this.mayorEdad = mayorEdad;

    }
    
}