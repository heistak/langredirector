// ==UserScript==
// @name           Gizmodo language redirector
// @namespace      http://www.heistak.com/
// @description    Redirects Gizmodo.jp pages to the original English pages
// @include        http://*gizmodo.jp/*
// ==/UserScript==

// Set this to true to use Gizmodo US's blog mode
var blog_mode = true;

var entry_detail = document.getElementById("entry_detail");
var anchors = entry_detail.getElementsByTagName("a");

for (var i = anchors.length - 1; i >= 0; i--){
	if (anchors[i].href.indexOf("gizmodo.com") != -1 || anchors[i].href.indexOf("gawker.com") != -1) {
		var dest = anchors[i].href;
		if (blog_mode) {
			dest = dest.replace("//gizmodo.", "//blog.us.gizmodo.");
			dest = dest.replace("//us.gizmodo.", "//blog.us.gizmodo.");
			
			dest = dest.replace("//gawker.", "//blog.us.gawker.");
			dest = dest.replace("//us.gawker.", "//blog.us.gawker.");
		};
		// alert(dest);
		location.replace(dest);
		break;
	};
};
