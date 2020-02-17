export class anim_slider {
    constructor(element) {
        this.element=element;
        this.anim();
    }

    anim() {
        this.element.style.opacity=1;
        console.log(this.element);
    }
}