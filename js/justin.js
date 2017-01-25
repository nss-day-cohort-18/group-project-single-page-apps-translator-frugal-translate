'use strict';

var Translator = (function( ){

	var french = {
		"merry":"Meey",
		"christmas":"Navidad",
		"and":"y",
		"happy":"contento",
		"new":"nuevo",
		"year":"año"
	}

	var spanishKeys = Object.keys(spanish);

	 return {
	 	translateToSpanish : function(array){
	 		console.log('translating...', array, frenchKeys)
			for( var i = 0; i < spanishKeys.length; i++ ){
				if (array[array.length - 2] === spanishKeys[i]) {
					console.log(spanishKeys[i], spanish[spanishKeys[i]])
					return spanish[spanishKeys[i]];
				}
			}
		}
	}
})();
