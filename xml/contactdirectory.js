/*
Name: Danny McAlea
Date: 9/21/2016
Desc: JavaScript for contact directory
*/

if (window.XMLHttpRequest)
  xmlhttp = new XMLHttpRequest();
else
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


xmlhttp.open("GET","EmployeeContactTable.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
//** Global Variables **
var x = xmlDoc.getElementsByTagName("EMPLOYEEINFO");

var perPage = 5;
var i = 0;
var cnt = 0;
function displayData()
{
  //create a string of html tags for creating a table of data items.
  txt = "<table border='1'>" +
  "<tr>" +
  "<th>CONTACT</th>" +
  "<th>DEPT</th>"+
  "<th>TITLE</th>"+
  "<th>PHONE</th>" +
  "<th>EMAIL</th>" +
  "</tr>"

  for (i, cnt=0; (i < x.length & cnt < perPage); i++, cnt++)
    {
    Contact = x[i].getElementsByTagName("CONTACT")[0].childNodes[0].nodeValue;
    Dept = x[i].getElementsByTagName("DEPT")[0].childNodes[0].nodeValue;
    Title = x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
    Phone = x[i].getElementsByTagName("PHONE")[0].childNodes[0].nodeValue;
    Email = x[i].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
    txt += "<tr><td>" + Contact + "</td>" +
    "<td>" + Dept + "</td>" +
    "<td>" + Title + "</td>" +
    "<td>" + Phone + "</td>" +
    "<td>" + Email + "</td>" +
    "</tr>"
    }
  txt += "</table>"
  document.getElementById("showTable").innerHTML=txt;
}


function firstPage()
{
  i = 0;
  displayData();
}

function nextPage()
{
  //if at EOF reset index to last item
  if (i >= x.length -1)
  i = x.length - perPage;
  displayData();
}

function previousPage()
{
  //if backing up would go beyond beginning, set to beginning
  if (i < perPage * 2)
    i = 0;
  else
  //if only a few are displayed on last page, readjust to display full page
    if (cnt < perPage)
      i = x.length - (perPage + cnt)
    else
    // back up to previous page
      i -= perPage * 2;
  displayData();
}

function lastPage()
{
//go to end of data and backup by number of items displayed per page
i = x.length - perPage;
displayData();
}
