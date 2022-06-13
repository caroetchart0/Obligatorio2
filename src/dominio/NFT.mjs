export default class NFT {
    constructor(red,imagen,precio, nombre, descripcion, usuario){
        this.setRed(red);
        this.imagen = imagen;
        this.setPrecio(precio);
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.usuario = usuario;
    }
    toString(){
        "Red: "+this.red+ " IMG: " +this.imagen+ " Precio: " +this.precio+" Nombre: "+ this.nombre+ " Descripción: " +this.descripcion+ " Regalía: " +this.regalia;
    }
    setRed(red){
        let redes = ["ETHEREUM", "POLYGON", "SOLANA", "FLOW", "TEZOS"];
        let esta = false;
        let r = red.toUpperCase();
        esta = redes.includes(r)
        if(!esta){
            throw new Error('Error, las redes pueden ser Ethereum, Polygon, Solana, Flow, Texos');
        }else{
            this.red = red;
        }
    }
    setPrecio(precio){
        if(precio > 0){
            this.precio = precio;
        }else{
            throw new Error('Error, precio debe ser mayor a 0 (cero)');
        }
    }
}