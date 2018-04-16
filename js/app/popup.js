myApp.service('domElements', function() {
	this.getInfo = function(callback) {
		var model = {};
		chrome.tabs.query({'active': true},
		function (tabs) {
			if (tabs.length > 0)
			{
					model.title = tabs[0].title;
					model.url = tabs[0].url;
					chrome.tabs.sendMessage(tabs[0].id, { 'action': 'pageElements' }, function (response) {
							model.pageElements = response;
							callback(model);
					});
			}
		});
	};
});

myApp.controller("ngController", function ($scope, domElements) {
    domElements.getInfo(function (info) {
        $scope.pageElements = info.pageElements;
        $scope.$apply();
    });
});



