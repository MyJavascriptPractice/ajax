(function() {

	var link = document.getElementsByTagName("a")[0];

	link.onclick = function() {


		Will.ajax('files/ajax.json', {
			method: "GET",
			complete: function(response) {
				var body = document.getElementsByTagName("body")[0],
						json = response,

						heading = json.heading,
						h2 = document.createElement("h2"),
						h2Text = document.createTextNode(heading);
				h2.appendChild(h2Text);

				var list = document.createElement("ul"),
						items = json.items;
				
				for (var key in items) {
					var item = items[key],
							li = document.createElement("li"),
							liText = document.createTextNode(item);
					li.appendChild(liText);
					list.appendChild(li);
				}
				body.appendChild(h2);
				body.appendChild(list);
				body.removeChild(link);
			}
		});

		return false;
	};

})();