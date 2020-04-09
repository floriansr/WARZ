let counter = 10;
let intervalId = null;

	finish = () => {
	  clearInterval(intervalId);
	  document.getElementById("bip").innerHTML = "Game on!";
	  third_page.setAttribute('hidden', '');
	};

	bip = () => {
	    counter--;
	    if(counter == 0) finish();
	    else {	
	        document.getElementById("bip").innerHTML = counter + " secondes restantes";
	    }	
	};

	start = () => {
	  intervalId = setInterval(bip, 1000);
	};