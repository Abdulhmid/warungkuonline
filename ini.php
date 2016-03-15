<html>
<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />  
<title>Aplikasi Tracking System</title>
<link href='favicon.ico' rel='shortcut icon' type='image/x-icon'/>
<link href="style.css" type="text/css" rel="stylesheet"  style="style="display:none"" />
<script type="text/javascript" src="jquery-1.7.2.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	$('#login').click(function() {
		$('#login_form').submit();
	});	
});	
</script>

</head>
<body>
<?
	session_start();
	include"config/koneksi.php";
	$cc=mysql_query("SELECT * FROM member WHERE id_member='$_SESSION[id_member]'");
    $red=mysql_fetch_array($cc);
	$peta='petadinamis.php';

echo "<div id=induk>
	<div id=header><u class=logo href=home.php><img src=Satelit_527.jpg width=60 height=60 /></u></div></div>
	<div id=active_tab_page class=tabbar2 >
	<div class=login_form>
	<form id=login_form action=proses_update.php method=post>
	<input type=hidden name=id value='$_SESSION[id_member]'>
	<div class=login_form_label>Status :
	<select name=status id=select class=login_form_field>
 	<option value=$red[foto]>Tersedia</option>
	<option value=x.jpg>Lagi Ada Penumpang</option>
	</select>
    </div>
    <input type=submit value=Update>   
	 
	<table border='0'>
  <tr>
    <td><a href='petadinamis.php'><img src='Google-Maps-icon.png'/></td>
    <td><b>Lihat Peta</b></td>
  </tr>
  <tr>
    <td><a href='logout.php'><img src='exit.png'/></td>
    <td><b>Exit</b></td>
  </tr>
</table>
	</form>
	</div>
    </div>";
?>
         	                
<div>
<div class=login_center>Desain by Indra Kusuma &copy; <?php echo date('Y'); ?></div>
</div>
</body>
</html>