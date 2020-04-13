class Magus extends Character {
  constructor (name, healthPoint, manaEnergy, attack = 40, defence = 30) {
    super(name, healthPoint, manaEnergy, attack, defence);
      this.avatar = "img/jace.jpg";
      this.message = "";
      this.message_def = "";
      this.state = "Alive";
  }


  	boostHealth = () => {
  	  this.healthPoint += 50;
      this.manaEnergy -= 30;
  		// console.log(`${this.name} se concentre, consomme 30 manas, il lui reste ${this.manaEnergy} d'énergie.`);
    //   console.log(`${this.name} gagne +50 points de vie, elle passe à ${this.healthPoint}.`);
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

let s = new Magus('Jace');
characters.push(s);

// s.status();
// s.boostHealth();
// s.takeDamage(60);
// s.dealDamage("Garruk");