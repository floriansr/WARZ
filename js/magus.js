class Magus extends Character {
  constructor (name, healthPoint, manaEnergy, attack = 40, defence = 30) {
    super(name, healthPoint, manaEnergy, attack, defence);
  }


  	boostHealth = () => {
  	  this.healthPoint += 50;
      this.manaEnergy -= 30;
  		// console.log(`${this.name} se concentre, consomme 30 manas, il lui reste ${this.manaEnergy} d'énergie.`);
    //   console.log(`${this.name} gagne +50 points de vie, elle passe à ${this.healthPoint}.`);
  	}

	takeDamage = (damage) => {
    	this.healthPoint = this.healthPoint + this.defence - damage;
    	// console.log(`${this.name} détient ${this.healthPoint} points de vie, après s'être pris une attaque vicieuse de ${damage}.`);
    }

	dealDamage = (victim) => {
		// console.log(`${this.name} inflige ${this.attack} points de dégâts à ${victim}`);
	}
}

let s = new Magus('Jace');

s.status();
s.boostHealth();
s.takeDamage(60);
s.dealDamage("Garruk");