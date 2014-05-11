// Toggles the css in and out of the page
(function () {
	var tags = document.querySelectorAll('link.af-groove-strip');

	if (tags.length === 0) {
		// Add the tag
		var tag = document.createElement('link');
		tag.href = chrome.extension.getURL('style.css');
		tag.rel = 'stylesheet';
		tag.type = 'text/css';
		tag.setAttribute('class', 'af-groove-strip');
		document.getElementsByTagName('head')[0].appendChild(tag);

		return true;
	} else {
		// Remove them all
		Array.prototype.forEach.call(tags, function (tag) {
			tag.remove();
		});

		return false;
	}
}());