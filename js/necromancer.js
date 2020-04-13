class Necromancer extends Character {
  constructor (name, healthPoint, manaEnergy, attack = 50, defence = 35) {
    super(name, healthPoint, manaEnergy, attack, defence);
        this.avatar = "img/liliana.jpg";
        this.message = "";
        this.message_def = "";
        this.state = "Alive";
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

let z = new Necromancer('Liliana');
characters.push(z);


// z.status();
// z.takeDamage(40);
// z.boost();
// z.dealDamage("Jace");