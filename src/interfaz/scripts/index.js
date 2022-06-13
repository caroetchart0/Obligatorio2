import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
import Pelicula from '../../dominio/pelicula.mjs';
import { cargarDatosEnHTML, cargarDatosSistema } from './auxiliares.js';
import Sistema from '../../dominio/sistema.mjs'; 
import Usuario from '../../dominio/Usuario.mjs';
import NFT from '../../dominio/NFT.mjs';

const listaPeliculas = new ListaPeliculas();
const sis = new Sistema();


const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


const botonExplorar = new MDCRipple(document.getElementById('exploreTab'));
const botonCrear = new MDCRipple(document.getElementById('createTab'));
const botonCarrito = new MDCRipple(document.getElementById('cartTab'));
const botonPerfil = new MDCRipple(document.getElementById('profileTab'));
const botonAyuda = new MDCRipple(document.getElementById('helpTab'));
const botonContacto = new MDCRipple(document.getElementById('supportTab'));
const botonLogout = new MDCRipple(document.getElementById('logoutTab'));


botonExplorar.listen('click', () => {
  //llamo a cargarNFT en sistema y despues en HTML
  cargarDatosSistema(sis);
  cargarDatosEnHTML(sis);  
})
