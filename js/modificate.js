const section = document.getElementById('section');
const capacities = document.getElementById('capacities');
const capacities1 = document.getElementById('capacities1');


id = ["one", "two", "three"];

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
		document.getElementById(x).onclick = () => eval(x)();
	});
};

one = () => {
	section.setAttribute('hidden', '');
	
	capacities.innerHTML += `

				 		<div class="col-lg-4">	
							<div class="block block-image-holder" style="height: auto">
								
								<div class="block-image coupure">
									<img src="${characters[0].avatar}">
								</div>

								<div class="block-info block-info-over block-info-over--style-1 block-info-over--dark-gradient overflow-visible">
									<div class="block-info-inner animate-translate--up">
										<div class="text-center">
											<a href="#" class="heading heading-4 strong-500 mb-0 c-white">${characters[0].name}</a>
											<span class="clearfix"></span>
											<small class="text-uppercase c-white">${characters[0].constructor.name}</small>
										</div>
										<div class="text-center">
											<small class="text-uppercase c-white">ATT : ${characters[0].attack}</small>
											<small class="text-uppercase c-white">DEF : ${characters[0].defence}</small>
											<small class="text-uppercase c-white">HP : ${characters[0].healthPoint}</small>
											<small class="text-uppercase c-white">MANA : ${characters[0].manaEnergy}</small>
										</div>
					                </div>
					  			</div>
				       		</div>
				        </div>
				      
				       	<div class="col-lg-8">
				       		<form style="margin-top: 5rem;">

								<input type="text" id="name" class="form-control" placeholder="Modify name">
			    				<small id="error_name" class="form-text text-muted" hidden>Please fill the name field.</small>
						    	
						    	<input type="text" id="attack" class="form-control" placeholder="Modify Attack">
			    				<small id="error_attack" class="form-text text-muted" hidden>Please fill the attack field (with decent positive number).</small>

								<input type="text" id="defence" class="form-control" placeholder="Modify Defence">
			    				<small id="error_defence" class="form-text text-muted" hidden>Please fill the defence field (with decent positive number).</small>

						    	<button type="submit" id="submit_formulaire" class="btn btn-primary btn-lg btn-block mb-5">Submit</button>
							</form>
				       	</div>`;

		document.getElementById("submit_formulaire").addEventListener("click", function(event){
			event.preventDefault();

			const name = document.getElementById('name');
			const error_name = document.getElementById('error_name')
			const error_attack = document.getElementById('error_attack')
			const error_defence = document.getElementById('error_defence')

			verification_name = () => {
				if (name.value !== ""){
					error_name.setAttribute('hidden','');
			    	return true;
			    }
				else {
					error_name.removeAttribute('hidden','');
				}
			}

			verification_attack = () => {
			
				if (attack.value !== "") {	
					if (!isNaN(attack.value)) {
						// nombre
							
							    // nombre positif					
								if (attack.value > 0) {
									error_attack.setAttribute('hidden','');
									return true;
								}

								// nombre negatif
								else {
								error_attack.removeAttribute('hidden','');
								}
					} 

					else {
					error_attack.removeAttribute('hidden','');
					}
				}

				else{
					console.log('pas de valeur défini')
					error_attack.removeAttribute('hidden','');
				}
			}

			verification_defence = () => {
			
				if (defence.value !== "") {	
					if (!isNaN(defence.value)) {
						// nombre
							
							    // nombre positif					
								if (defence.value > 0) {
									error_defence.setAttribute('hidden','');
									return true;
								}

								// nombre negatif
								else {
								error_defence.removeAttribute('hidden','');
								}
					} 

					else {
					error_defence.removeAttribute('hidden','');
					}
				}

				else{
					console.log('pas de valeur défini')
					error_defence.removeAttribute('hidden','');
				}
			}

			submit = () => {
				if (verification_name(),verification_attack(), verification_defence()) {
					i.name = name.value;
					i.attack = attack.value;
					i.defence = defence.value;

					capacities.setAttribute('hidden','');
					capacities1.removeAttribute('hidden','');

					capacities1.innerHTML += `

				 		<div class="col-lg-4">	
							<div class="block block-image-holder" style="height: auto">
								
								<div class="block-image coupure">
									<img src="${characters[0].avatar}">
								</div>

								<div class="block-info block-info-over block-info-over--style-1 block-info-over--dark-gradient overflow-visible">
									<div class="block-info-inner animate-translate--up">
										<div class="text-center">
											<a href="#" class="heading heading-4 strong-500 mb-0 c-white">${characters[0].name}</a>
											<span class="clearfix"></span>
											<small class="text-uppercase c-white">${characters[0].constructor.name}</small>
										</div>
										<div class="text-center">
											<small class="text-uppercase c-white">ATT : ${characters[0].attack}</small>
											<small class="text-uppercase c-white">DEF : ${characters[0].defence}</small>
											<small class="text-uppercase c-white">HP : ${characters[0].healthPoint}</small>
											<small class="text-uppercase c-white">MANA : ${characters[0].manaEnergy}</small>
										</div>
					                </div>
					  			</div>
				       		</div>
				        </div>
				      
				       	<div class="col-lg-8">
				       		<form style="margin-top: 5rem;">

								<input type="text" id="name" class="form-control" placeholder="Modify name">
			    				<small id="error_name" class="form-text text-muted" hidden>Please fill the name field.</small>
						    	
						    	<input type="text" id="attack" class="form-control" placeholder="Modify Attack">
			    				<small id="error_attack" class="form-text text-muted" hidden>Please fill the attack field (with decent positive number).</small>

								<input type="text" id="defence" class="form-control" placeholder="Modify Defence">
			    				<small id="error_defence" class="form-text text-muted" hidden>Please fill the defence field (with decent positive number).</small>

						    	<button type="submit" id="submit_formulaire" class="btn btn-primary btn-lg btn-block mb-5">Submit</button>
							</form>
				       	</div>`;
				}
			}
			submit();
		});
}

