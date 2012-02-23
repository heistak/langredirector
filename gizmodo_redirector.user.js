// ==UserScript==
// @name           Gizmodo language redirector
// @namespace      http://www.heistak.com/
// @description    Redirects Gizmodo.jp pages to the original English pages
// @match          http://*gizmodo.jp/*
// ==/UserScript==

var entry_detail = document.getElementById("entry_detail");
var anchors = entry_detail.getElementsByTagName("a");

for (var i = anchors.length - 1; i >= 0; i--){
	if (anchors[i].href.indexOf("gizmodo.com") != -1 || anchors[i].href.indexOf("gawker.com") != -1) {
		var dest = anchors[i].href;
		// alert(dest);
		location.replace(dest);
		break;
	};
};
