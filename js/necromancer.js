class Necromancer extends Character {
  constructor (name, healthPoint, manaEnergy, attack = 50, defence = 35) {
    super(name, healthPoint, manaEnergy, attack, defence);
        this.avatar = "img/liliana.jpg";
  }


  	boost = () => {
  		this.attack += 45;
      this.healthPoint -=15;
  		this.manaEnergy -= 30;

  		// console.log(`${this.name} se concentre, consomme 30 manas, il lui reste ${this.manaEnergy} d'énergie.`);
    //  	console.log(`${this.name} gagne +45 d'attaque, elle passe à ${this.attack}.`);
    //   console.log(`${this.name} perd -15 points de vie, elle passe à ${this.healthPoint}.`);

  	}

	takeDamage = (damage) => {
    	this.healthPoint = this.healthPoint + this.defence - damage;
    	// console.log(`${this.name} détient ${this.healthPoint} points de vie, après s'être pris une attaque vicieuse de ${damage}.`);
    }

	dealDamage = (victim) => {
		// console.log(`${this.name} inflige ${this.attack} points de dégâts à ${victim}`);
	}
}

let z = new Necromancer('Liliana');

z.status();
z.takeDamage(40);
z.boost();
z.dealDamage("Jace");