two = () => {
	section.setAttribute('hidden', '');
	
	capacities.innerHTML += `

				 		<div class="col-lg-4">	
							<div class="block block-image-holder" style="height: auto">
								
								<div class="block-image coupure">
									<img src="${characters[1].avatar}">
								</div>

								<div class="block-info block-info-over block-info-over--style-1 block-info-over--dark-gradient overflow-visible">
									<div class="block-info-inner animate-translate--up">
										<div class="text-center">
											<a href="#" class="heading heading-4 strong-500 mb-0 c-white">${characters[1].name}</a>
											<span class="clearfix"></span>
											<small class="text-uppercase c-white">${characters[1].constructor.name}</small>
										</div>
										<div class="text-center">
											<small class="text-uppercase c-white">ATT : ${characters[1].attack}</small>
											<small class="text-uppercase c-white">DEF : ${characters[1].defence}</small>
											<small class="text-uppercase c-white">HP : ${characters[1].healthPoint}</small>
											<small class="text-uppercase c-white">MANA : ${characters[1].manaEnergy}</small>
										</div>
					                </div>
					  			</div>
				       		</div>
				        </div>
				      
				       	<div class="col-lg-8">
				       		<form style="margin-top: 5rem;">

								<input type="text" id="name" class="form-control" placeholder="Modify name">
			    				<small id="error_name" class="form-text text-muted" hidden>Please fill the name field.</small>
						    	
						    	<input type="text" id="attack" class="form-control" placeholder="Modify Attack">
			    				<small id="error_attack" class="form-text text-muted" hidden>Please fill the attack field (with decent positive number).</small>

								<input type="text" id="defence" class="form-control" placeholder="Modify Defence">
			    				<small id="error_defence" class="form-text text-muted" hidden>Please fill the defence field (with decent positive number).</small>

						    	<button type="submit" id="submit_formulaire" class="btn btn-primary btn-lg btn-block mb-5">Submit</button>
							</form>
				       	</div>`;

		document.getElementById("submit_formulaire").addEventListener("click", function(event){
			event.preventDefault();

			const name = document.getElementById('name');
			const error_name = document.getElementById('error_name')
			const error_attack = document.getElementById('error_attack')
			const error_defence = document.getElementById('error_defence')

			verification_name = () => {
				if (name.value !== ""){
					error_name.setAttribute('hidden','');
			    	return true;
			    }
				else {
					error_name.removeAttribute('hidden','');
				}
			}

			verification_attack = () => {
			
				if (attack.value !== "") {	
					if (!isNaN(attack.value)) {
						// nombre
							
							    // nombre positif					
								if (attack.value > 0) {
									error_attack.setAttribute('hidden','');
									return true;
								}

								// nombre negatif
								else {
								error_attack.removeAttribute('hidden','');
								}
					} 

					else {
					error_attack.removeAttribute('hidden','');
					}
				}

				else{
					console.log('pas de valeur défini')
					error_attack.removeAttribute('hidden','');
				}
			}

			verification_defence = () => {
			
				if (defence.value !== "") {	
					if (!isNaN(defence.value)) {
						// nombre
							
							    // nombre positif					
								if (defence.value > 0) {
									error_defence.setAttribute('hidden','');
									return true;
								}

								// nombre negatif
								else {
								error_defence.removeAttribute('hidden','');
								}
					} 

					else {
					error_defence.removeAttribute('hidden','');
					}
				}

				else {
					console.log('pas de valeur défini')
					error_defence.removeAttribute('hidden','');
				}
			}

			submit = () => {
				if (verification_name(),verification_attack(), verification_defence()) {
					s.name = name.value;
					s.attack = attack.value;
					s.defence = defence.value;

					capacities.setAttribute('hidden','');
					capacities1.removeAttribute('hidden','');

					capacities1.innerHTML += `

				 		<div class="col-lg-4">	
							<div class="block block-image-holder" style="height: auto">
								
								<div class="block-image coupure">
									<img src="${characters[1].avatar}">
								</div>

								<div class="block-info block-info-over block-info-over--style-1 block-info-over--dark-gradient overflow-visible">
									<div class="block-info-inner animate-translate--up">
										<div class="text-center">
											<a href="#" class="heading heading-4 strong-500 mb-0 c-white">${characters[1].name}</a>
											<span class="clearfix"></span>
											<small class="text-uppercase c-white">${characters[1].constructor.name}</small>
										</div>
										<div class="text-center">
											<small class="text-uppercase c-white">ATT : ${characters[1].attack}</small>
											<small class="text-uppercase c-white">DEF : ${characters[1].defence}</small>
											<small class="text-uppercase c-white">HP : ${characters[1].healthPoint}</small>
											<small class="text-uppercase c-white">MANA : ${characters[1].manaEnergy}</small>
										</div>
					                </div>
					  			</div>
				       		</div>
				        </div>
				      
				       	<div class="col-lg-8">
				       		<form style="margin-top: 5rem;">

								<input type="text" id="name" class="form-control" placeholder="Modify name">
			    				<small id="error_name" class="form-text text-muted" hidden>Please fill the name field.</small>
						    	
						    	<input type="text" id="attack" class="form-control" placeholder="Modify Attack">
			    				<small id="error_attack" class="form-text text-muted" hidden>Please fill the attack field (with decent positive number).</small>

								<input type="text" id="defence" class="form-control" placeholder="Modify Defence">
			    				<small id="error_defence" class="form-text text-muted" hidden>Please fill the defence field (with decent positive number).</small>

						    	<button type="submit" id="submit_formulaire" class="btn btn-primary btn-lg btn-block mb-5">Submit</button>
							</form>
				       	</div>`;
				}
			}

			submit();
		});
}

