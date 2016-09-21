<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<head>
<title> Contact List Table in Alpha Order </title>
<style>
table
{
width: 60%;
margin-left: auto;
margin-right: auto;
}
</style>
</head>

<body style="background-color: ivory">
<!-- The following div is needed for centering the page in IE. The embedded style
settings are needed for centering the table in Firefox-->
  <div style= "text-align:center">
      <h1>ZOOM TUNES CONTACT LIST </h1>
      <h2 style="color:red"> CONTACT LIST SORTED BY DEPARTMENT </h2>
    <br />
      <table border="1" style="padding:5">
       <tr>
        <th>CONTACT</th>
        <th>DEPT</th>
        <th>TITLE</th>
        <th>PHONE</th>
        <th>E-MAIL</th>
      </tr>

        <xsl:for-each select="EMPLOYEELIST/ EMPLOYEEINFO" >
         <xsl:sort select="DEPT" />
          <tr style="text-align:center">
            <td> <span style="font-style:italic">
            <xsl:value-of select="CONTACT"/>
            </span>
            </td>
            <td> <xsl:value-of select="DEPT"/> </td>
            <td> <xsl:value-of select="TITLE"/> </td>
            <td> <xsl:value-of select="PHONE"/> </td>
            <td> <xsl:value-of select="EMAIL"/> </td>
          </tr>
        </xsl:for-each>

      </table>
   </div>
</body>
</html>
