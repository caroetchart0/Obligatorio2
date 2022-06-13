import Usuario from "../../dominio/Usuario.mjs";
import NFT from "../../dominio/NFT.mjs";
import Sistema from "../../dominio/sistema.mjs";

export function cargarDatosEnHTML(sistema) {
    var contenedor = document.getElementById("NFT");
    contenedor.innerHTML = " ";
    sistema.darNFT().map((nft)=>{
        var div = document.createElement("div");
        div.innerHTML = `
        <div class="mdc-card element-card">
            <li class="mdc-image-list__item">
                <div class="mdc-image-list__image-aspect-container">
                    <img class="mdc-image-list__image" src="${nft.imagen}">
                </div>
            <h3>${nft.nombre}</h3>
        <h4>by: ${nft.usuario}</h4>
        <h4> Red: ${nft.red}
        <h4>ETH ${nft.precio}.00</ </h4>
        <button value=${nft.nombre} class="mdc-button mdc-button--raised mdc-button--leading btnComprar">
            <span class="mdc-button__ripple"></span>
            <i class="material-icons mdc-button__icon" aria-hidden="true"
            >favorite</i
            >
            <span class="mdc-button__label">Comprar</span>
        </button>
    </li>
    </div>`
        contenedor.appendChild(div);  
    })
    document.body.append(contenedor);
}

export function cargarDatosSistema(sis) {
    //nombre, email, contrasenia, mayorEdad
    //USUARIOS
    console.log(sis)
    var usu1 = new Usuario("Renata", "flangini@gmail.com", "1234", true);
    var usu2 = new Usuario("Carolina", "hola@gmail.com", "0000", true);
    var usu3 = new Usuario("Guido", "dogui@gmail.com", "1111", true);

    sis.agregarUsuario(usu1);
    sis.agregarUsuario(usu2);
    sis.agregarUsuario(usu3);

    //NFT
    var nft1 = new NFT("ETHEREUM","https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0x3903d4ffaaa700b62578a66e7a67ba4cb67787f9:2741/84349efb",
    123, "Osito Gominola", "Osito tierno triste",usu1);
    var nft2 = new NFT("POLYGON", "https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0x19b86299c21505cdf59ce63740b240a9c822b5e4:245/bda4ab6e",
    222, "Tigre nashe", "tigre que no le tiene miedo al peligro", usu1);
    var nft3 = new NFT("SOLANA", "https://img.seadn.io/files/5ace422089a5e5b8d7d69dee9722845e.png?fit=max&auto=format&w=600",
    321, "Camionero hippie", "doodle",usu1);

    sis.agregarNFT(nft1);
    sis.agregarNFT(nft2);
    sis.agregarNFT(nft3);

  }