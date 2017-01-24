


var inputField = document.getElementById('text');
var display = document.getElementById("display");
var userString = '';
var selected = document.getElementById('language');
var lang = selected.selectedIndex;

selected.addEventListener("valuechange", function(){
	lang = document.getElementById('language').value;

})
inputField.addEventListener('keyup', function(){
	
	userString = inputField.value;
	var workingArray = userString.split(" ");
	console.log(workingArray);

	if (workingArray.length > 1) {
		Translator.
	}
	display.innerHTML = userString;
});
