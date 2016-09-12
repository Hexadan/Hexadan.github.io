/*
Name: Danny McAlea
Date: 9/12/2016
Desc: JavaScript for website
*/

function lastChanged()
 {
	var lastModDate = document.lastModified;
	var lastModDate = lastModDate.substring(0,10);
	displayDateLast.innerHTML = "This document was last modified "+lastModDate+".</h6>";
}
