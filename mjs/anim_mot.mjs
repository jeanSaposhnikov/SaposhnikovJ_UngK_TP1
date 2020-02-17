export class anim_mot {
    constructor(conteneurParent,mots) {
      this.conteneurParent = conteneurParent;
      this.mots=mots;
      this.creerMot();
    }
    
    creerMot() {
        let mot=document.createElement('p');
        mot.innerHTML=this.mots[Math.floor(Math.random()*Math.floor(this.mots.length))];
        this.conteneurParent.appendChild(mot);
        mot.classList.add('animMot');
    }
    
    
}