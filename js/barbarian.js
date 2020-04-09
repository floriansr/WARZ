class Barbarian extends Character {
  constructor (name, healthPoint, manaEnergy, attack = 60, defence = 20) {
    super(name, healthPoint, manaEnergy, attack, defence);
      this.avatar = "img/garruk.jpg";
  }


  	boostAttack = () => {
  		this.attack += 50;
  		this.manaEnergy -= 30;

  		// console.log(`${this.name} se concentre, consomme 30 manas, il lui reste ${this.manaEnergy} d'énergie.`);
    //  	console.log(`${this.name} gagne +50 d'attaque, elle passe à ${this.attack}.`);
  	}

	takeDamage = (damage) => {
    	this.healthPoint = this.healthPoint + this.defence - damage;
    	// console.log(`${this.name} détient ${this.healthPoint} points de vie, après s'être pris une attaque vicieuse de ${damage}.`);
    }

	dealDamage = (victim) => {
		// console.log(`${this.name} inflige ${this.attack} points de dégâts à ${victim}`);
	}
}

let i = new Barbarian('Garruk');

i.status();
i.takeDamage(40);
i.boostAttack();
i.dealDamage("Liliana");