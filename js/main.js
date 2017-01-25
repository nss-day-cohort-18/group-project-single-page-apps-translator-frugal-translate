//define interactive components

var inputField = document.getElementById('text');
var display = document.getElementById("display");
var userString = '';
var selectMenu = document.getElementById('language');
var selectedLang = selectMenu.selectedIndex;
var lang = selectMenu[selectedLang];


//add listener that logs a changed function

selectMenu.addEventListener("valuechange", function(){
	selectedLang = selectMenu.selectedIndex;
	lang = selectMenu[selectedLang];
});

//if option selection is changed while text in inside of inputField
//the input box will reset
selectMenu.onchange = function() {
	if (userString.length > 0) {
//		document.getElementById("text").reset();
		inputField.value = "";
		display.innerHTML = "";
		console.log(lang);
	}
}

//all translation happens live. We check each of the user's keystrokes
//and log them to a variable, then pass that string to an array
//called workingArray via '.split()'. if we have a complete word,
//signified by the user entering a space, we check which language
//the user wants us to translate their text into, then pass the
//array into our language picking function 'pickLanguage'.
//'pickLanguage()' then translates by calling Translator.translateTo{language}

inputField.addEventListener('keyup', function(event){


	userString = inputField.value.toLowerCase();
	console.log(userString);

	var workingArray = userString.split(" ");
	console.log(workingArray);

	//translate and print to screen
	if (workingArray.length > 1) {
		display.innerHTML = pickLanguage(workingArray);
	}
	if (event.keyCode === 8 && userString[userString.length -1] === (" ")) {
		console.log('backspace start: ', workingArray)
		workingArray.pop();
		display.innerHTML = pickLanguage(workingArray);						// pop removes a word from the working array
		console.log('backspace finish: ', workingArray)
	}
	if (workingArray.length === 1 && userString === '' ){
		workingArray = [];
		display.innerHTML = pickLanguage(workingArray);
	}
});

//this bad boy checks which language to translate into

function pickLanguage(array){

    if(document.getElementById('french').selected ){
	    return Translator.translateToFrench(array);
	}
	else if(document.getElementById('spanish').selected ){
		Translator.translateToSpanish(array);
	}
	else if (document.getElementById('german').selected ){
		return Translator.translateToGerman(array);
	}
	else
		return 'Please select a language';
}
