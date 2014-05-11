// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
	// Replace all rules ...
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		// With a new rule ...
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {
						hostContains: 'groovehq',
						urlMatches: 'groove_client.+tickets'
					}
				})
			],
			// And shows the extension's page action.
			actions: [ new chrome.declarativeContent.ShowPageAction() ]
		}]);
	});
});

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {file: 'script.js'}, function (responses) {
		var response = responses[0];
		chrome.pageAction.setIcon({tabId: tab.id, path: 'icon-' + (response ? 'inactive' : 'active') + '.png'});
		chrome.pageAction.setTitle({tabId: tab.id, title: 'Turn zen mode ' + (response ? 'on' : 'off')});
	});
});