const section = document.getElementById('section');
id = ["salut", "jean", "casserole"];


modificateCharacter = () => {

	event.preventDefault();

	const modificate_character = document.getElementById("modificate_character");
	first_page.setAttribute('hidden', '');

	for (let p = 0; p < characters.length; p++){
	    modificate_character.innerHTML += `

				 		<div class="col-lg-4" id="${id[p]}">	
							<div class="block block-image-holder" style="height: auto">
								
								<div class="block-image coupure">
									<img src="${characters[p].avatar}">
								</div>

								<div class="block-info block-info-over block-info-over--style-1 block-info-over--dark-gradient overflow-visible">
									<div class="block-info-inner animate-translate--up">
										<div class="text-center">
											<a href="#" class="heading heading-4 strong-500 mb-0 c-white">${characters[p].name}</a>
											<span class="clearfix"></span>
											<small class="text-uppercase c-white">${characters[p].constructor.name}</small>
										</div>
					                </div>
					  			</div>
				       		</div>
				        </div>`;
	};

	id.forEach((x) => {
		console.log(document.getElementById(x));

		document.getElementById(x).onclick = function() {
             console.log(x);
        }
	});
};

document.getElementById("modificate").addEventListener('click', modificateCharacter);


salut = () => {
	section.setAttribute('hidden', '');
}

jean = () => {
	section.setAttribute('hidden', '');
}

casserole = () => {
	section.setAttribute('hidden', '');
}