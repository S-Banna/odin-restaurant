import {exported} from './home.js';
import {exported2} from './menu.js';
import {exported3} from './contact.js';

exported();

let homeBut = document.getElementById("homeBut");
homeBut.addEventListener("click", exported);

let menuBut = document.getElementById("menuBut");
menuBut.addEventListener("click", exported2);

let contBut = document.getElementById("contBut");
contBut.addEventListener("click", exported3);