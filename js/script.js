/*
Name: Danny McAlea
Date: 9/12/2016
Desc: JavaScript for website
*/

function lastChanged()
 {
	var lastModDate = document.lastModified;
	var lastModDate = lastModDate.substring(0,10);
	displayDateLast.innerHTML = "<h6>&copy;2016 Zoom Tunes</h6><h6> This document was last modified "+lastModDate+".</h6>";
}
