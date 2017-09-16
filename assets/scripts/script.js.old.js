

	var wordDatabase = ["owl", "couch", "mirror", "architect", "database", "Internet", "bandwagon", "household", 
	"beekeeper", "frazzled", "soccer", "zipper", "xylophone", "mathmatics", "classes", "zigzagging", "peekaboo"] 

	var randomSelectedWord = wordDatabase[Math.floor(Math.random() * 10)];

	var wordArray = Array.from(randomSelectedWord);

	var wordArrayU = Array.from(randomSelectedWord);

	var uLetter = "";

	var numLettersV = "";

	var wordV = "";

	var wordJ = "";

	var g4 = "";

	var g5 = "";

	var winner = "You Win!"

	var gWinsV = 0;

	var gLossesV = 0;

	var guessRemain = 10;

	var pCorrect = [];

	var iCorrect = [];

	var counter = 0;

	var invCounter = "";

	var badGuessDB = [];

	var lettersSelectedAll = [];

function gameStartF() {
	document.getElementById("gHere2").value = "";
	randomSelectedWord = wordDatabase[Math.floor(Math.random() * 10)];
	wordArray = Array.from(randomSelectedWord);
	wordArrayU = Array.from(randomSelectedWord);
	document.getElementById("comment").innerHTML = "Come Play The Gallows!";
	document.getElementById("winsUpdate").innerHTML = gWinsV;
	document.getElementById("gHere2").value = "";
	document.getElementById("numGuesses").innerHTML = guessRemain;
	document.getElementById("WORD").innerHTML = "_ _ _ _ _";
	document.getElementById("gHere2").disabled = false;
	guessRemain = 10;
		



	for (i = 0; i < wordArrayU.length; ++i) {
 		wordArrayU[i] = '_ ';	
	}
		
	g4 = wordArrayU.join("");
	document.getElementById("WORD").innerHTML = g4;
	

	numLettersV = wordArray.length;

}

	

function myFunction(event) {
    uLetter = event.key;
    for (i = 0; i < wordArray.length; i++) {
		if (wordArray[i] == uLetter) {
			wordArrayU[i] = uLetter;
			pCorrect.push(uLetter);
		} 


	} 


	
	g4 = wordArrayU.join("");
	document.getElementById("WORD").innerHTML = g4;
	gWinsF();
	
	//lettersSelectedAll.push(uLetter);
	
	//function checkLettersF {
	//	var a = document.getElementById()


	gCounterF()


	gLossesF()
	

	
}


function gWinsF() {
		
	if (g4 == randomSelectedWord) {
		winner = "You Win!";
		++gWinsV 
		document.getElementById("comment").innerHTML = winner;
		document.getElementById("winsUpdate").innerHTML = gWinsV;
		document.getElementById("gHere2").value = "";
		document.getElementById("numGuesses").innerHTML = guessRemain;
		guessRemain = 10;
		document.getElementById("WORD").innerHTML = "_ _ _ _ _";
		document.getElementById("gHere2").disabled = true;
		randomSelectedWord = wordDatabase[Math.floor(Math.random() * 10)];
	} 
}



function gCounterF() {
			if (uLetter != pCorrect.pop()) {
				--guessRemain
				document.getElementById("numGuesses").innerHTML = guessRemain;

		}
}


function gLossesF() {
	if (guessRemain == 0) {
		++gLossesV 
		loser = "You Lose!";
		document.getElementById("gHere2").disabled = true;
		document.getElementById("lossUpdate").innerHTML = gLossesV;
		document.getElementById("comment").innerHTML = loser;
		document.getElementById("winsUpdate").innerHTML = gWinsV;
		document.getElementById("gHere2").value = "";
		document.getElementById("numGuesses").innerHTML = guessRemain;
		guessRemain = 10;
		document.getElementById("WORD").innerHTML = "_ _ _ _ _";
		randomSelectedWord = wordDatabase[Math.floor(Math.random() * 10)];
	}
	
}





