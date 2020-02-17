  export class Horaire {
    constructor(elmMonHoraire, config_horaire){
        this.elmMonHoraire = elmMonHoraire;
        this.para_jour = config_horaire.para_jour;
        this.para_heure = config_horaire.para_heure;
    }

    creerHoraire() {
        let elmHoraire = document.createElement("div");
        elmHoraire.classList.add("horaire")
        let i=1;

        for(let unJour of this.para_jour) {
            let elmJours = document.createElement('div');

            elmJours.id = 'jour-' + i;
            i++;
            elmHoraire.appendChild(elmJours);

            let p = document.createElement('p');
            p.innerHTML = unJour.p;
            p.classList.add('animMot');
            elmJours.appendChild(p);
        }

        for(let uneHeure of this.para_heure) {
            let elmHeures = document.createElement('div');

            elmHeures.id = 'heure-' + i;
            i++;
            elmHoraire.appendChild(elmHeures);

            let p = document.createElement('p');
            p.innerHTML = uneHeure.p;
            p.classList.add('animMot');
            elmHeures.appendChild(p);
        }

        this.elmMonHoraire.appendChild(elmHoraire);
    }
}