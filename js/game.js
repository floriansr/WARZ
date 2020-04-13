game = () => {

    const game = document.getElementById("game");

    game.innerHTML += `

		<section class="slice bg-black">
			<div class="container">
		 						<div class="row cols-xs-space cols-sm-space cols-md-space">

		                                <div class="col-lg-4">
		                                    <div class="block block-image-holder" style="height: auto">
		                                        <div class="block-image coupure">
		                                                <img src="${allCharacters[0].avatar}">
		                                        </div>
		                                        <div class="block-info block-info-over block-info-over--style-1 block-info-over--dark-gradient overflow-visible">
		                                            <div class="block-info-inner animate-translate--up">
		                                                <div class="text-center">
		                                                    <a href="#" class="heading heading-4 strong-500 mb-0 c-white">${allCharacters[0].name}</a>
		                                                    <span class="clearfix"></span>
		                                                    <small class="text-uppercase c-white">${allCharacters[0].constructor.name}</small>
		                                                </div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>

		                                <div class= "col-lg-4">

			                                    <button type="button" id="first_attack_second" class="btn btn-danger">Attack</button>
			                                   	<button type="button" id="second_attack_first" class="btn btn-danger">Attack</button>

		                                    	<div id="message"></div>
		                                    	<div id="message_def"></div>

		                                </div>


		                                <div class="col-lg-4">
		                                    <div class="block block-image-holder">
		                                        <div class="block-image coupure">
		                                                <img src="${allCharacters[1].avatar}">
		                                        </div>
		                                        <div class="block-info block-info-over block-info-over--style-1 block-info-over--dark-gradient overflow-visible">
		                                            <div class="block-info-inner py-4 animate-translate--up">
		                                                <div class="text-center">
		                                                    <a class="heading heading-4 strong-500 mb-0 c-white">${allCharacters[1].name}</a>
		                                                    <span class="clearfix"></span>
		                                                    <small class="text-uppercase c-white">${allCharacters[1].constructor.name}</small>
		                                                </div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                        </div
		   </div>
		</section>`;
	
	document.getElementById("first_attack_second").onclick = first_attack_second;
	document.getElementById("second_attack_first").onclick = second_attack_first;

};


const first_attack_second = () => {
			
			allCharacters[0].dealDamage(allCharacters[1]);

			    document.getElementById("message").innerHTML = `
				    <div>

					    <p> ${allCharacters[0].name} says :</p> 
					    <p> ${allCharacters[0].message}</p> 
					    <p> ${allCharacters[1].name} have still ${allCharacters[1].healthPoint} HP ! <p>

				    </div>`;
			
				document.getElementById("message_def").innerHTML = `
				    <div>
					    <p> ${allCharacters[1].name} says :</p> 
					    <p> ${allCharacters[1].message_def}</p>
				    </div>`;
};



const second_attack_first = () => {
			
			allCharacters[1].dealDamage(allCharacters[0]);

			    document.getElementById("message").innerHTML = `
				    <div>
					    <p> ${allCharacters[1].name} says :</p> 
					    <p> ${allCharacters[1].message}</p> 
					    <p> ${allCharacters[0].name} have still ${allCharacters[0].healthPoint} HP ! </p>
				    </div>`;
			
				document.getElementById("message_def").innerHTML = `
					<div>
					    <p> ${allCharacters[0].name} says :</p> 
					    <p> ${allCharacters[0].message_def}</p>
				    </div>`;
};