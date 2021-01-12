window.onload = function () {
	var arr = [
		"Max",
		"Manu",
		"Agra",
		"London",
		"Cats",
		"Dogs",
		"Dog fight",
		"Dog fighting Cats",
	];

	document.querySelector('#queryInput').onkeyup = function (i) {
		var querySuggestions = [];

		if (this.innerHTML != "") {
			document.querySelector('.placeholder').style.visibility = "hidden";

			var input = this.innerHTML;


			var txt = document.createElement("textarea");
			txt.innerHTML = input;


			input = txt.value;


			arr.map((e) => {
				var substr = e.substring(0, input.length).toLowerCase();
				if (substr.trim() == input.toLowerCase().trim()) {
					querySuggestions.push(e);

					var suggestion = querySuggestions.reduce((a, b) => a.length <= b.length ? a : b);

					console.log(suggestion)

					document.querySelector('#suggestedString').innerHTML = suggestion.substring(input.length, suggestion.length);

					if (i.keyCode == 39) {
						document.querySelector('#queryInput').innerHTML = suggestion;
						document.querySelector('#suggestedString').innerHTML = "";

						document.querySelector('#queryInput').focus();
						document.execCommand('selectAll', false, null);
						document.getSelection().collapseToEnd();
					}
				}
			});
		} else {
			document.querySelector('.placeholder').style.visibility = "visible";
			document.querySelector('#suggestedString').innerHTML = "";
		}
	}
}