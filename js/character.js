const characters = [];


class Character {
	constructor (name, healthPoint = 100, manaEnergy = 100, attack = 50, defence = 30) {
		this.healthPoint = healthPoint;
		this.manaEnergy = manaEnergy;
		this.attack = attack;
		this.defence = defence;
		this.name = name;
	}

	status = () => {
    // console.log(`Spécifique : je suis ${this.name}, un ${this.constructor.name}. J'ai ${this.healthPoint} HP et une barre d'énergie de ${this.manaEnergy}. ${this.attack} points d'attaques et ${this.defence} de défense`)
    }

}