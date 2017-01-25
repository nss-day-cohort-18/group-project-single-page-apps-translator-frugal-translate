'use strict';

var Translator = (function( ){

	var spanish = {
		"merry":"frohe", 
		"christmas":"weihnachten", 
		"and":"und",
		"happy":"gutes", 
		"new":"neues", 
		"year":"Jahr"
	}

	var spanishKeys = Object.keys(spanish);
	var spanishValues = Object.values(spanish);
	
	 return {
	 	translateToGerman : function(array ){

			var outPut = array.slice(0, -1);

			// this loop controls which input word we are comparing to our dictionary
			for (var q = 0; q < outPut.length; q++ ){
				//this loop compares the input word to all words in our dictionary
				for (var i = 0; i < spanishKeys.length; i++){
					if (outPut[q] === spanishKeys[i] ){
						outPut[q] = spanishValues[i];
					}
				}
			}
			outPut = outPut.join(" ");
			console.log("outPUT: ", outPut);
			return outPut;
		}
	}
})();
