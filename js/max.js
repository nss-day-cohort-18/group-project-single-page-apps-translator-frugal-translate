'use strict';
console.log("honzit");
var Translator = (function(originalTranslator){

	var german = {
		"merry":"frohe",
		"christmas":"weihnachten",
		"and":"und",
		"happy":"gutes",
		"new":"neues",
		"year":"Jahr",
		"holiday":"Festtag",
		"blessed":"gesegnetes",
		"best": "alles",
		"wishes":"Gute",
		"the":"das",
		"spice":"Gewürz",
		"must":"muss",
		"flow":"fließen",
		"don't":"Keine",
		"panic":"Panik",

	}

	var germanKeys = Object.keys(german);
	var germanValues = Object.values(german);

 	originalTranslator.translateToGerman = function(array){

		var outPut = array.slice(0, -1);

		// this loop controls which input word we are comparing to our dictionary
		for (var q = 0; q < outPut.length; q++ ){
			//this loop compares the input word to all words in our dictionary
			for (var i = 0; i < germanKeys.length; i++){
				if (outPut[q] === germanKeys[i] ){
					outPut[q] = germanValues[i];
				}
			}
		}
		outPut = outPut.join(" ");
		console.log("outPUT: ", outPut);
		return outPut;
	}
	return originalTranslator;
})(Translator);
