<?php
//Authentication users
include "../../../config/authentication_users.php";

session_start();
include "../../../config/koneksi.php";
include "../../../config/fungsi_thumb.php";

$module=$_GET[module];
$act=$_GET[act];

//Membaca file
$sql=mysql_query("SELECT * FROM modul WHERE id_modul='$_POST[id]'");
$r=mysql_fetch_array($sql);
$data=$r[gambar];
$pathfile='../../foto_banner/'.$data;

// Hapus modul
if ($module=='modul' AND $act=='hapus'){
  //menghapus file gambar
  if (file_exists($pathfile) AND isset($data)) {
		unlink("$pathfile");
  } 
  
  mysql_query("DELETE FROM modul WHERE id_modul='$_POST[id]'");
  header('location:../../media.php?module='.$module);
}

// Input modul
elseif ($module=='modul' AND $act=='input'){
  $lokasi_file    = $_FILES['fupload']['tmp_name'];
  $tipe_file      = $_FILES['fupload']['type'];
  $nama_file      = $_FILES['fupload']['name'];
  $acak           = rand(1,99);
  $nama_file_unik = $acak.$nama_file; 
  
  // Cari angka urutan terakhir
  $u=mysql_query("SELECT urutan FROM modul ORDER by urutan DESC");
  $d=mysql_fetch_array($u);
  $urutan=$d[urutan]+1;
  
  //Upload gambar
  UploadBanner($nama_file_unik);
  // Input data modul
  mysql_query("INSERT INTO modul(nama_modul,
                                 link,
                                 publish,
                                 aktif,
                                 status,
                                 urutan,
								 gambar) 
	                       VALUES('$_POST[nama_modul]',
                                '$_POST[link]',
                                '$_POST[publish]',
                                '$_POST[aktif]',
                                '$_POST[status]',
                                '$urutan',
								'$nama_file_unik')");

  header('location:../../media.php?module='.$module);
}

// Update modul
elseif ($module=='modul' AND $act=='update'){
  $lokasi_file    = $_FILES['fupload']['tmp_name'];
  $tipe_file      = $_FILES['fupload']['type'];
  $nama_file      = $_FILES['fupload']['name'];
  $acak           = rand(1,99);
  $nama_file_unik = $acak.$nama_file; 
  
  //Bila tidak ada gmbar yg di upload  
  if (empty($lokasi_file)){
	mysql_query("UPDATE modul SET nama_modul = '$_POST[nama_modul]',
									link       = '$_POST[link]',
									publish    = '$_POST[publish]',
									aktif      = '$_POST[aktif]',
									status     = '$_POST[status]',
									urutan     = '$_POST[urutan]'
							  WHERE id_modul   = '$_POST[id]'");
  }
  else{
	  //menghapus file gambar
	  if (file_exists($pathfile) AND isset($data)) {
	  unlink("$pathfile");
      } 
	  UploadBanner($nama_file_unik);
	  mysql_query("UPDATE modul SET nama_modul = '$_POST[nama_modul]',
									link       = '$_POST[link]',
									publish    = '$_POST[publish]',
									aktif      = '$_POST[aktif]',
									status     = '$_POST[status]',
									urutan     = '$_POST[urutan]',
									gambar	   = '$nama_file_unik'
							  WHERE id_modul   = '$_POST[id]'");
  }
  header('location:../../media.php?module='.$module);
}
?>
