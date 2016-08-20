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
				var heading = xhr.responseXML.getElementsByTagName('heading')[0].firstChild.nodeValue;
				var h2 = document.createElement("h2");
				var h2Text = document.createTextNode(heading);
				h2.appendChild(h2Text);
				

				var list = document.createElement("ul"),
						items = xhr.responseXML.getElementsByTagName('items')[0];
				items = items.getElementsByTagName('item');
				for (var i = 0; i < items.length; i++) {
					var item = items[i].firstChild.nodeValue
							li = document.createElement("li"),
							liText = document.createTextNode(item);
					li.appendChild(liText);
					list.appendChild(li);
				}
				body.appendChild(h2);
				body.appendChild(list);
				body.removeChild(link);
			}
		};

		//open the request get request to open ajax asych
		xhr.open("Get", "files/ajax.xml", true);

		//send request to server
		xhr.send(null);

		return false;
	};

})();

function processRequest() {
	
}