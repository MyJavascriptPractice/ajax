(function() {

	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {
		//xhr object short for xml http request
		var xhr = new XMLHttpRequest();
		//handle onreadystatechange request
		//xhr.readyState() property values
		// 0 = uninitialized
		// 1 = Loading
		// 2 = Loaded
		// 3 = Interactive(sending response)
		// 4 = Complete

		xhr.onreadystatechange = function() {
			if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
				xhr.responseText;

				var body = document.getElementsByTagName("body")[0];
				var d = document.createElement("div");
				body.appendChild(d);
				var div = document.getElementsByTagName("div")[0];
				div.innerHTML = xhr.responseText;
				body.removeChild(link);
			}
		};

		//open the request get request to open ajax asych
		xhr.open("Get", "files/ajax.html", true);

		//send request to server
		xhr.send(null);

		return false;
	};

})();

function processRequest() {
	
}