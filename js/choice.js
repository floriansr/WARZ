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

const avatar2 = profil2.attributes["0"].value;



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

	const avatar1 = profil.attributes["0"].value;
	const avatar2 = profil2.attributes["0"].value;

	second_page.setAttribute('hidden', '');
	third_page.removeAttribute('hidden', '');
	
	first.src=avatar1;
	second.src=avatar2;

	// console.log(avatar2);
	// 	console.log(i.avatar);
	// 		console.log(z.avatar);
	// 			console.log(s.avatar);
	
	selectOpponent();
	start();
};

chooseOpponent2 = () => {

	const avatar1 = profil.attributes["0"].value;
	const avatar3 = profil3.attributes["0"].value;

	second_page.setAttribute('hidden', '');
	third_page.removeAttribute('hidden', '');

	first.src=avatar1;
	second.src=avatar3;

	// console.log(avatar3);
	// 	console.log(i.avatar);
	// 		console.log(z.avatar);
	// 			console.log(s.avatar);

	selectOpponent2();
	start();
};


selectOpponent = () => {

	const avatar2 = profil2.attributes["0"].value;

	if (avatar2 == i.avatar)
		return allCharacters.push(i)
	if (avatar2 == z.avatar)
		return allCharacters.push(z)
	if (avatar2 == s.avatar)
		return allCharacters.push(s)

	console.log(allCharacters);
};

selectOpponent2 = () => {

	const avatar3 = profil3.attributes["0"].value;

	if (avatar3 == i.avatar)
		return allCharacters.push(i)
	if (avatar3 == z.avatar)
		return allCharacters.push(z)
	if (avatar3 == s.avatar)
		return allCharacters.push(s)

	console.log(allCharacters);
};