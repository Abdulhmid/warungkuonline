<?php
include "../config/koneksi.php";
function antiinjection($data){
  $filter_sql = mysql_real_escape_string(stripslashes(strip_tags(htmlspecialchars($data,ENT_QUOTES))));
  return $filter_sql;
}

$username = antiinjection($_POST["username"]);
$pass     = antiinjection(md5($_POST["password"]));

	
$login=mysql_query("SELECT * FROM admin WHERE username='$username' AND password='$pass' AND blokir='N'");
$ketemu=mysql_num_rows($login);
$r=mysql_fetch_array($login);

// Apabila username dan password ditemukan
if ($ketemu >0){
  session_start();
  
  $_SESSION['namauser']     = $r['username'];
  $_SESSION['namalengkap']  = $r['nama_lengkap'];
  $_SESSION['passuser']     = $r['password'];
  $_SESSION['leveluser']    = $r['level'];
  
  $sid = session_id();
  mysql_query("UPDATE admin SET id_session='$sid' WHERE username='$username'");
  header('location:media.php?module=home');
 
}
else{
	echo"<script>alert('LOGIN GAGAL! Username atau Password Anda tidak benar. Atau account Anda sedang diblokir.')</script>";
	//echo"<script>document.location.href='index.php';</script>";
	print("<html><head><meta http-equiv='refresh' content='0;url=index.php'></head><body></body></html>");
    exit;
	/**
	echo "<center>LOGIN GAGAL! <br> 
        Username atau Password Anda tidak benar.<br>
        Atau account Anda sedang diblokir.<br>";
	echo "<a href=index.php><b>ULANGI LAGI</b></a></center>";
	**/
}
?>