three = () => {
	section.setAttribute('hidden', '');
	
	capacities.innerHTML += `

				 		<div class="col-lg-4">	
							<div class="block block-image-holder" style="height: auto">
								
								<div class="block-image coupure">
									<img src="${characters[2].avatar}">
								</div>

								<div class="block-info block-info-over block-info-over--style-1 block-info-over--dark-gradient overflow-visible">
									<div class="block-info-inner animate-translate--up">
										<div class="text-center">
											<a href="#" class="heading heading-4 strong-500 mb-0 c-white">${characters[2].name}</a>
											<span class="clearfix"></span>
											<small class="text-uppercase c-white">${characters[2].constructor.name}</small>
										</div>
										<div class="text-center">
											<small class="text-uppercase c-white">ATT : ${characters[2].attack}</small>
											<small class="text-uppercase c-white">DEF : ${characters[2].defence}</small>
											<small class="text-uppercase c-white">HP : ${characters[2].healthPoint}</small>
											<small class="text-uppercase c-white">MANA : ${characters[2].manaEnergy}</small>
										</div>
					                </div>
					  			</div>
				       		</div>
				        </div>
				      
				       	<div class="col-lg-8">
				       		<form style="margin-top: 5rem;">

								<input type="text" id="name" class="form-control" placeholder="Modify name">
			    				<small id="error_name" class="form-text text-muted" hidden>Please fill the name field.</small>
						    	
						    	<input type="text" id="attack" class="form-control" placeholder="Modify Attack">
			    				<small id="error_attack" class="form-text text-muted" hidden>Please fill the attack field (with decent positive number).</small>

								<input type="text" id="defence" class="form-control" placeholder="Modify Defence">
			    				<small id="error_defence" class="form-text text-muted" hidden>Please fill the defence field (with decent positive number).</small>

						    	<button type="submit" id="submit_formulaire" class="btn btn-primary btn-lg btn-block mb-5">Submit</button>
							</form>
				       	</div>`;

		document.getElementById("submit_formulaire").addEventListener("click", function(event){
			event.preventDefault();

			const name = document.getElementById('name');
			const error_name = document.getElementById('error_name')
			const error_attack = document.getElementById('error_attack')
			const error_defence = document.getElementById('error_defence')

			verification_name = () => {
				if (name.value !== ""){
					error_name.setAttribute('hidden','');
			    	return true;
			    }
				else {
					error_name.removeAttribute('hidden','');
				}
			}

			verification_attack = () => {
			
				if (attack.value !== "") {	
					if (!isNaN(attack.value)) {
						// nombre
							
							    // nombre positif					
								if (attack.value > 0) {
									error_attack.setAttribute('hidden','');
									return true;
								}

								// nombre negatif
								else {
								error_attack.removeAttribute('hidden','');
								}
					} 

					else {
					error_attack.removeAttribute('hidden','');
					}
				}

				else{
					console.log('pas de valeur défini')
					error_attack.removeAttribute('hidden','');
				}
			}

			verification_defence = () => {
			
				if (defence.value !== "") {	
					if (!isNaN(defence.value)) {
						// nombre
							
							    // nombre positif					
								if (defence.value > 0) {
									error_defence.setAttribute('hidden','');
									return true;
								}

								// nombre negatif
								else {
								error_defence.removeAttribute('hidden','');
								}
					} 

					else {
					error_defence.removeAttribute('hidden','');
					}
				}

				else{
					console.log('pas de valeur défini')
					error_defence.removeAttribute('hidden','');
				}
			}

			submit = () => {
				if (verification_name(),verification_attack(), verification_defence()) {
					z.name = name.value;
					z.attack = attack.value;
					z.defence = defence.value;

					capacities.setAttribute('hidden','');
					capacities1.removeAttribute('hidden','');

					capacities1.innerHTML += `

				 		<div class="col-lg-4">	
							<div class="block block-image-holder" style="height: auto">
								
								<div class="block-image coupure">
									<img src="${characters[2].avatar}">
								</div>

								<div class="block-info block-info-over block-info-over--style-1 block-info-over--dark-gradient overflow-visible">
									<div class="block-info-inner animate-translate--up">
										<div class="text-center">
											<a href="#" class="heading heading-4 strong-500 mb-0 c-white">${characters[2].name}</a>
											<span class="clearfix"></span>
											<small class="text-uppercase c-white">${characters[2].constructor.name}</small>
										</div>
										<div class="text-center">
											<small class="text-uppercase c-white">ATT : ${characters[2].attack}</small>
											<small class="text-uppercase c-white">DEF : ${characters[2].defence}</small>
											<small class="text-uppercase c-white">HP : ${characters[2].healthPoint}</small>
											<small class="text-uppercase c-white">MANA : ${characters[2].manaEnergy}</small>
										</div>
					                </div>
					  			</div>
				       		</div>
				        </div>
				      
				       	<div class="col-lg-8">
				       		<form style="margin-top: 5rem;">

								<input type="text" id="name" class="form-control" placeholder="Modify name">
			    				<small id="error_name" class="form-text text-muted" hidden>Please fill the name field.</small>
						    	
						    	<input type="text" id="attack" class="form-control" placeholder="Modify Attack">
			    				<small id="error_attack" class="form-text text-muted" hidden>Please fill the attack field (with decent positive number).</small>

								<input type="text" id="defence" class="form-control" placeholder="Modify Defence">
			    				<small id="error_defence" class="form-text text-muted" hidden>Please fill the defence field (with decent positive number).</small>

						    	<button type="submit" id="submit_formulaire" class="btn btn-primary btn-lg btn-block mb-5">Submit</button>
							</form>
				       	</div>`;
				}
			}

			submit();
		});
}

document.getElementById("modificate").addEventListener('click', modificateCharacter);