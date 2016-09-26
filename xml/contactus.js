/*
Name: Danny McAlea
Date: 9/26/2016
Desc: JavaScript for contact us search
*/

if (window.XMLHttpRequest)
  xmlhttp = new XMLHttpRequest();
else
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

xmlhttp.open("GET","xml/EmployeeContactTable.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

//** Global Variables **
var x = xmlDoc.getElementsByTagName("PHONELIST");
function FindClub()
{
  SearchString=SearchForm.SearchText.value.toUpperCase()
  if ((SearchString == "") || (SearchString == " "))
  {
    SearchResult.innerHTML = "<h3 style='color:red'>Please enter one or more letters of the club name in the text box. </h3>"
    return
  }
  var outputResult = ""

  for (i = 0; i < x.length; i++)
  {
    Employee = x[i].getElementsByTagName("CONTACT")[0].childNodes[0].nodeValue;
    if (Employee.toUpperCase().indexOf(SearchString) == 0)
    {
      Dept = x[i].getElementsByTagName("DEPT")[0].childNodes[0].nodeValue;
      Title = x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
      Phone = x[i].getElementsByTagName("PHONE")[0].childNodes[0].nodeValue;
      Email = x[i].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
      outputResult += "<span style='color:maroon'>Club:&nbsp;</span>"
      + "<span style='font-style:italic'>" + Contact+ " </span>"
      + "<br/><span style='color:maroon'>Dept:&nbsp;</span>" + Dept
            + "<br/><span style='color:maroon'>Title:&nbsp;</span>" + Title
      + "<br/><span style='color:maroon'>Phone:&nbsp;</span>" + Phone
      + "<br/><span style='color:maroon'>Email:&nbsp;</span>" + Email
      + "<br/><br />"
    }
  }

  if (outputResult == "")
    SearchResult.innerHTML = '<h3 style="color:red"> Sorry, no club found by that name. </h3>'
  else
    SearchResult.innerHTML = '<h3 style="color:red">' + outputResult + '</h3>'
}
