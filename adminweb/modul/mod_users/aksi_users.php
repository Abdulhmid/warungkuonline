<?php
include "../../../config/authentication_.php";
session_start();
include "../../../config/koneksi.php";

$module=$_GET[module];
$act=$_GET[act];
$usr=base64_decode($_GET[usr]);
$sidnow=session_id();

// Input user
if ($module=='user' AND $act=='input'){
  $pass = md5($_POST[password]);
  
  //cek apakah username sudah digunakan
  $cek = mysql_query("SELECT * FROM admin WHERE username = '$_POST[username]'");
  $tampil = mysql_num_rows($cek);
  
  if ($tampil > 0){
	echo"<script>alert('username sudah ada yang menggunakan! gunakan username lain.')</script>";
	echo"<script>document.location.href='javascript:history.go(-1)'</script>";
  }
  else{
  mysql_query("INSERT INTO admin(username,
                                 password,
                                 nama_lengkap,
                                 email, 
                                 no_telp,
								 level,
                                 id_session) 
	                       VALUES('$_POST[username]',
                                '$pass',
                                '$_POST[nama_lengkap]',
                                '$_POST[email]',
                                '$_POST[no_telp]',
								'$_POST[level]',
                                '$sidnow')");
  header('location:../../media.php?module='.$module);
  }
 }

//delete user
else if ($module=='user' AND $act=='delete'){
  mysql_query("DELETE FROM admin WHERE username = '$usr' AND id_session = '$_GET[sid]'");
  header('location:../../media.php?module='.$module);
}

// Update user
else if ($module=='user' AND $act=='update'){
  if (empty($_POST[password])) {
    mysql_query("UPDATE admin SET nama_lengkap   = '$_POST[nama_lengkap]',
                                  email          = '$_POST[email]',
                                  blokir         = '$_POST[blokir]',  
                                  no_telp        = '$_POST[no_telp]', 
								  level			 = '$_POST[level]'
                           WHERE  username = '$usr' AND id_session = '$_GET[id]'");
  }
  // Apabila password diubah
  else{
    $pass=md5($_POST[password]);
    mysql_query("UPDATE admin SET password       = '$pass',
                                 nama_lengkap    = '$_POST[nama_lengkap]',
                                 email           = '$_POST[email]',  
                                 blokir          = '$_POST[blokir]',  
                                 no_telp         = '$_POST[no_telp]'  
                           WHERE username = '$usr' AND id_session = '$_GET[id]'");
  }
  header('location:../../media.php?module='.$module);
}


?>
