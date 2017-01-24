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

	Translator.translateToFrench = function(topping ){
		return for(word in french ){
			french[word]
		}
	};

	return Translator;

})(Translator);