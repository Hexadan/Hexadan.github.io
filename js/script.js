/*
Name: Danny McAlea
Date: 9/12/2016
Desc: JavaScript for website
*/

function docLastModified()
{
	//displays the date the webpage was last modified
	var docLastMod = document.lastModified;
	var lastModDate = docLastMod.substring(0,10);
	displayDateLast.innerHTML = "<h6>&copy;2016 Zoom Tunes</h6><h6> This document was last modified "+lastModDate+".</h6>";
}

function generateProductTotal(total, shipping)
{
	var e = document.getElementById("productQuantity");
	var tempSubtotal = (e.options[e.selectedIndex].text * total);

	//displays the total cost of the order before tax
  document.getElementById("productSubtotal").value = "$" + tempSubtotal.toFixed(2);

	//calculates tax of order
	var tempTax = (tempSubtotal * 0.065);

	//displays the tax, shipping total, and order total
	document.getElementById("productTax").value = "$" + tempTax;
	document.getElementById("productSandH").value = "$" + shipping;
	document.getElementById("productTotal").value = "$" + (tempSubtotal + tempTax + 5);
}

//embeds navbar via JS
function createNavbar()
{
  document.getElementById("navBarDisplay").innerHTML = "<nav class='text-center'>" +
  "<a class='btn btn-primary' style='margin-left:2px; margin-right:2px;' href='aboutus.html'>About Us</a>" +
  "<a class='btn btn-primary' style='margin-left:2px; margin-right:2px;' href='#'>Login/Registration</a>" +
  "<a class='btn btn-primary' style='margin-left:2px; margin-right:2px;' href='productorder.html'>Product Order</a>" +
  "<a class='btn btn-primary' style='margin-left:2px; margin-right:2px;' href='#'>Catalog</a>" +
  "<a class='btn btn-primary' style='margin-left:2px; margin-right:2px;' href='#'>Inventory</a>" +
  "<a class='btn btn-primary' style='margin-left:2px; margin-right:2px;' href='#'>Shopping Cart</a>" +
  "<a class='btn btn-primary' style='margin-left:2px; margin-right:2px;' href='companydirectory.html'>Company Directory</a>" +
  "<a class='btn btn-primary' style='margin-left:2px; margin-right:2px;' href='contactus.html'>Contact Us</a>" +
  "</nav>" ;
}
