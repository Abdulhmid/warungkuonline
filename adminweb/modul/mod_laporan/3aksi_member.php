<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";

$module=$_GET[module];
$act=$_GET[act];
$usr=base64_decode($_GET[usr]);
$sidnow=session_id();

// Input user
if ($module=='member' AND $act=='input'){
  $pass=md5($_POST[password]);
    //cek apakah username sudah digunakan
  $cek = mysql_query("SELECT * FROM member WHERE id_member = '$_GET[id]'");
  $tampil = mysql_num_rows($cek);
  
  if ($tampil > 0){
	echo"<script>alert('username sudah ada yang menggunakan! gunakan username lain.')</script>";
	echo"<script>document.location.href='javascript:history.go(-1)'</script>";
  }
  else{
  $sql=mysql_query("INSERT INTO member(id_member,
                                 password,
                                 nama_lengkap,
								 alamat,
								 kecamatan,
                                 email, 
                                 no_telp,
								 level,
                                 id_session) 
	                       VALUES('$_POST[username]',
                                '$pass',
                                '$_POST[nama_lengkap]',
								'$_POST[alamat]',
								'$_POST[kecamatan]',
                                '$_POST[email]',
                                '$_POST[no_telp]',
								'member',
                                '$sidnow')");
	  if (!$sql){
			echo"Pendaftaran member gagal<br/>";
			echo"<a href=javascript:history.go(-1)>kembali</a>";
	  }
	  else{
		header('location:../../media.php?module='.$module);
	  }
  }
}

//delete user
else if ($module=='member' AND $act=='delete'){
  mysql_query("DELETE FROM member WHERE id_member = '$usr' AND id_session = '$_GET[sid]'");
  header('location:../../media.php?module='.$module);
}

// Update user
else if ($module=='member' AND $act=='update'){
  if (empty($_POST[password])) {
    mysql_query("UPDATE member SET nama_lengkap   = '$_POST[nama_lengkap]',
								  alamat		 = '$_POST[alamat]',
								  kecamatan		 = '$_POST[kecamatan]',
                                  email          = '$_POST[email]',
                                  blokir         = '$_POST[blokir]',  
                                  no_telp        = '$_POST[no_telp]' 
								  
                           WHERE  id_member = '$usr' AND id_session = '$_GET[id]'");
  }
  // Apabila password diubah
  else{
    $pass=md5($_POST[password]);
    mysql_query("UPDATE member SET password       = '$pass',
                                 nama_lengkap    = '$_POST[nama_lengkap]',
								 alamat		     = '$_POST[alamat]',
								 kecamatan		 = '$_POST[kecamatan]',
                                 email           = '$_POST[email]',  
                                 blokir          = '$_POST[blokir]',  
                                 no_telp         = '$_POST[no_telp]'  
                           WHERE id_member = '$usr' AND id_session = '$_GET[id]'");
  }
  header('location:../../media.php?module='.$module);
}


?>
