'use strict';

var Translator = (function( ){

	var german = {
		"merry":"frohe", 
		"christmas":"weihnachten", 
		"and":"und",
		"happy":"gutes", 
		"new":"neues", 
		"year":"Jahr"
	}

	var germanKeys = Object.keys(german);

	 return {
	 	translateToGerman : function(array ){
	 		console.log('translating...', array, germanKeys)
			for( var i = 0; i < germanKeys.length; i++ ){
				if (array[array.length - 2] === germanKeys[i]) {
					console.log(germanKeys[i], german[germanKeys[i]])
					return german[germanKeys[i]];
				}
			}
		} 
	}
})(Translator);