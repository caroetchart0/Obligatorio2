export default class NFT {
    constructor(red,imagen,precio, comision, nombre, descripcion, regalia){
        this.setRed(red);
        this.imagen = imagen;
        this.setPrecio(precio);
        this.comision = comision;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.regalia = regalia;
    }
    toString(){
        "Red: "+this.red+ " IMG: " +this.imagen+ " Precio: " +this.precio+ " Comisión: "+ this.comision+
        " Nombre: "+ this.nombre+ " Descripción: " +this.descripcion+ " Regalía: " +this.regalia;
    }
    setRed(red){
        let redes = ["ETHEREUM", "POLYGON", "SOLANA", "FLOW", "TEZOS"];
        let esta = false;
        let r = red.toUpperCase();
        for(i=0; i<redes.length && !esta; i++){
            if(redes[i].equalsIgnoreCase(r)){
                esta = true;
            }
        }
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