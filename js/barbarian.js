class Barbarian extends Character {
  constructor (name, healthPoint, manaEnergy, attack = 60, defence = 20) {
    super(name, healthPoint, manaEnergy, attack, defence);
      this.avatar = "img/garruk.jpg";
      this.message = "";
      this.message_def = "";
      this.state = "Alive";
  }


  	boostAttack = () => {
  		this.attack += 50;
  		this.manaEnergy -= 30;

  		// console.log(`${this.name} se concentre, consomme 30 manas, il lui reste ${this.manaEnergy} d'énergie.`);
    //  	console.log(`${this.name} gagne +50 d'attaque, elle passe à ${this.attack}.`);
  	}

	takeDamage = (damage) => {
    	this.healthPoint = this.healthPoint + this.defence - damage;
      let damage_get = damage - this.defence

      this.message_def = `I just lost ${damage_get} HP and have only ${this.healthPoint} left.`;
       if (this.healthPoint <= 0)
         this.state = "Dead";
    }

	dealDamage = (victim) => {
      victim.takeDamage(this.attack);
      this.message = `${this.name} inflige ${this.attack} points de dégâts à ${victim.name}.`;
	}
}

let i = new Barbarian('Garruk');
characters.push(i);

// i.status();
// i.takeDamage(40);
// i.boostAttack();
// i.dealDamage("Liliana");