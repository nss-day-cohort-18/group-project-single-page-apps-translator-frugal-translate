'use strict';

var Translator = (function(Translator ){

	var french = {
		"merry":"joyeux", 
		"christmas":"Noël", 
		"and":"et",
		"happy":"bonne", 
		"new":"", 
		"year":"année"
	}

	var keys = Object.keys(french);
	
	 return Translator.translateToFrench = function(array ){
		
		for (key in keys) {
			if (array[array.length - 1] === key)
				return french[key];
		}
	}; 

	return Translator;

})(Translator);