// ==UserScript==
// @name            Gizmodo language redirector
// @namespace       http://www.heistak.com/
// @description     Redirects Gizmodo.jp pages to the original English pages
// @match           *://gizmodo.jp/*
// @match           *://www.gizmodo.jp/*
// @version         1.1.0
// ==/UserScript==

var entry_detail = document.querySelector("div.p-post-content small");
if (entry_detail === null) {
	return;
}

var anchors = entry_detail.getElementsByTagName("a");
for (var i = anchors.length - 1; i >= 0; i--) {
	if (anchors[i].href.indexOf("gizmodo.com") != -1 || anchors[i].href.indexOf("gawker.com") != -1) {
		var dest = anchors[i].href;
		// alert(dest);
		location.replace(dest);
		break;
	}
}
