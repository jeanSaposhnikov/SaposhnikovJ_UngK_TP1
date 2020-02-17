import {anim_mot} from "./anim_mot.mjs";
import {Horaire} from "./Horaire.mjs";
import {config_horaire} from "./config_horaire.mjs";

/* Zone animée */
let conteneurParent=document.querySelector("#zoneAnim");
let mots=["html","Css","Sass","Javascript","SCRUM"];
// setInterval(function(){
//     const animMot=new anim_mot(conteneurParent,mots);
// },3000);

/* Horaire */
const elmHoraire = document.querySelector('.HoraireAnim');
let mon_Horaire = new Horaire(elmHoraire, config_horaire);

mon_Horaire.creerHoraire();


