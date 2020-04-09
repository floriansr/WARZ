const allCharacters = [];

const first_page = document.getElementById('first_page');
const second_page = document.getElementById('second_page');
const third_page = document.getElementById('third_page');

const vs = document.getElementById('vs');

const profil = document.getElementById('profil');
const profil2 = document.getElementById('profil2');
const profil3 = document.getElementById('profil3');

const first = document.getElementById('first');
const second = document.getElementById('second');


// incluer les instances objets array avant le choix via eventlistener
// boucler addEventListener?


document.getElementById("first_character").addEventListener("click", function(event){
	
	// console.log(event);
	// console.log(i);

	allCharacters.push(i);
	first_page.setAttribute('hidden', '');
	second_page.removeAttribute('hidden');
	vs.innerHTML.value === "VS";
	profil.src="img/garruk.jpg";
	profil2.src="img/liliana.jpg";
	profil3.src="img/jace.jpg";
});

document.getElementById("second_character").addEventListener("click", function(event){

	// console.log(event);
	// console.log(z);

	allCharacters.push(z);
	first_page.setAttribute('hidden', '');
	second_page.removeAttribute('hidden');
	vs.innerHTML.value === "VS";
	profil.src="img/liliana.jpg";
	profil2.src="img/garruk.jpg";
	profil3.src="img/jace.jpg";
});


document.getElementById("third_character").addEventListener("click", function(event){

	// console.log(event);
	// console.log(s);

	allCharacters.push(s);
	first_page.setAttribute('hidden', '');
	second_page.removeAttribute('hidden');
	vs.innerHTML.value === "VS";
	profil.src="img/jace.jpg";
	profil2.src="img/garruk.jpg";
	profil3.src="img/liliana.jpg";
});


chooseOpponent = () => {

	let avatar1 = profil.attributes["0"].value;
	let avatar2 = profil2.attributes["0"].value;

	second_page.setAttribute('hidden', '');
	third_page.removeAttribute('hidden', '');
	
	first.src=avatar1;
	second.src=avatar2;

	start();
};



chooseOpponent2 = () => {

	let avatar1 = profil.attributes["0"].value;
	let avatar3 = profil3.attributes["0"].value;

	second_page.setAttribute('hidden', '');
	third_page.removeAttribute('hidden', '');

	first.src=avatar1;
	second.src=avatar3;

	start();
};