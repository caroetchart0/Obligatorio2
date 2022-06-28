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
cargarDatosSistema(sis);


const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const email_field = new MDCTextField(document.querySelector('#email_field'));
const password_field = new MDCTextField(document.querySelector('#password_field'));

const loginButton = new MDCRipple(document.getElementById('loginButton'));
const botonExplorar = new MDCRipple(document.getElementById('exploreTab'));
const botonCrear = new MDCRipple(document.getElementById('createTab'));
const botonPerfil = new MDCRipple(document.getElementById('profileTab'));
const botonAyuda = new MDCRipple(document.getElementById('helpTab'));
const botonContacto = new MDCRipple(document.getElementById('supportTab'));
const botonLogout = new MDCRipple(document.getElementById('logoutTab'));


const paginalogin = document.querySelector('#login');

const main_content = document.getElementById('main_content');


botonLogout.listen('click', ()=>{
  console.log('click')
  main_content.classList.add('ocultar');
  document.getElementById("NFT").classList.add("ocultar")
  paginalogin.classList.remove('ocultar');
  sis.usuarioActivo = undefined;
})

loginButton.listen('click', ()=>{
  console.log('click')
  var email = email_field.value;
  var contra = password_field.value;
  let usuarios = sis.darUsuarios();
  let login = false;
  console.log(email, contra)
  for(let i=0; i<usuarios.length;i++){
    if(usuarios[i].email == email && usuarios[i].contrasenia == contra){
      sis.usuarioActivo = usuarios[i];
      main_content.classList.remove('ocultar');
      document.getElementById("NFT").classList.remove("ocultar")
      botonExplorar.emit('click')
      login = true;
    }
  }
  if(!login){
    alert('USUARIO INCORRECTO');
  }
  
})

botonExplorar.listen('click', () => {
  //llamo a cargarNFT en sistema y despues en HTML
  main_content.classList.remove('ocultar');
  paginalogin.classList.add('ocultar');
  cargarDatosEnHTML(sis);  
})

