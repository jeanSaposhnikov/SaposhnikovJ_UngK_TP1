export class anim_slider {
    constructor(element,couleurs) {
        this.element=element;
        this.couleurs=couleurs;
        this.anim();
    }

    anim() {
        this.element.style.opacity=1;
        this.element.style.color=this.couleurs[Math.floor(Math.random()*Math.floor(this.couleurs.length))];
    }
}