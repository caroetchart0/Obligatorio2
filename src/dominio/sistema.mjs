export default class Sistema {
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
    existeUsuario(usuario){
        var pertenece = false;
        for(i=0; i<this.listaUsuarios.length; i++){
            if(this.listaUsuarios[i].this.nombre.toUpperCase().equals(usuario.nombre.toUpperCase())){
                 pertenece = true;
            }
        }
        return pertenece;
    }
    existeNFT(NFT){
        let pertenece = false;
        for(i=0; i<this.listaNFT.length; i++){
            if(this.listaNFT[i].this.nombre.toUpperCase().equals(NFT.toUpperCase())){
                pertenece = true;
            }
        }
        return pertenece;
    }

}



