<?php
include"../config/authentication_users.php";
?>

<html>
<head>
<title>Halaman Admistrator</title>
<script>
function myFunction() {
    location.reload();
}
</script>

<!-- TinyMCE -->
<script language="javascript" type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
<script language="javascript" type="text/javascript" src="../tinymce/tinymce.min.js"></script>

<script type="text/javascript">
tinymce.init({
    selector: "textarea",
    plugins: [
"advlist autolink lists link image charmap print preview anchor",
	"searchreplace visualblocks code fullscreen",
	"insertdatetime media table contextmenu paste"
]
});
</script>


<link href="style.css" rel="stylesheet" type="text/css" />

</head>
<body>
<div id="wrapper">
  <div id="header"> <a href="media.php?module=home"><img src="images/logo.png" width="310" height="82"></a>
<table border="0">
  <tr>
    <td>   <?php include "menu.php"; ?>
</td>
    <td>   <?php include "content.php"; ?>
</td>
  </tr>
</table>

  
  <div id="clearer"></div>
  <?php
	include"footer.php";
	?>
</div>
</body>
</html>
