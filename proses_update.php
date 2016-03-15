<?php
	session_start();
	include "config/koneksi.php";
	$id=$_POST['id'];
	$foto=$_POST['status'];
	//$sql="update armada set lat='$lat', long='$lon' where id='$_SESSION[id]'";
	$sql="update armada set tersedia='$foto' where id='$id'";
	$query=mysql_query($sql) or die($sql);
	//$data=mysql_fetch_array($query);
if ($query)
{
	echo"<script>alert('Sukses')</script>";
	echo "<meta http-equiv='refresh' content='0;url=ini.php'>";
}
else
{ 
	echo "<script>alert('ERORRRR')</script>";
	echo "<meta http-equiv='refresh' content='0;url=update.php'>";

}			
?>