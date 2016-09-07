function lastChanged()
 {
	var lastModDate = document.lastModified;
	var lastModDate = lastModDate.substring(0,10);
	displayDateLast.innerHTML = "This document was last modified "+lastModDate+".</h6>";
}
