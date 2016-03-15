<?php
error_reporting(0);
include "config/koneksi.php";
$linkfrom = $_GET[lf];
function antiinjection($data){
  $filter_sql = mysql_real_escape_string(stripslashes(strip_tags(htmlspecialchars($data,ENT_QUOTES))));
  return $filter_sql;
}

$username = antiinjection($_POST[username]);
$pass     = antiinjection($_POST[password]);
	
$login=mysql_query("SELECT * FROM member WHERE username='$username' AND password='$pass' AND blokir='Tidak'");
$ketemu=mysql_num_rows($login);
$r=mysql_fetch_array($login);
	$waw=mysql_query("SELECT member.*, ADDDATE(tanggal, periode) AS lama FROM member WHERE username='$_SESSION[username]'");
	$x = mysql_fetch_array($waw);
	$result=mysql_query("UPDATE member SET premium = 'TIDAK', peringatan = 'HABIS' WHERE username = '$username' AND NOW() > '$x[lama]'");
	


// Apabila username dan password ditemukan
if ($ketemu > 0){

  session_start();
   
  $_SESSION[username]     = $r[username];
  $_SESSION[passuser]     = $r[password];
  
  $sid = session_id();
  mysql_query("UPDATE member SET id_session='$sid' WHERE username='$username'");
  if ($linkfrom=='selesaibelanja'){
	echo"<script>document.location.href='store';</script>";
	header('location:../selesai-belanja.html');
  }
  elseif ($linkfrom=='daftarnlogin'){
	echo"<script>document.location.href='store';</script>";
	header('location:home');
  }
  else{
	header('location:store');
  }
}
else{
	echo"<script>alert('LOGIN GAGAL! Username atau Password Anda tidak benar. Atau account Anda sedang diblokir.')</script>";
	echo"<script>document.location.href='store';</script>";
}
?>
