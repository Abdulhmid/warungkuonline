<?php
//authentication user
error_reporting(0);
include"koneksi.php";
session_start();
$login=mysql_query("SELECT COUNT(*) AS cek FROM admin  WHERE username='$_SESSION[namauser]' AND password='$_SESSION[passuser]' AND level='$_SESSION[leveluser]'");
$hasil=mysql_fetch_array($login);

if ($hasil["cek"] == 0){ 
  echo "<link href='style.css' rel='stylesheet' type='text/css'><center>Untuk mengakses modul, Anda harus login <br>";
  echo"<script>alert('Akses ditolak.')</script>";
  echo"<script>document.location.href='index.php';</script>";
 print("<html><head><meta http-equiv='refresh' content='0;url=index.php'></head><body></body></html>");
  echo"<meta http-equiv='refresh' content='0;url=../index.php'>";
  exit;
}
?>