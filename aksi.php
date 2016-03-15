<?php
error_reporting(0);
session_start();
include "config/koneksi.php";
include "config/library.php";

$module=$_GET[module];
$act=$_GET[act];
$linkfrom=$_GET[lf];
$sid = session_id();

// Pendaftaran member
if ($act=='daftarmember'){
  $kar1=strstr($_POST[email], "@");
  $kar2=strstr($_POST[email], ".");

  if (empty($_POST[username]) || empty($_POST[username]) || empty($_POST[nama_lengkap]) || empty($_POST[alamat]) ||empty($_POST[id_kota]) || empty($_POST[email]) ||  empty($_POST[no_telp])){
	echo "<script>alert('Data yang Anda isikan belum lengkap')</script>
			<script>document.location.href='javascript:history.go(-1)'</script>";
  }
   elseif ($_POST[password] != $_POST[password2]){
	echo "<script>alert('pengulangan password tidak sama.')</script>
		<script>document.location.href='javascript:history.go(-1)'</script>";
  }
  elseif (!ereg("[a-z|A-Z]","$_POST[nama_lengkap]")){
	echo "<script>alert('Nama tidak boleh diisi dengan angka atau simbol.')</script>
		<script>document.location.href='javascript:history.go(-1)'</script>";
  }
  elseif (strlen($kar1)==0 OR strlen($kar2)==0){
	echo "<script>alert('Alamat email Anda tidak valid, mungkin kurang tanda titik (.) atau tanda @.')</script>
		<script>document.location.href='javascript:history.go(-1)'</script>";
  }
  else{
	
  $sidnow=session_id();
  $pass=md5($_POST[password]);
  //cek apakah username sudah digunakan
  $cek = mysql_query("SELECT * FROM member WHERE id_member = '$_POST[username]'");
  $tampil = mysql_num_rows($cek);
    
  if ($tampil > 0){
	echo"<script>alert('username sudah ada yang menggunakan! gunakan username lain.')</script>";
	echo"<script>document.location.href='javascript:history.go(-1)'</script>";
  }
  else{
   $query="INSERT INTO member(id_member,
                                 password,
                                 nama_lengkap,
								 alamat,
								 id_kota,
								 kode_pos,
                                 email, 
                                 no_telp,
								 level,
								 blokir,
                                 id_session) 
	                         VALUES('$_POST[username]',
                                '$pass',
                                '$_POST[nama_lengkap]',
								'$_POST[alamat]',
								'$_POST[id_kota]',
								'$_POST[kode_pos]',
								'$_POST[email]',
                                '$_POST[no_telp]',
								'member',
								'N',
                                '$sidnow')";
	$sql=mysql_query($query);
	  if (!$sql){
		echo "<script>alert('gagal insert ulangi lagi')</script>
			<script>document.location.href='javascript:history.go(-1)'</script>";
	  }
	  else{
		  
		  $cek = mysql_query("SELECT * FROM member WHERE id_member = '$_POST[username]'");
		  $r = mysql_fetch_array($cek);
		  if ($linkfrom == 'daftar'){
			  $_SESSION[namauser]     = $r[id_member];
			  $_SESSION[namalengkap]  = $r[nama_lengkap];
			  $_SESSION[passuser]     = $r[password];
			  $_SESSION[leveluser]    = $r[level];
			header('location:home');
		  }
		  elseif($linkfrom == 'selesaibelanja'){
			  $_SESSION[namauser]     = $r[id_member];
			  $_SESSION[namalengkap]  = $r[nama_lengkap];
			  $_SESSION[passuser]     = $r[password];
			  $_SESSION[leveluser]    = $r[level];
			header('location:selesai-belanja.html');
		  }
		  		  elseif($linkfrom == 'alamat'){
			  $_SESSION[namauser]     = $r[id_member];
			  $_SESSION[namalengkap]  = $r[nama_lengkap];
			  $_SESSION[passuser]     = $r[password];
			  $_SESSION[leveluser]    = $r[level];
			header('location:selesai-belanja.html');
		  }

	  }
  }
  }
}

// Update Profil Kustomer
if ($act=='update_kustomer'){
  $kar1=strstr($_POST[email], "@");
  $kar2=strstr($_POST[email], ".");

  if (empty($_POST[alamat]) || empty($_POST[email]) ||  empty($_POST[no_telp])){
	echo "<script>alert('Data yang Anda isikan belum lengkap')</script>
			<script>document.location.href='javascript:history.go(-1)'</script>";
  }
  elseif (strlen($kar1)==0 OR strlen($kar2)==0){
	echo "<script>alert('Alamat email Anda tidak valid, mungkin kurang tanda titik (.) atau tanda @.')</script>
		<script>document.location.href='javascript:history.go(-1)'</script>";
  }
  else{
	
  $sidnow=session_id();
  $pass=md5($_POST[password]);
  //cek apakah username sudah digunakan
  mysql_query("UPDATE kustomer SET email = '$_POST[email]', pin_bb = '$_POST[pin_bb]', alamat = '$_POST[alamat]', id_kota = '$_POST[kota]' WHERE username='$_SESSION[username]' ");
  header('location:profil');

	  }
  }

/*
	Hapus produk kurang dari <1 hari
*/
function deleteAbandonedCart(){
	$kemarin = date('Y-m-d', mktime(0,0,0, date('m'), date('d') - 1, date('Y')));
	mysql_query("DELETE FROM orders_temp 
	        WHERE tgl_order_temp < '$kemarin'");
}


?>

