<?php
//authentication kustomer
include "koneksi.php";
session_start();
//cek kustomer
$cek=mysql_query("SELECT COUNT(*) AS cek FROM member WHERE username='$_SESSION[username]' and blokir='Tidak'");
$ada=mysql_fetch_array($cek);

if ($ada["cek"] == 0){ 
	echo"<script>alert('Silahkan Login terlebih dahulu.')</script>";
	echo"<script>document.location.href='store'</script>";	
}

?>