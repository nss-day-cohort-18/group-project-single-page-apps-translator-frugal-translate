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
	var frenchValues = Object.values(french);
	 return {

	 	translateToFrench : function(array ){

			var outPut = array.slice(0, -1);

			for (var q = 0; q < outPut.length; q++ ){
				for (var i = 0; i < frenchKeys.length; i++){
					if (outPut[q] === frenchKeys[i] ){
						outPut[q] = frenchValues[i];
					}	
				}
			}
			outPut = outPut.join(" ");
			console.log("outPUT: ", outPut);
			return outPut;
		}
	}
})();
