'use strict';

var Translator = (function( ){

	var french = {
		"merry":"joyeux", 
		"christmas":"Noël", 
		"and":"et",
		"happy":"bonne", 
		"new":"", 
		"year":"année"
	}

	var frenchKeys = Object.keys(french);

	 return {
	 	translateToFrench : function(array ){
	 		console.log('translating...', array, frenchKeys)
			for( var i = 0; i < frenchKeys.length; i++ ){
				if (array[array.length - 2] === frenchKeys[i]) {
					console.log(frenchKeys[i], french[frenchKeys[i]])
					return french[frenchKeys[i]];
				}
			}
		} 
	}
})();

