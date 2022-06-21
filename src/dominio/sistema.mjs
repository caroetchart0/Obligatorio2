import Usuario from "./Usuario.mjs";

export default class Sistema {
    constructor(){
        this.listaNFT = [];
        this.listaUsuarios = [];
        this.usuarioActivo = undefined;
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
    existeNFT(NFT){
        let pertenece = false;
        for(let i=0; i<this.listaNFT.length; i++){
            if(this.listaNFT[i].this.nombre.toUpperCase().equals(NFT.toUpperCase())){
                pertenece = true;
            }
        }
        return pertenece;
    }

}



