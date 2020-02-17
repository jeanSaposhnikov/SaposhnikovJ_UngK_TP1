import {anim_mot} from "./anim_mot.mjs";
import {anim_slider} from "./anim_slider.mjs";
import {Horaire} from "./Horaire.mjs";
import {config_horaire} from "./config_horaire.mjs";

/*===============================================Animation Slider========================*/ 
let boutons=document.querySelectorAll(".slider a");
let elementsAnim=document.querySelectorAll(".slide p");
for(let i=0; i<boutons.length; i++) {
    boutons[i].addEventListener("click",function(){
        new anim_slider(elementsAnim[i]);
    })
}


/*===============================================Animation Mots=============================*/ 
let conteneurParent=document.querySelector("#zoneAnim");
let mots=["html","Css","Sass","Javascript","SCRUM"];

setInterval(function(){
const animMot=new anim_mot(conteneurParent,mots);
 },3000);




/* Horaire */
const elmHoraire = document.querySelector('.HoraireAnim');
let mon_Horaire = new Horaire(elmHoraire, config_horaire);

mon_Horaire.creerHoraire();


