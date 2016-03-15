<?php
	session_start();
	include "config/koneksi.php";
	$user=$_POST['username'];
	$pass=$_POST['password'];
	$sql="select id_member from member where username='$user' and password='$pass'";
	$query=mysql_query($sql);
	$jumlah=mysql_num_rows($query);
	
	if($jumlah==1){
		$data=mysql_fetch_array($query);		
		$_SESSION['id_member']=$data['id_member'];		
		header("location:ini.php");	
	}else{
  echo "<script>alert('Password atau Username salah.')</script>";
  echo "<meta http-equiv='refresh' content='0;url=login_update.php'>";

	}
?>