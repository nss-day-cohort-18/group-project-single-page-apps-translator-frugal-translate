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
	 	translateToFrench : function(array){
	 		console.log('translating...', array, frenchKeys)
			var outPut = array.slice(0, -1);

			for (var q = 0; i < outPut.length[-1]; i++) {
					outPut[q] = frenchKeys[i];



					for (var i = 0; i < frenchKeys.length; i++){
						if (outPut[q] === frenchKeys[i]) {
							outPut[q] = french[frenchKeys[i]];
					}
				//	console.log(frenchKeys[i], french[frenchKeys[i]])
				//	console.log("return: ", outPut)

						outPut = outPut.join(" ");
				console.log("outPUT: ", outPut);
				}
					return outPut
				}
			}
		}
})();
