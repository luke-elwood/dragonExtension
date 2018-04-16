chrome.extension.onMessage.addListener(function (request, sender, response) {
	if (request.action == 'pageElements') {
			var pageElements = {};
			document.querySelectorAll('*').forEach(function(e){
				if(pageElements[e.nodeName]){
					if(e.id){
						pageElements[e.nodeName].push(e.id);
					}else if(e.className){
						pageElements[e.nodeName].push(e.className);
					}
				}else{
					if(e.id){
						pageElements[e.nodeName] = [e.id];
					}else if(e.className){
						pageElements[e.nodeName] = [e.className];
					}
				}
			});
			response(pageElements);
	}
});